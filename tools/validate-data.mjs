import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataSource = fs.readFileSync(path.join(root, "data.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
const context = { console, encodeURIComponent };
vm.createContext(context);
vm.runInContext(`${dataSource};globalThis.__foodMapData=FOOD_MAP_DATA`, context);

const data = context.__foodMapData;
const errors = [];
const warnings = [];
const allowedDietaryTags = new Set([
  "pork",
  "beef",
  "seafood",
  "gluten",
  "nuts",
  "alcohol",
  "soy",
  "egg",
  "dairy",
  "poultry",
  "halal",
  "vegetarian"
]);

function duplicates(values) {
  return values.filter((value, index) => values.indexOf(value) !== index);
}

function parseAppConstant(name, opening, closing) {
  const pattern = new RegExp(`const ${name} = (${opening}[\\s\\S]*?\\n${closing});`);
  const match = appSource.match(pattern);
  if (!match) throw new Error(`Unable to find ${name} in app.js`);
  return vm.runInNewContext(`(${match[1]})`);
}

const restaurantIds = data.restaurants.map((restaurant) => restaurant.id);
const sourceIds = new Set(data.sources.map((source) => source.id));
const categoryIds = new Set(data.cuisineCategories.map((category) => category.id));
const imageLibrary = parseAppConstant("dishImageLibrary", "\\[", "\\]");
const imageAssignments = parseAppConstant("dishImageAssignments", "\\{", "\\}");
const imageIds = new Set(imageLibrary.map((image) => image.id));

for (const duplicate of new Set(duplicates(restaurantIds))) {
  errors.push(`Duplicate restaurant id: ${duplicate}`);
}

if (data.provinces.length !== 12) {
  errors.push(`Regional framework should expose 12 entries, found ${data.provinces.length}`);
}

for (const province of data.provinces) {
  const directCategoryIds = data.cuisineCategories
    .filter((category) => category.provinceIds.includes(province.id))
    .map((category) => category.id);
  if (!directCategoryIds.length) errors.push(`Province ${province.id} has no direct regional evidence category`);

  for (const restaurantId of province.restaurantIds) {
    if (!restaurantIds.includes(restaurantId)) {
      errors.push(`Province ${province.id} references missing restaurant ${restaurantId}`);
      continue;
    }
    const restaurant = data.restaurants.find((item) => item.id === restaurantId);
    if (!restaurant.cuisineCategoryIds.some((categoryId) => directCategoryIds.includes(categoryId))) {
      errors.push(`Province ${province.id} references ${restaurantId} without matching regional evidence`);
    }
  }
}

for (const restaurant of data.restaurants) {
  if (!Number.isFinite(restaurant.map?.lat) || !Number.isFinite(restaurant.map?.lng)) {
    errors.push(`${restaurant.id} has invalid coordinates`);
  } else if (restaurant.map.lat < 53.3 || restaurant.map.lat > 53.65 || restaurant.map.lng < -2.5 || restaurant.map.lng > -2.0) {
    warnings.push(`${restaurant.id} falls outside the Manchester audit bounds`);
  }
  if (!restaurant.verificationStatus || !["verified", "partial", "lead"].includes(restaurant.verificationStatus)) {
    errors.push(`${restaurant.id} has no valid verificationStatus`);
  }
  if (!restaurant.googleMapsUrl) errors.push(`${restaurant.id} has no Google Maps source link`);
  for (const categoryId of restaurant.cuisineCategoryIds) {
    if (!categoryIds.has(categoryId)) errors.push(`${restaurant.id} references missing category ${categoryId}`);
  }
  for (const sourceId of restaurant.sourceIds) {
    if (!sourceIds.has(sourceId)) errors.push(`${restaurant.id} references missing source ${sourceId}`);
  }
  for (const dish of restaurant.dishes) {
    for (const tag of dish.dietary || []) {
      if (!allowedDietaryTags.has(tag)) errors.push(`${restaurant.id}/${dish.name} has unknown dietary tag ${tag}`);
    }
  }
}

const allDishes = [
  ...data.restaurants.flatMap((restaurant) => restaurant.dishes),
  ...data.provinces.flatMap((province) => province.representativeDishes || [])
];
const uniqueDishNames = [...new Set(allDishes.map((dish) => dish.name))];
const missingImages = uniqueDishNames.filter((name) => {
  const explicit = allDishes.find((dish) => dish.name === name && dish.imageId)?.imageId;
  return !(explicit || imageAssignments[name]);
});
const unknownImageAssignments = Object.entries(imageAssignments)
  .filter(([, imageId]) => !imageIds.has(imageId))
  .map(([dishName, imageId]) => `${dishName} -> ${imageId}`);

if (missingImages.length) warnings.push(`${missingImages.length} dish names intentionally have no verified image: ${missingImages.join(", ")}`);
for (const assignment of unknownImageAssignments) errors.push(`Unknown image assignment: ${assignment}`);

const categoryLabels = new Map(data.cuisineCategories.map((category) => [category.id, category.label]));
const geojson = {
  type: "FeatureCollection",
  name: "Manchester Chinese Food Culture POIs",
  generatedAt: new Date().toISOString(),
  features: data.restaurants.map((restaurant) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [restaurant.map.lng, restaurant.map.lat]
    },
    properties: {
      id: restaurant.id,
      name: restaurant.name,
      area: restaurant.area,
      province_links: restaurant.provinceLinks,
      cuisine_categories: restaurant.cuisineCategoryIds.map((id) => categoryLabels.get(id) || id),
      signature_dishes: restaurant.dishes.map((dish) => dish.name),
      verification_status: restaurant.verificationStatus,
      last_checked: restaurant.lastChecked,
      source_ids: restaurant.sourceIds,
      google_maps_url: restaurant.googleMapsUrl,
      data_note: restaurant.dataConfidence
    }
  }))
};

if (process.argv.includes("--write")) {
  fs.writeFileSync(path.join(root, "data", "restaurants.geojson"), `${JSON.stringify(geojson, null, 2)}\n`);
}

console.log(`Validated ${data.restaurants.length} restaurants, ${allDishes.length} dish records and ${data.sources.length} sources.`);
console.log(`GeoJSON feature count: ${geojson.features.length}.`);
for (const warning of warnings) console.warn(`Warning: ${warning}`);
for (const error of errors) console.error(`Error: ${error}`);
if (errors.length) process.exitCode = 1;
