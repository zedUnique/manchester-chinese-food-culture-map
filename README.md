# Manchester Chinese Food Culture Map

An academic Web GIS project by Bowen Zhang that connects Chinese regional foodways with Chinese restaurants in Manchester. The map is designed for people who may know individual Chinese dishes but are less familiar with the regional histories, ingredients and dining practices behind them.

**Live project:** [zedunique.github.io/manchester-chinese-food-culture-map](https://zedunique.github.io/manchester-chinese-food-culture-map/)

This is a student academic project, not an official University of Manchester website.

## Project Aim

The project treats restaurants as cultural points of interest rather than ranking them as recommendations. A user begins with a regional foodway on the China map, sees related restaurants in Manchester, and then opens individual dishes to read about preparation, flavour and cultural context.

The intended research question is:

> How can Manchester's Chinese restaurants help non-Chinese users understand the regional, historical and social diversity of Chinese food?

## How the Map Works

1. Select one of the regional foodway entries on the China map.
2. View Manchester restaurants connected with that entry.
3. Select a restaurant and open one of its dishes.
4. Read the dish method, flavour profile, cultural background and dietary cautions.
5. Use the dietary filters to identify recorded risks or vegetarian options.

The Manchester map supports marker clustering, zooming and the separation of nearby restaurant points. Restaurant cards link to Google Maps for current public ratings and reviews.

## Regional Framework

The interface contains 13 research-led entries. They are not presented as an official set of 13 Chinese cuisines. The framework keeps the traditions commonly described as the Eight Great Cuisines visible, then adds selected city, ethnic and wider regional foodways that are relevant to the Manchester dataset and to communication with non-Chinese users.

Sichuan and Chongqing are combined under the Chuan tradition. Jiangsu and Zhejiang are presented as a clearly labelled Su-Zhe entry. Northwest and Yunnan-Guizhou include scope notes because the current content is mainly Shaanxi-led and Yunnan-led.

The full rationale and academic sources are documented in [REGIONAL_FRAMEWORK.md](REGIONAL_FRAMEWORK.md).

## Current Scope

- 13 regional foodway entries
- 27 Manchester restaurant records
- 87 dish records
- 56 research and data sources
- restaurant verification labels and checked dates
- dietary filters for vegetarian options and recorded pork, beef, seafood, gluten, peanut or sesame, alcohol, soy, egg, dairy and poultry risks
- source captions and fallbacks for dish photographs
- direct links to current Google Maps ratings and reviews

Automatic Google Places rating requests are disabled. The public site does not require an API key and does not generate paid Google Places requests.

## Run Locally

From the project folder, run:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

The terminal remains attached to the local server while it is running. Press `Control + C` in that terminal to stop it. If port 4173 is already in use, either open the existing local address or start the server on another port.

## Validate the Data

With Node.js installed, run:

```bash
npm test
npm run export:geojson
```

`npm test` checks regional references, restaurants, sources, dietary profiles and image mappings. `npm run export:geojson` regenerates `data/restaurants.geojson` from the main dataset.

## Project Files

- `index.html` - page structure and public project copy
- `styles.css` - visual design and responsive layout
- `data.js` - regional entries, restaurants, dishes and sources
- `app.js` - map interaction, search, filters and story panels
- `assets/dishes/` - locally stored dish reference images
- `data/restaurants.geojson` - exported restaurant point data
- `tools/validate-data.mjs` - data checks and GeoJSON export
- `PROJECT_NOTES.md` - design notes drawn from the reference dissertations
- `REGIONAL_FRAMEWORK.md` - academic basis, selection criteria and limitations

## Data and Image Notes

Restaurant menus, addresses and opening status can change. Records marked as discovery leads or partially verified should be checked through fieldwork, current menus or official restaurant information before the final dissertation submission.

Dietary labels record known or likely ingredients; they are not an allergy or halal guarantee. Users should confirm stock, sauces, cooking wine and cross-contact directly with the restaurant.

Third-party photographs are credited to their source or rights holder and are used as academic visual references. Original fieldwork photography remains the preferred option for the final submitted project.

## Next Priorities

- verify the remaining discovery leads and incomplete restaurant addresses
- replace generic or repeated dish photographs with fieldwork or restaurant-specific images
- test the map with non-Chinese participants and record whether the regional structure is understandable
- review keyboard navigation, mobile readability and dietary-filter wording through user testing
- consider live Google rating data only if API key restrictions, quotas and cost controls are in place

## Academic Status

Created by Bowen Zhang as a student dissertation project. It is independent academic work and is not an official University of Manchester service or publication.
