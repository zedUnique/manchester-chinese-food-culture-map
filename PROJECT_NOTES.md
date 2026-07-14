# Project Notes After Reading Reference Dissertations

## Positioning

This project should be framed as a Web GIS-based cultural mapping application, not a restaurant recommendation website. Chinese restaurants are treated as cultural points of interest that explain regional food culture, dining style, migration memory and local Manchester connections.

## Reference Dissertation Takeaways

- Diya Chutani: useful for food-place POI framing, inclusive design, map-based discovery, testing and evaluation structure.
- Guo Cheng: useful for Manchester cultural POI mapping, restaurant/grocery POI categories, cultural filters, search and pop-up design.
- Zhaolin Fang: useful for map-linked narrative panels, tooltip interaction, right-side information panels and structured functional testing.

## Current Prototype Structure

- Chinese province entry point: users start from a regional food culture perspective.
- Sichuan and Chongqing are merged into a single Sichuan-Chongqing entry because their overseas restaurant presentation often overlaps around mala, hotpot, dry-pot and chilli-oil dishes.
- Manchester map: related restaurants are displayed as cultural POIs.
- Cuisine categories: filters connect restaurants to cultural themes such as Sichuan-Chongqing, Beijing, Cantonese, hotpot and family memory.
- Story panel: signature dishes are explained through method, taste and cultural background.
- Data model: restaurant POIs are represented both in `data.js` and `data/restaurants.geojson`.

## Suggested Dissertation Evaluation

- Functional testing: province selection, cuisine filtering, map marker selection, search, story panel and source drawer.
- Non-functional testing: mobile layout, loading fallback, readability and accessibility.
- User evaluation: ask non-Chinese users whether the prototype helps them understand that Chinese food is regionally diverse.
