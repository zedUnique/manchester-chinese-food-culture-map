# Project Notes After Reading Reference Dissertations

## Positioning

This project should be framed as a Web GIS-based cultural mapping application, not a restaurant recommendation website. Chinese restaurants are treated as cultural points of interest that explain regional food culture, dining style, migration memory and local Manchester connections.

## Reference Dissertation Takeaways

- Diya Chutani: useful for food-place POI framing, inclusive design, map-based discovery, testing and evaluation structure.
- Guo Cheng: useful for Manchester cultural POI mapping, restaurant/grocery POI categories, cultural filters, search and pop-up design.
- Zhaolin Fang: useful for map-linked narrative panels, tooltip interaction, right-side information panels and structured functional testing.

## Current Prototype Structure

- Chinese province entry point: users start from a regional food culture perspective.
- The China map uses thirteen research-led regional foodway entries rather than claiming an official thirteen-cuisine division. It keeps all traditions in the canonical Eight Great Cuisines visible, then adds city, ethnic and macro-regional foodways needed for Manchester evidence and communication with non-Chinese users.
- Sichuan and Chongqing are merged because the Chuan category covers both locations in the academic source. Jiangsu-Zhejiang, Northwest and Yunnan-Guizhou are presented with explicit scope notes rather than as exact administrative units.
- Manchester map: related restaurants are displayed as cultural POIs.
- Restaurant regional evidence: labels on restaurant cards use menu, restaurant self-description, public records or fieldwork. They form a separate information layer from the thirteen map entries and may overlap when one restaurant represents several food traditions.
- Dish formats such as hotpot, malatang and noodles are not treated as regional categories; family memory remains a narrative theme.
- Story panel: signature dishes are explained through method, taste and cultural background.
- Data model: restaurant POIs are represented both in `data.js` and `data/restaurants.geojson`.

## Suggested Dissertation Evaluation

- Functional testing: regional entry selection, dietary filtering, map marker selection, search, story panel and source drawer.
- Non-functional testing: mobile layout, loading fallback, readability and accessibility.
- User evaluation: ask non-Chinese users whether the prototype helps them understand that Chinese food is regionally diverse.
