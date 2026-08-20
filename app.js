const state = {
  provinceId: FOOD_MAP_DATA.defaultProvince,
  restaurantId: null,
  dishIndex: null,
  searchTerm: "",
  dietaryAvoids: []
};

let manchesterMap = null;
let markerLayer = null;
let markerClusteringEnabled = false;
let mapRefreshTimer = null;
let leafletTileErrors = 0;
let leafletUnavailable = false;

const els = {
  provinceButtons: document.querySelector("#provinceButtons"),
  provinceStory: document.querySelector("#provinceStory"),
  provinceCount: document.querySelector("#provinceCount"),
  frameworkNote: document.querySelector("#frameworkNote"),
  restaurantMarkers: document.querySelector("#restaurantMarkers"),
  restaurantList: document.querySelector("#restaurantList"),
  storyPanel: document.querySelector("#storyPanel"),
  routeLabel: document.querySelector("#routeLabel"),
  activePath: document.querySelector("#activePath"),
  mapLegend: document.querySelector("#mapLegend"),
  dietaryFilters: document.querySelector("#dietaryFilters"),
  clearDietaryButton: document.querySelector("#clearDietaryButton"),
  searchInput: document.querySelector("#searchInput"),
  resetButton: document.querySelector("#resetButton"),
  dishDialog: document.querySelector("#dishDialog"),
  dishDialogBody: document.querySelector("#dishDialogBody"),
  dialogClose: document.querySelector("#dialogClose"),
  sourceButton: document.querySelector("#sourceButton"),
  sourceDrawer: document.querySelector("#sourceDrawer"),
  sourceClose: document.querySelector("#sourceClose"),
  sourceList: document.querySelector("#sourceList"),
  methodButton: document.querySelector("#methodButton"),
  methodDrawer: document.querySelector("#methodDrawer"),
  methodClose: document.querySelector("#methodClose"),
  methodBody: document.querySelector("#methodBody"),
  leafletMap: document.querySelector("#leafletMap"),
  fallbackCityMap: document.querySelector("#fallbackCityMap")
};

const byId = (items, id) => items.find((item) => item.id === id);
const provinceLabel = (province) => province.englishName || province.name;
const dishLabel = (dish) => dish.englishName || dish.name;
const regionLabelsInEnglish = {
  "川渝": "Sichuan-Chongqing",
  "北京": "Beijing",
  "云南": "Yunnan",
  "广东": "Guangdong",
  "香港": "Hong Kong",
  "湖南": "Hunan",
  "东北": "Northeast",
  "川味源流": "Sichuan origins",
  "潮汕": "Chaoshan",
  "陕西": "Shaanxi"
};
const regionLabelInEnglish = (label) => regionLabelsInEnglish[label] || label;
const restaurantRegionLabels = (restaurant) => restaurant.provinceLinks.map(regionLabelInEnglish);
const provinceMarkerLabels = {
  xinjiang: ["Xinjiang"],
  chuanyu: ["Sichuan", "Chongqing"],
  shaanxi: ["North", "west"],
  hunan: ["Hunan"],
  guangdong: ["Guang", "dong"],
  hongkong: ["Hong", "Kong"],
  beijing: ["Beijing"],
  shandong: ["Shan", "dong"],
  jiangnan: ["Jiangsu", "Zhejiang"],
  anhui: ["Anhui"],
  fujian: ["Fujian"],
  yunnan: ["Yunnan", "Guizhou"],
  dongbei: ["North", "east"]
};
const dishImageLibrary = [
  {
    id: "mapo-tofu",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Authentic_Mapo_Tofu.jpg",
    source: "Wikimedia Commons"
  },
  {
    id: "peking-duck",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Peking_duck_by_Mr_Wabu_in_Beijing.jpg",
    source: "Wikimedia Commons"
  },
  {
    id: "hot-pot-general",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/17/Shanghai_hot_pots-20150518-RM-102531.jpg",
    source: "Wikimedia Commons",
    referenceType: "general"
  },
  {
    id: "malatang",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Malatang_from_Hope_Tree_%2820220226172344%29.jpg",
    source: "Wikimedia Commons",
    referenceType: "general"
  },
  {
    id: "dandan-noodles",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Dan-dan_noodles%2C_Shanghai.jpg",
    source: "Wikimedia Commons"
  },
  {
    id: "zhajiangmian",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Noodles_with_diced_meat_soybean_paste_before_stirring_%2820210102181759%29.jpg",
    source: "Wikimedia Commons"
  },
  {
    id: "dim-sum-general",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Dim_Sum_Breakfast.jpg",
    source: "Wikimedia Commons",
    referenceType: "general"
  },
  {
    id: "roast-duck-rice-general",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Roast_duck_rice_in_Singapore.jpg",
    source: "Wikimedia Commons",
    referenceType: "general"
  },
  {
    id: "fried-rice-general",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/Chinese_fried_rice.jpg",
    source: "Wikimedia Commons",
    referenceType: "general"
  },
  {
    id: "big-plate-chicken",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dapanji_urumqi.jpg",
    source: "Wikimedia Commons"
  },
  {
    id: "crossing-bridge-noodles",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Crossing_the_Bridge_Rice_Noodles_full_ingredients_in_Mengzi_(20200126132053).jpg",
    source: "Wikimedia Commons"
  },
  {
    id: "steam-pot-chicken",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Steam_Pot_Chicken.jpg",
    source: "Wikimedia Commons"
  },
  {
    id: "lamb-skewers",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mutton_bbq.jpg",
    source: "Wikimedia Commons"
  },
  {
    id: "chongqing-xiaomian",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chongqing_Xiaomian_with_fried_eggs.jpg/500px-Chongqing_Xiaomian_with_fried_eggs.jpg",
    source: "Wikimedia Commons"
  },
  {
    id: "sichuan-boiled-fish",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Shuizhuyu_at_Hamarkand_Silk_Road_Cuisine%2C_Beiqinglu_%2820230121154615%29.jpg/500px-Shuizhuyu_at_Hamarkand_Silk_Road_Cuisine%2C_Beiqinglu_%2820230121154615%29.jpg",
    source: "Wikimedia Commons"
  },
  {
    id: "twice-cooked-pork",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Huiguorou_made_from_Neijiang_local_pork_at_Daqian_Restaurant%2C_Beidadi_%2820251011111845%29.jpg/500px-Huiguorou_made_from_Neijiang_local_pork_at_Daqian_Restaurant%2C_Beidadi_%2820251011111845%29.jpg",
    source: "Wikimedia Commons"
  },
  {
    id: "dry-fried-beef-ho-fun",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Gon_caau_ngau_ho_%2820150222171214%29.JPG/960px-Gon_caau_ngau_ho_%2820150222171214%29.JPG",
    source: "Wikimedia Commons"
  },
  {
    id: "yibin-ranmian",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ranmian_at_Beijing_Yibin_Hostel_%2820210401111937%29.jpg/960px-Ranmian_at_Beijing_Yibin_Hostel_%2820210401111937%29.jpg",
    source: "N509FZ / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ranmian_at_Beijing_Yibin_Hostel_(20210401111937).jpg"
  },
  {
    id: "laziji",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/La%20zi%20ji.jpg",
    source: "lazy fri13th / Wikimedia Commons (CC BY 2.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:La_zi_ji.jpg"
  },
  {
    id: "noodle-bowl-general",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chongqing_Xiaomian_with_fried_eggs.jpg/500px-Chongqing_Xiaomian_with_fried_eggs.jpg",
    source: "Wikimedia Commons",
    sourceUrl: "https://zh.wikipedia.org/wiki/File:Chongqing_Xiaomian_with_fried_eggs.jpg",
    referenceType: "general"
  },
  {
    id: "seafood-bbq-general",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Diamond%20Knot%20Brewing%20Company%20meal.jpg",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Grilled_seafood",
    referenceType: "general"
  },
  {
    id: "chicken-curry-general",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken%20Curry.JPG",
    source: "Miansari66 / Wikimedia Commons (CC0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chicken_Curry.JPG",
    referenceType: "general"
  },
  {
    id: "peking-duck-pancakes",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Roast%20Duck%2C%20crepes%2C%20cucumber%2C%20spring%20onion%20-%20Little%20Beijing%20AUD45.80%202-dish%20set%20%284714468748%29.jpg",
    source: "Alpha / Wikimedia Commons (CC BY-SA 2.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Roast_Duck,_crepes,_cucumber,_spring_onion_-_Little_Beijing_AUD45.80_2-dish_set_(4714468748).jpg"
  },
  {
    id: "hunan-fish-head",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hunan%20cuisine%2C%20steamed%20fish%20head%20in%20chili%20sauce.jpg",
    source: "Steamed fish head in chili sauce / Wikimedia Commons (CC0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hunan_cuisine,_steamed_fish_head_in_chili_sauce.jpg"
  },
  {
    id: "hunan-stir-fried-beef",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/%E6%B9%98%E8%8F%9C%E9%A6%86%E4%B9%8B%E5%B0%8F%E7%82%92%E9%BB%84%E7%89%9B%E8%82%89.jpg/960px-%E6%B9%98%E8%8F%9C%E9%A6%86%E4%B9%8B%E5%B0%8F%E7%82%92%E9%BB%84%E7%89%9B%E8%82%89.jpg",
    source: "Liuxingy / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E6%B9%98%E8%8F%9C%E9%A6%86%E4%B9%8B%E5%B0%8F%E7%82%92%E9%BB%84%E7%89%9B%E8%82%89.jpg",
    referenceType: "general"
  },
  {
    id: "steamed-beef-rice-flour",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/%E7%B2%89%E8%92%B8%E7%89%9B%E8%82%89_Minced_Beef_Steamed_with_Flour_Y4_-_%E9%BE%99%E6%8A%84%E6%89%8B%E9%A4%90%E5%8E%85_Long_Chao_Shou_Canting_%281483025901%29.jpg/960px-%E7%B2%89%E8%92%B8%E7%89%9B%E8%82%89_Minced_Beef_Steamed_with_Flour_Y4_-_%E9%BE%99%E6%8A%84%E6%89%8B%E9%A4%90%E5%8E%85_Long_Chao_Shou_Canting_%281483025901%29.jpg",
    source: "Alpha / Wikimedia Commons (CC BY-SA 2.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E7%B2%89%E8%92%B8%E7%89%9B%E8%82%89_Minced_Beef_Steamed_with_Flour_Y4_-_%E9%BE%99%E6%8A%84%E6%89%8B%E9%A4%90%E5%8E%85_Long_Chao_Shou_Canting_(1483025901).jpg"
  },
  {
    id: "dry-pot-chicken",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dry%20pot%20chicken.jpg",
    source: "1402Dragon Pool / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dry_pot_chicken.jpg"
  },
  {
    id: "mala-xiangguo",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ma%20La%20Xiang%20Guo.jpg",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Mala_xiangguo"
  },
  {
    id: "sichuan-hotpot",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%E9%BA%BB%E8%BE%A3%E7%81%AB%E9%94%85%E6%B1%A4%20Sichuan%20Hotpot%20%281648194463%29.jpg",
    source: "Alpha / Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E9%BA%BB%E8%BE%A3%E7%81%AB%E9%94%85%E6%B1%A4_Sichuan_Hotpot_(1648194463).jpg"
  },
  {
    id: "fuqi-feipian",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%A4%AB%E5%A6%BB%E8%82%BA%E7%89%87%20%2813119456693%29.jpg",
    source: "Pooi Wang Chan / Wikimedia Commons (CC BY-SA 2.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E5%A4%AB%E5%A6%BB%E8%82%BA%E7%89%87_(13119456693).jpg"
  },
  {
    id: "knife-cut-noodles",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%E3%81%9C%E3%81%B2%E4%B8%80%E5%BA%A6%E3%80%81%E5%87%BA%E6%9D%A5%E3%81%9F%E3%81%A6%E3%81%AE%E6%9C%AC%E7%89%A9%E3%81%AE%E5%88%80%E5%89%8A%E9%BA%BA%20%28505796780%29.jpg",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E3%81%9C%E3%81%B2%E4%B8%80%E5%BA%A6%E3%80%81%E5%87%BA%E6%9D%A5%E3%81%9F%E3%81%A6%E3%81%AE%E6%9C%AC%E7%89%A9%E3%81%AE%E5%88%80%E5%89%8A%E9%BA%BA_(505796780).jpg",
    referenceType: "general"
  },
  {
    id: "beef-noodle-soup",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fine%20Beef%20Noodles.jpg",
    source: "Chongkian / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fine_Beef_Noodles.jpg",
    referenceType: "general"
  },
  {
    id: "chaoshan-beef-hotpot",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%E6%BD%AE%E6%B1%95%E7%89%9B%E8%82%89%E7%81%AB%E9%94%85.jpg",
    source: "Guwiqiie / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E6%BD%AE%E6%B1%95%E7%89%9B%E8%82%89%E7%81%AB%E9%94%85.jpg"
  },
  {
    id: "beef-ball-general",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yi%20mein%20Chinese%20medicated%20soup%20with%20beef%20bellies%20and%20beef%20balls%20from%20Yuen%20Long%20Drunk%20Bull%20Chinese%20noodle%20shop.jpg",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Yi_mein_Chinese_medicated_soup_with_beef_bellies_and_beef_balls_from_Yuen_Long_Drunk_Bull_Chinese_noodle_shop.jpg",
    referenceType: "general"
  },
  {
    id: "northeast-iron-pot-stew",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tieguodun%20at%20a%20northeastern%20restaurant%20in%20Hengdian%2C%20Zhejiang%20%2820250131183653%29.jpg",
    source: "N509FZ / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tieguodun_at_a_northeastern_restaurant_in_Hengdian,_Zhejiang_(20250131183653).jpg"
  },
  {
    id: "guobaorou-general",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%E9%94%85%E5%B7%B4%E8%82%89%20Crispy%20Fried%20Pork%20with%20Sweet%20and%20Sour%20Sauce%20-%20Original%20Taste.jpg",
    source: "Alpha / Wikimedia Commons (CC BY-SA 2.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E9%94%85%E5%B7%B4%E8%82%89_Crispy_Fried_Pork_with_Sweet_and_Sour_Sauce_-_Original_Taste.jpg",
    referenceType: "general"
  },
  {
    id: "tofu-general",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Authentic_Mapo_Tofu.jpg",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Authentic_Mapo_Tofu.jpg",
    referenceType: "general"
  },
  {
    id: "yang-guo-fu-mushroom-broth",
    url: "./assets/dishes/yang-guo-fu-mushroom-broth.jpg",
    source: "User-provided field reference (2026)"
  },
  {
    id: "yang-guo-fu-tomato-broth",
    url: "./assets/dishes/yang-guo-fu-tomato-broth.jpg",
    source: "User-provided field reference (2026)"
  },
  {
    id: "uyghur-polu",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Polu.jpg",
    source: "Mizu basyo / Wikimedia Commons (CC BY-SA 3.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Polu.jpg"
  },
  {
    id: "roujiamo",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi%27an%20roujiamo%2002.jpg",
    source: "KQuhen / Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Xi%27an_roujiamo_02.jpg"
  },
  {
    id: "youpo-noodles",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/You%20Po%20Mian%EF%BC%88%20Oil%20poured%20noodles%EF%BC%89.webp",
    source: "syctown / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:You_Po_Mian%EF%BC%88_Oil_poured_noodles%EF%BC%89.webp"
  },
  {
    id: "hong-kong-curry-rice",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/HK%20SYP%20%E8%A5%BF%E7%92%B0%20Sai%20Ying%20Pun%20%E9%B4%BB%E8%88%88%E8%8C%B6%E9%A4%90%E5%BB%B3%20Hung%20Hing%20Restaurant%20%E5%A4%96%E8%B3%A3%20Take%20away%20food%20%E6%99%9A%E9%A4%90%20diner%20%E7%9B%92%E9%A3%AF%20box%20rice%20curry%20chicken%20August%202020%20SS2%2001.jpg",
    source: "Shui Menissa Emoiunt / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:HK_SYP_%E8%A5%BF%E7%92%B0_Sai_Ying_Pun_%E9%B4%BB%E8%88%88%E8%8C%B6%E9%A4%90%E5%BB%B3_Hung_Hing_Restaurant_%E5%A4%96%E8%B3%A3_Take_away_food_%E6%99%9A%E9%A4%90_diner_%E7%9B%92%E9%A3%AF_box_rice_curry_chicken_August_2020_SS2_01.jpg"
  },
  {
    id: "pineapple-bun",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pineapple%20bun.jpg",
    source: "Dennis Wong / Wikimedia Commons (CC BY 2.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pineapple_bun.jpg"
  },
  {
    id: "sweet-sour-carp",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tianjin-style%20deep%20fried%20carp%20in%20sweet-sour%20sauce%20%2820190111184649%29.jpg",
    source: "N509FZ / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tianjin-style_deep_fried_carp_in_sweet-sour_sauce_(20190111184649).jpg",
    referenceType: "general"
  },
  {
    id: "scallion-sea-cucumber",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%E8%91%B1%E7%83%A7%E6%B5%B7%E5%8F%82%20001.jpg",
    source: "Worldtravelwiki / Wikimedia Commons (CC BY-SA 3.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E8%91%B1%E7%83%A7%E6%B5%B7%E5%8F%82_001.jpg"
  },
  {
    id: "lions-head-meatballs",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lions%20head%20meatballs%20in%20brown%20sauce.jpg",
    source: "Jpatokal / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lions_head_meatballs_in_brown_sauce.jpg"
  },
  {
    id: "buddha-jumps-wall",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Buddha%20jumps%20over%20the%20wall%20at%20Jingrong%20%2820161203135907%29.jpg",
    source: "N509FZ / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Buddha_jumps_over_the_wall_at_Jingrong_(20161203135907).jpg"
  },
  {
    id: "shacha-noodles",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/20230131%20Seafood%20Shacha%20Noodle.jpg",
    source: "Windmemories / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20230131_Seafood_Shacha_Noodle.jpg"
  },
  {
    id: "yunnan-mushroom-hotpot",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mushroom%20hot%20pot%20in%20Yunnan.jpg",
    source: "Hhhlx / Wikimedia Commons (CC BY 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mushroom_hot_pot_in_Yunnan.jpg"
  },
  {
    id: "black-pepper-beef",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%E9%BB%91%E6%A4%92%E7%89%9B%E8%82%89%E9%A5%AD%20Black%20Pepper%20Beef%20on%20rice%20-%20Hongyun%20Chinese%20Restaurant%20AUD8.50%20%283450250738%29.jpg",
    source: "Alpha / Wikimedia Commons (CC BY-SA 2.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E9%BB%91%E6%A4%92%E7%89%9B%E8%82%89%E9%A5%AD_Black_Pepper_Beef_on_rice_-_Hongyun_Chinese_Restaurant_AUD8.50_(3450250738).jpg",
    referenceType: "general"
  },
  {
    id: "yangzhou-fried-rice-xhs",
    url: "./assets/dishes/chinese-sources/yangzhou-fried-rice-xhs.webp",
    source: "Xiaohongshu creator: 酥鱼食验室",
    sourceUrl: "https://www.xiaohongshu.com/explore/69209d00000000001f004f43",
    caption: "Chinese-source dish reference (not restaurant-specific)",
    rightsStatus: "permission-pending"
  },
  {
    id: "chongqing-xiaomian-xhs",
    url: "./assets/dishes/chinese-sources/chongqing-xiaomian-xhs.webp",
    source: "Xiaohongshu creator: 9月捡了个猫",
    sourceUrl: "https://www.xiaohongshu.com/explore/69a43132000000002303a54c",
    caption: "Chongqing field reference (not Manchester restaurant-specific)",
    rightsStatus: "permission-pending"
  },
  {
    id: "shrimp-siu-mai-xhs",
    url: "./assets/dishes/chinese-sources/shrimp-siu-mai-xhs.webp",
    source: "Xiaohongshu creator: 小漓泡泡糖如履薄冰冰",
    sourceUrl: "https://www.xiaohongshu.com/explore/69b4fec1000000002302290c",
    caption: "Component reference: fresh shrimp siu mai",
    rightsStatus: "permission-pending"
  },
  {
    id: "triple-roast-rice-xhs",
    url: "./assets/dishes/chinese-sources/triple-roast-rice-xhs.webp",
    source: "Xiaohongshu creator: 茱茱猪猪",
    sourceUrl: "https://www.xiaohongshu.com/explore/69ca5fa4000000001f002b09",
    caption: "UK Cantonese roast-meat reference (not Manchester restaurant-specific)",
    rightsStatus: "permission-pending"
  },
  {
    id: "cantonese-crispy-noodles-xhs",
    url: "./assets/dishes/chinese-sources/cantonese-crispy-noodles-xhs.webp",
    source: "Xiaohongshu creator: Chinatown中國城大酒樓",
    sourceUrl: "https://www.xiaohongshu.com/explore/6624f366000000001c0049aa",
    caption: "UK Cantonese crispy-noodle reference (not Manchester restaurant-specific)",
    rightsStatus: "permission-pending"
  },
  {
    id: "qiaojiao-beef-manchester-xhs",
    url: "./assets/dishes/chinese-sources/qiaojiao-beef-manchester-xhs.webp",
    source: "Xiaohongshu creator: 吃肉的兔子Janae",
    sourceUrl: "https://www.xiaohongshu.com/explore/69170ab700000001b030265",
    caption: "Manchester restaurant-linked visual reference",
    rightsStatus: "permission-pending"
  },
  {
    id: "chaoshan-beef-balls-xhs",
    url: "./assets/dishes/chinese-sources/chaoshan-beef-balls-xhs.webp",
    source: "Zora / Xiaohongshu",
    sourceUrl: "https://www.xiaohongshu.com/explore/6a0ea99200000000070280be",
    caption: "Chinese-source dish reference (not restaurant-specific)",
    rightsStatus: "permission-pending"
  },
  {
    id: "salt-pepper-tofu-xhs",
    url: "./assets/dishes/chinese-sources/salt-pepper-tofu-xhs.webp",
    source: "Xiaohongshu",
    sourceUrl: "https://www.xiaohongshu.com/explore/65dc5be50000000007027e7c"
  },
  {
    id: "mixed-vegetable-tofu-xhs",
    url: "./assets/dishes/chinese-sources/mixed-vegetable-tofu-xhs.jpg",
    source: "Xiaohongshu",
    sourceUrl: "https://www.xiaohongshu.com/"
  },
  {
    id: "kung-pao-tofu-xhs",
    url: "./assets/dishes/chinese-sources/kung-pao-tofu-xhs.jpg",
    source: "Xiaohongshu",
    sourceUrl: "https://www.xiaohongshu.com/"
  },
  {
    id: "pork-stewed-vermicelli-xhs",
    url: "./assets/dishes/chinese-sources/pork-stewed-vermicelli-xhs.jpg",
    source: "Xiaohongshu",
    sourceUrl: "https://www.xiaohongshu.com/"
  },
  {
    id: "sichuan-spicy-beef-noodles",
    url: "./assets/dishes/chinese-sources/sichuan-spicy-beef-noodles.jpg",
    source: "LanguageTeaching / Wikimedia Commons (CC BY 2.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spicy_Beef_%26_Noodles_(Sichuan)_(13212814553).jpg"
  },
  {
    id: "oneplus-seafood-platter",
    url: "./assets/dishes/chinese-sources/oneplus-seafood-platter.jpg",
    source: "One+ Restaurant official website",
    sourceUrl: "https://www.oneplusrestaurant.co.uk/",
    caption: "Restaurant-specific seafood reference"
  },
  {
    id: "huizhou-fermented-mandarin-fish",
    url: "./assets/dishes/chinese-sources/huizhou-fermented-mandarin-fish.jpg",
    source: "Zheng Zhou / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fermented_mandarin_fish.jpg",
    caption: "Verified Huizhou dish reference"
  },
  {
    id: "huizhou-hairy-tofu",
    url: "./assets/dishes/chinese-sources/huizhou-hairy-tofu.jpg",
    source: "Zheng Zhou / Wikimedia Commons (CC BY-SA 4.0)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hairy_Tofu.jpg",
    caption: "Verified Huizhou dish reference"
  },
  {
    id: "happy-seasons-haaland-special-reference",
    url: "./assets/dishes/final-update/happy-seasons-haaland-special.jpg",
    source: "Student-curated reference image",
    caption: "Roast-meat visual reference",
    referenceType: "general"
  },
  {
    id: "xiongqi-mala-yuanyang-hotpot-reference",
    url: "./assets/dishes/final-update/xiongqi-mala-yuanyang-hotpot.jpg",
    source: "Student-curated reference image",
    caption: "Twin-broth mala hot-pot reference"
  },
  {
    id: "tai-wu-roast-duck-ho-fun-reference",
    url: "./assets/dishes/final-update/tai-wu-roast-duck-ho-fun.jpg",
    source: "Student-curated reference image",
    caption: "Roast-duck rice-noodle visual reference",
    referenceType: "general"
  },
  {
    id: "oneplus-individual-hotpot-format-reference",
    url: "./assets/dishes/final-update/oneplus-individual-hotpot-format.jpg",
    source: "Student-curated reference image",
    caption: "One+ individual hot-pot service-format reference",
    referenceType: "general"
  },
  {
    id: "mr-hong-beef-noodle-soup-reference",
    url: "./assets/dishes/final-update/mr-hong-beef-noodle-soup.jpg",
    source: "Student-curated reference image",
    caption: "Beef noodle soup reference"
  },
  {
    id: "xiang-zhi-wei-chopped-chilli-fish-reference",
    url: "./assets/dishes/final-update/xiang-zhi-wei-chopped-chilli-fish.jpg",
    source: "Student-curated reference image",
    caption: "Chopped-chilli whole-fish reference"
  },
  {
    id: "no8-yuanyang-hotpot-reference",
    url: "./assets/dishes/final-update/no8-yuanyang-hotpot.jpg",
    source: "Student-curated reference image",
    caption: "Twin-broth hot-pot reference"
  },
  {
    id: "peace-garden-kung-pao-tofu-reference",
    url: "./assets/dishes/final-update/peace-garden-kung-pao-tofu.jpg",
    source: "Student-curated reference image",
    caption: "Kung pao tofu reference"
  },
  {
    id: "mei-dim-shrimp-siu-mai-reference",
    url: "./assets/dishes/final-update/mei-dim-shrimp-siu-mai.jpg",
    source: "Student-curated reference image",
    caption: "Shrimp siu mai component reference",
    referenceType: "general"
  },
  {
    id: "only-yu-red-rice-roll-reference",
    url: "./assets/dishes/final-update/only-yu-red-rice-roll.jpg",
    source: "Student-curated reference image",
    caption: "Red rice-roll component reference",
    referenceType: "general"
  },
  {
    id: "chuan-yun-xuan-knife-cut-noodles-reference",
    url: "./assets/dishes/final-update/chuan-yun-xuan-knife-cut-noodles.jpg",
    source: "Student-curated reference image",
    caption: "Knife-cut noodle component reference",
    referenceType: "general"
  },
  {
    id: "wings-seafood-fried-rice-reference",
    url: "./assets/dishes/final-update/wings-seafood-fried-rice.jpg",
    source: "Student-curated reference image",
    caption: "Seafood fried rice reference"
  },
  {
    id: "blue-eyed-panda-mixed-vegetable-tofu-reference",
    url: "./assets/dishes/final-update/blue-eyed-panda-mixed-vegetable-tofu.jpg",
    source: "Student-curated reference image",
    caption: "Mixed-vegetable tofu visual reference; gluten-free status requires confirmation",
    referenceType: "general"
  },
  {
    id: "shandong-sweet-sour-carp-reference",
    url: "./assets/dishes/final-update/shandong-sweet-sour-carp.jpg",
    source: "Student-curated reference image",
    caption: "Shandong-style sweet-and-sour carp reference"
  },
  {
    id: "peace-garden-vegetarian-chow-mein-reference",
    url: "./assets/dishes/final-update/peace-garden-vegetarian-chow-mein.jpg",
    source: "Student-curated reference image",
    caption: "Vegetarian-style chow mein reference"
  }
];

// Images are explicitly assigned by dish name. An unassigned dish stays unpictured
// until a source-specific image is verified, rather than receiving a misleading photo.
const dishImageAssignments = {
  "大盘鸡": "big-plate-chicken",
  "羊肉串": "lamb-skewers",
  "重庆小面": "chongqing-xiaomian-xhs",
  "宜宾燃面": "yibin-ranmian",
  "歌乐山辣子鸡": "laziji",
  "辣子鸡": "laziji",
  "麻辣鸳鸯锅": "xiongqi-mala-yuanyang-hotpot-reference",
  "重庆风味麻辣锅": "sichuan-hotpot",
  "鸳鸯锅": "no8-yuanyang-hotpot-reference",
  "手工面与米饭碗": "oneplus-individual-hotpot-format-reference",
  "海鲜烧烤拼盘": "oneplus-seafood-platter",
  "Haaland Special": "happy-seasons-haaland-special-reference",
  "Lily Kwok's Chicken Curry": "chicken-curry-general",
  "北京烤鸭卷饼": "peking-duck-pancakes",
  "广式脆面": "cantonese-crispy-noodles-xhs",
  "剁椒鱼": "xiang-zhi-wei-chopped-chilli-fish-reference",
  "小炒牛肉": "hunan-stir-fried-beef",
  "粉蒸牛肉": "steamed-beef-rice-flour",
  "干锅鸡": "dry-pot-chicken",
  "麻辣香锅": "mala-xiangguo",
  "夫妻肺片": "fuqi-feipian",
  "刀削面与米线": "chuan-yun-xuan-knife-cut-noodles-reference",
  "跷脚牛肉": "qiaojiao-beef-manchester-xhs",
  "香辣牛肉面": "sichuan-spicy-beef-noodles",
  "红米肠与虾饺": "only-yu-red-rice-roll-reference",
  "烧腊三拼": "triple-roast-rice-xhs",
  "烧味拼盘": "triple-roast-rice-xhs",
  "烧鸭与河粉": "tai-wu-roast-duck-ho-fun-reference",
  "潮汕牛肉火锅": "chaoshan-beef-hotpot",
  "手打牛肉丸": "chaoshan-beef-balls-xhs",
  "东北铁锅炖": "northeast-iron-pot-stew",
  "锅包肉": "guobaorou-general",
  "黑椒牛肉": "black-pepper-beef",
  "牛肉汤面": "mr-hong-beef-noodle-soup-reference",
  "麻辣牛肉面": "sichuan-spicy-beef-noodles",
  "素炒面": "peace-garden-vegetarian-chow-mein-reference",
  "水煮鱼": "sichuan-boiled-fish",
  "回锅肉": "twice-cooked-pork",
  "干炒牛河": "dry-fried-beef-ho-fun",
  "麻婆豆腐": "mapo-tofu",
  "川渝麻婆豆腐": "mapo-tofu",
  "北京烤鸭": "peking-duck",
  "炸酱面": "zhajiangmian",
  "老北京炸酱面": "zhajiangmian",
  "川渝担担面": "dandan-noodles",
  "过桥米线": "crossing-bridge-noodles",
  "汽锅鸡": "steam-pot-chicken",
  "手抓饭": "uyghur-polu",
  "重庆火锅": "sichuan-hotpot",
  "肉夹馍": "roujiamo",
  "油泼面": "youpo-noodles",
  "剁椒鱼头": "hunan-fish-head",
  "小炒黄牛肉": "hunan-stir-fried-beef",
  "茶餐厅咖喱饭": "hong-kong-curry-rice",
  "菠萝包": "pineapple-bun",
  "糖醋鲤鱼": "shandong-sweet-sour-carp-reference",
  "葱烧海参": "scallion-sea-cucumber",
  "狮子头": "lions-head-meatballs",
  "佛跳墙": "buddha-jumps-wall",
  "沙茶面": "shacha-noodles",
  "野生菌火锅": "yunnan-mushroom-hotpot",
  "臭鳜鱼": "huizhou-fermented-mandarin-fish",
  "徽州毛豆腐": "huizhou-hairy-tofu",
  "早茶点心": "dim-sum-general",
  "粤式点心拼盘": "dim-sum-general",
  "家常点心拼盘": "dim-sum-general",
  "家常点心篮": "dim-sum-general",
  "虾饺烧卖": "mei-dim-shrimp-siu-mai-reference",
  "现代点心": "dim-sum-general",
  "烧味饭": "roast-duck-rice-general",
  "三拼烧味饭": "triple-roast-rice-xhs",
  "烧鸭饭": "roast-duck-rice-general",
  "粤式烧鸭": "roast-duck-rice-general",
  "扬州炒饭": "yangzhou-fried-rice-xhs",
  "海鲜炒饭": "wings-seafood-fried-rice-reference",
  "个人小火锅": "oneplus-individual-hotpot-format-reference",
  "杨国福菌菇汤麻辣烫": "yang-guo-fu-mushroom-broth",
  "杨国福番茄汤麻辣烫": "yang-guo-fu-tomato-broth",
  "椒盐豆腐": "salt-pepper-tofu-xhs",
  "无麸质杂菜豆腐": "blue-eyed-panda-mixed-vegetable-tofu-reference",
  "宫保豆腐": "peace-garden-kung-pao-tofu-reference",
  "猪肉炖粉条": "pork-stewed-vermicelli-xhs"
};

function dishImage(dish) {
  const imageId = dish.imageId || dishImageAssignments[dish.name];
  return dishImageLibrary.find((item) => item.id === imageId) || null;
}

function dishImageMarkup(dish, className = "dish-image") {
  const image = dishImage(dish);
  if (!image) {
    return `
      <figure class="${className} dish-image-pending" aria-label="Reference image to be verified">
        <div class="dish-image-pending-copy">
          <strong>Image to be verified</strong>
          <span>Showing dish information without a substitute photo.</span>
        </div>
      </figure>
    `;
  }
  const isXiaohongshu = image.sourceUrl?.includes("xiaohongshu.com") || image.source?.includes("Xiaohongshu");
  const caption = image.caption || (image.referenceType === "general" ? "General visual reference" : "Reference image");
  const sourceCaption = isXiaohongshu
    ? 'Source: <a href="https://www.xiaohongshu.com/" target="_blank" rel="noreferrer">Xiaohongshu</a>'
    : `${caption}: ${image.sourceUrl ? `<a href="${image.sourceUrl}" target="_blank" rel="noreferrer">${image.source}</a>` : image.source}`;
  return `
    <figure class="${className}">
      <img src="${image.url}" alt="${dishLabel(dish)} reference photo" loading="lazy" data-dish-image />
      <figcaption>
        <span>${sourceCaption}</span>
        <span class="reference-only-badge">Image for reference only</span>
      </figcaption>
    </figure>
  `;
}

function dishThumbnailMarkup(dish) {
  const image = dishImage(dish);
  if (!image) {
    return '<span class="dish-thumb-wrap"><span class="dish-thumb dish-thumb-pending" aria-label="Verified photo pending">Photo<br>pending</span></span>';
  }
  return `
    <span class="dish-thumb-wrap">
      <img class="dish-thumb" src="${image.url}" alt="${dishLabel(dish)} thumbnail" loading="lazy" data-dish-thumbnail />
      <small class="dish-thumb-reference">Reference only</small>
    </span>
  `;
}

function bindDishImageFallbacks() {
  document.querySelectorAll("img[data-dish-image]").forEach((image) => {
    const showFallback = () => {
      const figure = image.closest("figure");
      if (!figure || figure.classList.contains("dish-image-pending")) return;
      figure.classList.add("dish-image-pending");
      figure.setAttribute("aria-label", "Reference image could not be loaded");
      figure.innerHTML = `
        <div class="dish-image-pending-copy">
          <strong>Image unavailable</strong>
          <span>The dish information remains available while this reference image is checked.</span>
        </div>
      `;
    };
    image.addEventListener("error", showFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) showFallback();
  });

  document.querySelectorAll("img[data-dish-thumbnail]").forEach((image) => {
    const showFallback = () => {
      const fallback = document.createElement("span");
      fallback.className = "dish-thumb dish-thumb-pending";
      fallback.setAttribute("aria-label", "Reference image unavailable");
      fallback.textContent = "Image unavailable";
      image.replaceWith(fallback);
      const referenceNote = fallback.closest(".dish-thumb-wrap")?.querySelector(".dish-thumb-reference");
      if (referenceNote) referenceNote.remove();
    };
    image.addEventListener("error", showFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) showFallback();
  });
}

const dietaryLabels = {
  pork: "Pork",
  beef: "Beef",
  seafood: "Seafood",
  gluten: "Wheat/gluten",
  nuts: "Peanut/sesame",
  alcohol: "Alcohol",
  soy: "Soy",
  egg: "Egg",
  dairy: "Dairy",
  poultry: "Poultry",
  halal: "Ask halal status",
  vegetarian: "Vegetarian option"
};

function dishDietaryTags(dish) {
  const profile = dish.dietary ? { tags: dish.dietary, note: dish.dietaryNote } : FOOD_DISH_DIETARY_PROFILES[dish.name];
  return [...new Set(profile?.tags || [])];
}

function dishDietaryNote(dish) {
  return dish.dietary ? dish.dietaryNote : FOOD_DISH_DIETARY_PROFILES[dish.name]?.note;
}

function vegetarianFilterActive() {
  return state.dietaryAvoids.includes("vegetarian");
}

function activeAvoidTags() {
  return state.dietaryAvoids.filter((filterId) => filterId !== "vegetarian");
}

function dishHasDietaryConflict(dish) {
  const tags = dishDietaryTags(dish);
  const hasAvoidedIngredient = activeAvoidTags().some((avoidId) => tags.includes(avoidId));
  const missesVegetarianRequirement = vegetarianFilterActive() && !tags.includes("vegetarian");
  return hasAvoidedIngredient || missesVegetarianRequirement;
}

function dishDietaryChips(dish) {
  const tags = dishDietaryTags(dish).filter((tag) => dietaryLabels[tag]);
  const primaryTags = tags.filter((tag) => tag !== "halal" && tag !== "vegetarian").slice(0, 4);
  const supportTags = tags.filter((tag) => tag === "halal" || tag === "vegetarian");
  return [...primaryTags, ...supportTags]
    .map((tag) => {
      const stateClass = tag === "vegetarian" && vegetarianFilterActive()
        ? "is-match"
        : activeAvoidTags().includes(tag) ? "is-warning" : "";
      return `<span class="${stateClass}">${dietaryLabels[tag]}</span>`;
    })
    .join("");
}

function restaurantHasSafeDish(restaurant) {
  if (!state.dietaryAvoids.length) return true;
  return restaurant.dishes.some((dish) => !dishHasDietaryConflict(dish));
}

function currentProvince() {
  return byId(FOOD_MAP_DATA.provinces, state.provinceId);
}

function restaurantsForProvince(province = currentProvince()) {
  return province.restaurantIds
    .map((id) => byId(FOOD_MAP_DATA.restaurants, id))
    .filter(Boolean);
}

function filteredRestaurants() {
  const term = state.searchTerm.trim().toLowerCase();
  const base = restaurantsForProvince().filter(restaurantHasSafeDish);
  if (!term) return base;

  return base.filter((restaurant) => {
    const dishText = restaurant.dishes.map((dish) => `${dish.name} ${dish.englishName} ${dish.tags.join(" ")}`).join(" ");
    const haystack = `${restaurant.name} ${restaurant.area} ${restaurant.description} ${restaurant.provinceLinks.join(" ")} ${restaurantRegionLabels(restaurant).join(" ")} ${dishText}`.toLowerCase();
    return haystack.includes(term);
  });
}

function currentRestaurant() {
  const restaurants = filteredRestaurants();
  if (state.restaurantId && restaurants.some((restaurant) => restaurant.id === state.restaurantId)) {
    return byId(FOOD_MAP_DATA.restaurants, state.restaurantId);
  }
  return restaurants[0] || null;
}

function currentDish(restaurant = currentRestaurant()) {
  if (!restaurant) return null;
  if (state.dishIndex !== null) {
    const selectedDish = restaurant.dishes[state.dishIndex];
    if (selectedDish && !dishHasDietaryConflict(selectedDish)) return selectedDish;
  }

  const province = currentProvince();
  return (
    restaurant.dishes.find((dish) => dish.province === province.name && !dishHasDietaryConflict(dish)) ||
    restaurant.dishes.find((dish) => !dishHasDietaryConflict(dish)) ||
    restaurant.dishes[0] ||
    null
  );
}

function orderedDishesForCurrentProvince(restaurant) {
  const province = currentProvince();
  return restaurant.dishes
    .map((dish, index) => ({ dish, index }))
    .sort((a, b) => {
      const aMatch = a.dish.province === province.name ? 0 : 1;
      const bMatch = b.dish.province === province.name ? 0 : 1;
      return aMatch - bMatch || a.index - b.index;
    });
}

function restaurantGeoJSON(restaurants) {
  return {
    type: "FeatureCollection",
    features: restaurants.map((restaurant) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [restaurant.map.lng, restaurant.map.lat]
      },
      properties: {
        id: restaurant.id,
        name: restaurant.name,
        area: restaurant.area,
        provinces: restaurant.provinceLinks,
        cuisineCategories: restaurant.cuisineCategoryIds,
        signatureDishes: restaurant.dishes.map((dish) => dish.name)
      }
    }))
  };
}

function initLeafletMap() {
  if (leafletUnavailable || typeof L === "undefined") {
    showFallbackCityMap();
    return false;
  }
  if (manchesterMap) return true;

  els.leafletMap.classList.add("is-active");
  els.fallbackCityMap.classList.add("is-hidden");
  manchesterMap = L.map("leafletMap", {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([53.4808, -2.2426], 13);

  const tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  tileLayer.on("tileerror", () => {
    leafletTileErrors += 1;
    if (leafletTileErrors >= 2) showFallbackCityMap();
  });
  tileLayer.addTo(manchesterMap);

  markerClusteringEnabled = typeof L.markerClusterGroup === "function";
  markerLayer = markerClusteringEnabled
    ? L.markerClusterGroup({
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true,
        spiderfyOnMaxZoom: true,
        spiderfyDistanceMultiplier: 1.45,
        disableClusteringAtZoom: 20,
        maxClusterRadius: (zoom) => (zoom >= 15 ? 20 : 26),
        iconCreateFunction: (cluster) =>
          L.divIcon({
            className: "restaurant-cluster",
            html: `<span>${cluster.getChildCount()}</span>`,
            iconSize: [38, 38],
            iconAnchor: [19, 19]
          })
      })
    : L.layerGroup();
  markerLayer.addTo(manchesterMap);
  manchesterMap.on("zoomend moveend", () => window.setTimeout(labelRestaurantClusters, 0));
  setTimeout(() => {
    manchesterMap.invalidateSize();
  }, 120);
  return true;
}

function showFallbackCityMap() {
  leafletUnavailable = true;
  leafletTileErrors = 0;
  if (manchesterMap) {
    manchesterMap.remove();
    manchesterMap = null;
    markerLayer = null;
    markerClusteringEnabled = false;
  }
  els.leafletMap.classList.remove("is-active");
  els.fallbackCityMap.classList.remove("is-hidden");
}

function refreshManchesterMapSize() {
  if (!manchesterMap) return;
  window.clearTimeout(mapRefreshTimer);
  mapRefreshTimer = window.setTimeout(() => {
    manchesterMap.invalidateSize();
  }, 80);
}

function labelRestaurantClusters() {
  document.querySelectorAll(".restaurant-cluster").forEach((cluster) => {
    const count = cluster.textContent.trim();
    cluster.setAttribute("aria-label", `${count} nearby restaurants. Select to expand.`);
    cluster.setAttribute("title", `${count} nearby restaurants`);
  });
}

function scrollToSelectedRestaurant() {
  window.setTimeout(() => {
    const activeCard = Array.from(document.querySelectorAll(".restaurant-card")).find((card) => card.dataset.restaurant === state.restaurantId);
    if (activeCard) {
      activeCard.scrollIntoView({ behavior: "instant", block: "center" });
      return;
    }
    els.restaurantList.scrollIntoView({ behavior: "instant", block: "start" });
  }, 0);
}

function spreadLeafletMarkers(restaurants) {
  if (!manchesterMap) {
    return restaurants.map((restaurant, index) => ({ restaurant, index, latLng: [restaurant.map.lat, restaurant.map.lng], isOffset: false }));
  }

  const threshold = 42;
  const points = restaurants.map((restaurant, index) => ({
    restaurant,
    index,
    point: manchesterMap.latLngToLayerPoint([restaurant.map.lat, restaurant.map.lng])
  }));
  const groups = [];

  points.forEach((item) => {
    const group = groups.find((candidate) => candidate.some((other) => item.point.distanceTo(other.point) < threshold));
    if (group) group.push(item);
    else groups.push([item]);
  });

  return groups.flatMap((group) => {
    if (group.length === 1) {
      const item = group[0];
      return [{ restaurant: item.restaurant, index: item.index, latLng: [item.restaurant.map.lat, item.restaurant.map.lng], isOffset: false }];
    }

    const radius = Math.min(54, 24 + group.length * 4);
    return group.map((item, groupIndex) => {
      const angle = (Math.PI * 2 * groupIndex) / group.length - Math.PI / 2;
      const offsetPoint = L.point(item.point.x + Math.cos(angle) * radius, item.point.y + Math.sin(angle) * radius);
      const offsetLatLng = manchesterMap.layerPointToLatLng(offsetPoint);
      return {
        restaurant: item.restaurant,
        index: item.index,
        latLng: [offsetLatLng.lat, offsetLatLng.lng],
        isOffset: true
      };
    });
  });
}

function fallbackDisplayPoint(restaurant, index, restaurants) {
  const nearby = restaurants
    .map((candidate, candidateIndex) => ({ candidate, candidateIndex }))
    .filter(({ candidate }) => Math.hypot(candidate.map.x - restaurant.map.x, candidate.map.y - restaurant.map.y) < 34);

  if (nearby.length <= 1) return { x: restaurant.map.x, y: restaurant.map.y, isOffset: false };

  const order = nearby.findIndex(({ candidate }) => candidate.id === restaurant.id);
  const radius = Math.min(46, 22 + nearby.length * 4);
  const angle = (Math.PI * 2 * order) / nearby.length - Math.PI / 2;
  return {
    x: restaurant.map.x + Math.cos(angle) * radius,
    y: restaurant.map.y + Math.sin(angle) * radius,
    isOffset: true
  };
}

function renderProvinceButtons() {
  els.provinceButtons.innerHTML = FOOD_MAP_DATA.provinces
    .map((province) => {
      const isActive = province.id === state.provinceId;
      const radius = isActive ? 28 : 21;
      const markerLines = provinceMarkerLabels[province.id] || [provinceLabel(province)];
      const firstLineY = province.y - ((markerLines.length - 1) * 8) / 2 + 3;
      return `
        <g class="province-node ${isActive ? "is-active" : ""}" data-province="${province.id}" tabindex="0" role="button" aria-label="Select ${provinceLabel(province)}">
          <circle cx="${province.x}" cy="${province.y}" r="${radius}" fill="${province.color}" />
          <text class="province-name" x="${province.x}" text-anchor="middle">
            ${markerLines.map((line, index) => `<tspan x="${province.x}" y="${firstLineY + index * 8}">${line}</tspan>`).join("")}
          </text>
        </g>
      `;
    })
    .join("");

  document.querySelectorAll(".province-node").forEach((node) => {
    const activate = () => {
      state.provinceId = node.dataset.province;
      state.restaurantId = null;
      state.dishIndex = null;
      render();
    };
    node.addEventListener("click", activate);
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });
}

function renderProvinceStory() {
  const province = currentProvince();
  const restaurants = restaurantsForProvince(province);
  const dishPreview = (province.representativeDishes || [])
    .slice(0, 3)
    .map((dish) => `<span>${dishLabel(dish)}</span>`)
    .join("");
  els.provinceCount.textContent = FOOD_MAP_DATA.regionalFramework?.shortLabel || `${FOOD_MAP_DATA.provinces.length} research-led entries`;
  els.frameworkNote.textContent = FOOD_MAP_DATA.regionalFramework?.note || "";
  els.routeLabel.textContent = `${provinceLabel(province)} → Manchester`;
  els.provinceStory.innerHTML = `
    <div class="story-card" style="--province-color: ${province.color}">
      <div class="story-title">
        <span>${provinceLabel(province)}</span>
        <small>${province.mapName || province.name}</small>
      </div>
      <p>${province.summary}</p>
      <div class="trait-list">
        ${province.foodTraits.map((trait) => `<span>${trait}</span>`).join("")}
      </div>
      <div class="trait-list dish-preview">
        ${dishPreview}
      </div>
      <div class="bridge-note">
        <strong>Manchester links</strong>
        <span>${restaurants.length ? restaurants.map((restaurant) => restaurant.name).join(" / ") : "No verified Manchester restaurant point is currently recorded for this region."}</span>
      </div>
    </div>
  `;
}

function renderCityMap() {
  const restaurants = filteredRestaurants();

  if (initLeafletMap()) {
    refreshManchesterMapSize();
    markerLayer.clearLayers();
    const bounds = [];
    const displayPoints = markerClusteringEnabled
      ? restaurants.map((restaurant, index) => ({
          restaurant,
          index,
          latLng: [restaurant.map.lat, restaurant.map.lng],
          isOffset: false
        }))
      : spreadLeafletMarkers(restaurants);

    displayPoints.forEach(({ restaurant, index, latLng, isOffset }) => {
      const isActive = restaurant.id === state.restaurantId;
      const markerSize = isActive ? 44 : 36;
      if (isOffset) {
        L.polyline([[restaurant.map.lat, restaurant.map.lng], latLng], {
          color: restaurant.accent,
          weight: 2,
          opacity: 0.45,
          interactive: false
        }).addTo(markerLayer);
      }
      const marker = L.marker(latLng, {
        icon: L.divIcon({
          className: `poi-marker ${isActive ? "is-active" : ""}`,
          html: `<span>${index + 1}</span>`,
          iconSize: [markerSize, markerSize],
          iconAnchor: [markerSize / 2, markerSize / 2],
          popupAnchor: [0, -markerSize / 2]
        }),
        keyboard: true,
        title: restaurant.name
      });
      marker.bindPopup(`<strong>${restaurant.name}</strong><br>${restaurant.area}<br>Select this map point or use the restaurant list below.`);
      marker.on("click", () => {
        state.restaurantId = restaurant.id;
        state.dishIndex = null;
        render();
        scrollToSelectedRestaurant();
      });
      marker.on("add", () => {
        const element = marker.getElement();
        if (element) element.setAttribute("aria-label", `Select ${restaurant.name}`);
      });
      marker.addTo(markerLayer);
      bounds.push([restaurant.map.lat, restaurant.map.lng]);
    });

    if (bounds.length > 1) {
      manchesterMap.fitBounds(bounds, { padding: [42, 42], maxZoom: 16 });
    } else if (bounds.length === 1) {
      manchesterMap.setView(bounds[0], 15);
    }
    refreshManchesterMapSize();
    window.setTimeout(labelRestaurantClusters, 0);
  }

  els.restaurantMarkers.innerHTML = restaurants
    .map((restaurant, index) => {
      const isActive = restaurant.id === state.restaurantId;
      const point = fallbackDisplayPoint(restaurant, index, restaurants);
      return `
        <g class="restaurant-marker ${isActive ? "is-active" : ""}" data-map-restaurant="${restaurant.id}" tabindex="0" role="button" aria-label="View ${restaurant.name}">
          ${point.isOffset ? `<line class="marker-leader" x1="${restaurant.map.x}" y1="${restaurant.map.y}" x2="${point.x}" y2="${point.y}" stroke="${restaurant.accent}" />` : ""}
          <circle class="marker-pulse" cx="${point.x}" cy="${point.y}" r="${isActive ? 28 : 22}" fill="${restaurant.accent}" />
          <circle class="marker-dot" cx="${point.x}" cy="${point.y}" r="${isActive ? 18 : 14}" />
          <text class="marker-number-text" x="${point.x}" y="${point.y + 4}" text-anchor="middle">${index + 1}</text>
          <text class="marker-name" x="${point.x + 20}" y="${point.y + 6}">${restaurant.name}</text>
        </g>
      `;
    })
    .join("");

  els.mapLegend.innerHTML = restaurants.length
    ? restaurants.map((restaurant, index) => `<button type="button" data-map-restaurant="${restaurant.id}"><span class="legend-poi-number" aria-hidden="true">${index + 1}</span>${restaurant.name}</button>`).join("")
    : `<p>No restaurant matches the current search. Try another keyword.</p>`;

  document.querySelectorAll("[data-map-restaurant]").forEach((node) => {
    const activate = () => {
      state.restaurantId = node.dataset.mapRestaurant;
      state.dishIndex = null;
      render();
      scrollToSelectedRestaurant();
    };
    node.addEventListener("click", activate);
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });
}

function renderDietaryFilters() {
  els.dietaryFilters.innerHTML = FOOD_MAP_DATA.dietaryFilters
    .map((filter) => {
      const isActive = state.dietaryAvoids.includes(filter.id);
      const modeClass = filter.mode === "require" ? "is-preference" : "";
      return `<button class="${modeClass} ${isActive ? "is-active" : ""}" data-dietary="${filter.id}" type="button" title="${filter.note}" aria-pressed="${isActive}">${filter.label}</button>`;
    })
    .join("");

  document.querySelectorAll("[data-dietary]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.dietary;
      state.dietaryAvoids = state.dietaryAvoids.includes(id)
        ? state.dietaryAvoids.filter((item) => item !== id)
        : [...state.dietaryAvoids, id];
      state.restaurantId = null;
      state.dishIndex = null;
      render();
    });
  });
}

function renderRestaurants() {
  const province = currentProvince();
  const restaurants = filteredRestaurants();
  const restaurant = currentRestaurant();
  const dish = currentDish(restaurant);
  els.activePath.innerHTML = `
    <span>${provinceLabel(province)}</span>
    <span>Manchester restaurants</span>
    <span>${restaurant ? restaurant.name : "To be explored"}</span>
    <span>${dish ? dishLabel(dish) : "Representative cuisine"}</span>
  `;

  renderStoryPanel(restaurant, dish);

  els.restaurantList.innerHTML = restaurants.length
    ? restaurants.map(renderRestaurantCard).join("")
    : renderExplorationCards(province);

  document.querySelectorAll(".restaurant-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      state.restaurantId = card.dataset.restaurant;
      state.dishIndex = null;
      render();
    });
  });

  document.querySelectorAll(".dish-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.restaurantId = button.dataset.restaurant;
      state.dishIndex = Number(button.dataset.dishIndex);
      render();
      els.storyPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}

const verificationStatusLabels = {
  verified: "Verified public record",
  partial: "Partially verified",
  lead: "Discovery lead"
};

function restaurantReviewMarkup(restaurant, compact = false) {
  const integration = FOOD_MAP_DATA.reviewIntegration || {};
  const hasRating = integration.enabled && Number.isFinite(restaurant.googleRating);
  const ratingCopy = hasRating
    ? `<strong>${restaurant.googleRating.toFixed(1)} / 5 on Google</strong>${Number.isFinite(restaurant.googleReviewCount) ? `<span>${restaurant.googleReviewCount.toLocaleString()} public reviews</span>` : ""}`
    : `<strong>Current rating and user reviews</strong><span>Open Google Maps for the latest public information.</span>`;

  return `
    <div class="review-summary ${compact ? "is-compact" : ""}">
      <div>${ratingCopy}</div>
      <a href="${restaurant.googleMapsUrl}" target="_blank" rel="noreferrer" aria-label="Open ${restaurant.name} ratings and reviews on Google Maps">Google Maps ↗</a>
    </div>
  `;
}

function renderExplorationCards(province) {
  const dishes = province.representativeDishes || [];
  return `
    <div class="empty-state">
      <strong>Manchester restaurant points to be explored</strong>
      <p>No verified Manchester restaurant coordinate is currently recorded for this region. Any future addition should be supported by public map data, restaurant information or fieldwork.</p>
    </div>
    ${dishes
      .map(
        (dish) => `
          <article class="explore-card">
            ${dishImageMarkup(dish, "explore-dish-image")}
            <h3>${dishLabel(dish)}</h3>
            <p class="dish-english">${dish.name}</p>
            <div class="dialog-tags">${dish.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            <div class="dietary-mini">${dishDietaryChips(dish)}</div>
            ${dish.method ? `<p><strong>Typical method:</strong> ${dish.method}</p>` : ""}
            ${dish.taste ? `<p><strong>Taste profile:</strong> ${dish.taste}</p>` : ""}
            <p>${dish.story}</p>
          </article>
        `
      )
      .join("")}
  `;
}

function renderRestaurantCard(restaurant) {
  const isActive = restaurant.id === state.restaurantId;
  const categories = restaurant.cuisineCategoryIds
    .map((id) => byId(FOOD_MAP_DATA.cuisineCategories, id))
    .filter(Boolean);
  const sourceBadges = restaurant.sourceIds
    .map((id) => byId(FOOD_MAP_DATA.sources, id))
    .filter(Boolean)
    .map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`)
    .join("");
  const orderedDishes = orderedDishesForCurrentProvince(restaurant);
  const statusLabel = verificationStatusLabels[restaurant.verificationStatus] || verificationStatusLabels.lead;

  return `
    <article class="restaurant-card ${isActive ? "is-active" : ""}" data-restaurant="${restaurant.id}" style="--restaurant-color: ${restaurant.accent}">
      <div class="restaurant-topline">
        <div>
          <h3>${restaurant.name}</h3>
          <p>${restaurant.area}</p>
          <div class="record-status">
            <span class="is-${restaurant.verificationStatus}">${statusLabel}</span>
            ${restaurant.lastChecked ? `<small>Checked ${restaurant.lastChecked}</small>` : ""}
          </div>
        </div>
        <span>${restaurantRegionLabels(restaurant).join(" / ")}</span>
      </div>
      <div class="category-row">
        ${categories.map((category) => `<span style="--category-color:${category.color}">${category.label}</span>`).join("")}
      </div>
      <p class="restaurant-desc">${restaurant.description}</p>
      <div class="dish-grid">
        ${orderedDishes
          .map(
            ({ dish, index }) => {
              const hasConflict = dishHasDietaryConflict(dish);
              return `
              <button class="dish-button ${dish.province === currentProvince().name ? "is-relevant" : ""} ${hasConflict ? "has-dietary-conflict" : ""}" type="button" data-restaurant="${restaurant.id}" data-dish-index="${index}" ${hasConflict ? "disabled" : ""}>
                ${dishThumbnailMarkup(dish)}
                <span class="dish-button-copy">
                  <span>${dishLabel(dish)}</span>
                  <small>${dish.tags.join(" · ")}</small>
                  <span class="dietary-mini">${dishDietaryChips(dish)}</span>
                </span>
              </button>
            `;
            }
          )
          .join("")}
      </div>
      <p class="data-note">${restaurant.dataConfidence}</p>
      ${restaurantReviewMarkup(restaurant, true)}
      <div class="source-badges">${sourceBadges}</div>
    </article>
  `;
}

function renderStoryPanel(restaurant, dish) {
  if (!restaurant || !dish) {
    const province = currentProvince();
    const dishes = province.representativeDishes || [];
    els.storyPanel.innerHTML = `
      <article class="selected-story is-exploration" style="--story-color:${province.color}">
        <p class="eyebrow">To Be Explored</p>
        <h3>${provinceLabel(province)} representative cuisine</h3>
        <p>${province.summary}</p>
        <div class="dialog-tags">${province.foodTraits.map((trait) => `<span>${trait}</span>`).join("")}</div>
        <section>
          <h4>Representative dishes</h4>
          <div class="exploration-dish-list">
            ${
              dishes
                .map(
                  (item) => `
                    <section class="exploration-dish">
                      ${dishImageMarkup(item, "explore-dish-image")}
                      <div>
                        <h5>${dishLabel(item)}</h5>
                        <p class="dish-english">${item.name}</p>
                        <div class="dialog-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                        <div class="dietary-mini">${dishDietaryChips(item)}</div>
                        ${item.method ? `<p><strong>Typical method:</strong> ${item.method}</p>` : ""}
                        ${item.taste ? `<p><strong>Taste profile:</strong> ${item.taste}</p>` : ""}
                        <p>${item.story}</p>
                      </div>
                    </section>
                  `
                )
                .join("") || "<p>To be added</p>"
            }
          </div>
        </section>
        <section>
          <h4>Data status</h4>
          <p>No reliable Manchester restaurant point has been recorded for this region. New entries should be checked against OSM/Overpass, restaurant websites, public maps or fieldwork before they are added.</p>
        </section>
      </article>
    `;
    return;
  }

  const geojson = restaurantGeoJSON([restaurant]);
  els.storyPanel.innerHTML = `
    <article class="selected-story" style="--story-color:${restaurant.accent}">
      <p class="eyebrow">Cultural Story Panel</p>
      <h3>${dishLabel(dish)}</h3>
      <p class="dish-english">${dish.name}</p>
      ${dishImageMarkup(dish, "selected-dish-image")}
      <div class="dialog-tags">${dish.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="dietary-note">
        <strong>Dietary / allergy caution</strong>
        <div class="dietary-mini">${dishDietaryChips(dish) || "<span>Ask restaurant</span>"}</div>
        ${dishDietaryNote(dish) ? `<p class="dietary-context">${dishDietaryNote(dish)}</p>` : ""}
        <p>Dietary guidance is indicative only. Users with allergies, religious restrictions or strict diets should confirm ingredients, cooking wine, stock and cross-contact with the restaurant.</p>
      </div>
      <dl class="poi-meta">
        <div><dt>Restaurant</dt><dd>${restaurant.name}</dd></div>
        <div><dt>Area</dt><dd>${restaurant.area}</dd></div>
        <div><dt>Coordinates</dt><dd>${restaurant.map.lat.toFixed(4)}, ${restaurant.map.lng.toFixed(4)}</dd></div>
      </dl>
      ${restaurantReviewMarkup(restaurant)}
      <section>
        <h4>How it is typically made</h4>
        <p>${dish.method}</p>
      </section>
      <section>
        <h4>What it tastes like</h4>
        <p>${dish.taste}</p>
      </section>
      <section>
        <h4>Cultural story</h4>
        <p>${dish.story}</p>
      </section>
      <details class="geojson-preview">
        <summary>View GeoJSON data snippet</summary>
        <pre>${JSON.stringify(geojson, null, 2)}</pre>
      </details>
    </article>
  `;
}

function openDishDialog(restaurant, dish) {
  els.dishDialogBody.innerHTML = `
    <p class="eyebrow">${restaurant.name} · ${dish.province}</p>
    <h2 id="dishTitle">${dishLabel(dish)}</h2>
    <p class="dish-english">${dish.name}</p>
    ${dishImageMarkup(dish, "selected-dish-image")}
    <div class="dialog-tags">${dish.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    <div class="dietary-note">
      <strong>Dietary / allergy caution</strong>
      <div class="dietary-mini">${dishDietaryChips(dish) || "<span>Ask restaurant</span>"}</div>
      ${dishDietaryNote(dish) ? `<p class="dietary-context">${dishDietaryNote(dish)}</p>` : ""}
      <p>Dietary guidance is indicative only. Please confirm ingredients, halal status, cooking wine, stock and cross-contact with the restaurant.</p>
    </div>
    <section>
      <h3>How it is typically made</h3>
      <p>${dish.method}</p>
    </section>
    <section>
      <h3>What it tastes like</h3>
      <p>${dish.taste}</p>
    </section>
    <section>
      <h3>Cultural story</h3>
      <p>${dish.story}</p>
    </section>
  `;
  els.dishDialog.showModal();
}

function renderSources() {
  els.sourceList.innerHTML = FOOD_MAP_DATA.sources
    .map((source) => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a><span>${source.note}</span></li>`)
    .join("");
}

function renderMethodology() {
  els.methodBody.innerHTML = FOOD_MAP_DATA.methodology
    .map(
      (item) => `
        <section class="method-section">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </section>
      `
    )
    .join("");
}

function setDrawerOpen(drawer, button, isOpen) {
  drawer.classList.toggle("is-open", isOpen);
  drawer.setAttribute("aria-hidden", String(!isOpen));
  button.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("drawer-open", isOpen);
}

function render() {
  renderDietaryFilters();
  renderProvinceButtons();
  renderProvinceStory();
  renderCityMap();
  renderRestaurants();
  bindDishImageFallbacks();
}

els.searchInput.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  state.restaurantId = null;
  state.dishIndex = null;
  render();
});

els.resetButton.addEventListener("click", () => {
  state.provinceId = FOOD_MAP_DATA.defaultProvince;
  state.restaurantId = null;
  state.dishIndex = null;
  state.searchTerm = "";
  state.dietaryAvoids = [];
  els.searchInput.value = "";
  render();
});

els.clearDietaryButton.addEventListener("click", () => {
  state.dietaryAvoids = [];
  state.restaurantId = null;
  state.dishIndex = null;
  render();
});

els.dialogClose.addEventListener("click", () => els.dishDialog.close());
els.dishDialog.addEventListener("click", (event) => {
  if (event.target === els.dishDialog) els.dishDialog.close();
});

els.sourceButton.addEventListener("click", () => {
  setDrawerOpen(els.sourceDrawer, els.sourceButton, true);
});

els.sourceClose.addEventListener("click", () => {
  setDrawerOpen(els.sourceDrawer, els.sourceButton, false);
});

els.sourceDrawer.addEventListener("click", (event) => {
  if (event.target === els.sourceDrawer) setDrawerOpen(els.sourceDrawer, els.sourceButton, false);
});

els.methodButton.addEventListener("click", () => {
  setDrawerOpen(els.methodDrawer, els.methodButton, true);
});

els.methodClose.addEventListener("click", () => {
  setDrawerOpen(els.methodDrawer, els.methodButton, false);
});

els.methodDrawer.addEventListener("click", (event) => {
  if (event.target === els.methodDrawer) setDrawerOpen(els.methodDrawer, els.methodButton, false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (els.sourceDrawer.classList.contains("is-open")) setDrawerOpen(els.sourceDrawer, els.sourceButton, false);
  if (els.methodDrawer.classList.contains("is-open")) setDrawerOpen(els.methodDrawer, els.methodButton, false);
});

renderSources();
renderMethodology();
render();
