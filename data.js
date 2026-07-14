const FOOD_MAP_DATA = {
  defaultProvince: "chuanyu",
  regionalFramework: {
    title: "12 research-led regional foodway entries",
    shortLabel: "12 research-led entries",
    note: "A research-led analytical sample for cultural exploration, not an official or exhaustive division of Chinese cuisine.",
    basis: "The entries adapt regional-cuisine groupings used by Zhu et al. (2013) and later culinary-regionalism research. Adjacent traditions are merged where the literature supports strong continuity, while Hong Kong, Xinjiang, Northeast and other foodways remain visible because the project explains migration, place and culture through Manchester restaurants."
  },
  dietaryFilters: [
    { id: "vegetarian", label: "Vegetarian options", mode: "require", note: "Shows restaurants with at least one dish explicitly recorded as vegetarian. Confirm stocks, sauces and shared cooking equipment directly." },
    { id: "pork", label: "Avoid pork", note: "Useful for Muslim diners and users who do not eat pork." },
    { id: "beef", label: "Avoid beef", note: "Useful for Hindu diners or users who avoid beef." },
    { id: "seafood", label: "Avoid seafood", note: "Includes fish, shellfish and seafood sauces where obvious." },
    { id: "gluten", label: "Avoid wheat/gluten", note: "Noodles, dumpling skins and soy sauce often contain wheat." },
    { id: "nuts", label: "Avoid peanuts/sesame", note: "Covers peanut, sesame and nut-style sauce risks." },
    { id: "alcohol", label: "Avoid alcohol", note: "Some dishes may use Shaoxing wine or other cooking wine." },
    { id: "soy", label: "Avoid soy", note: "Soy sauce, tofu, bean pastes and shared sauces can contain soy." },
    { id: "egg", label: "Avoid egg", note: "Egg can appear in noodles, fried rice, batters and dumpling fillings." },
    { id: "dairy", label: "Avoid dairy", note: "Dairy is uncommon in many regional dishes but can appear in modern sauces, desserts or creamy broths." },
    { id: "poultry", label: "Avoid poultry", note: "Covers chicken, duck and poultry-based dishes where recorded." }
  ],
  cuisineCategories: [
    { id: "chuanyu", label: "Chuan / Sichuan-Chongqing", provinceIds: ["chuanyu"], color: "#c93f31" },
    { id: "beijing", label: "Jing / Beijing", provinceIds: ["beijing"], color: "#97610e" },
    { id: "cantonese", label: "Yue / Cantonese", provinceIds: ["guangdong"], color: "#1f796a" },
    { id: "hongkong", label: "HK / Hong Kong foodways", provinceIds: ["hongkong"], color: "#366fae" },
    { id: "shandong", label: "Lu / Shandong", provinceIds: ["shandong"], color: "#3f7194" },
    { id: "huaiyang", label: "Su-Zhe / Jiangsu-Zhejiang", provinceIds: ["jiangnan"], color: "#7c5fa1" },
    { id: "hunan", label: "Xiang / Hunan", provinceIds: ["hunan"], color: "#a83e3a" },
    { id: "fujian", label: "Min / Fujian", provinceIds: ["fujian"], color: "#2f7e71" },
    { id: "xinjiang", label: "Xinjiang foodways", provinceIds: ["xinjiang"], color: "#a65f18" },
    { id: "shaanxi", label: "Xibei / Northwest", provinceIds: ["shaanxi"], color: "#8a6540" },
    { id: "dongbei", label: "Dongbei / Northeast", provinceIds: ["dongbei"], color: "#506a82" },
    { id: "yunnan", label: "Yungui / Yunnan-Guizhou", provinceIds: ["yunnan"], color: "#6d8d62" }
  ],
  provinces: [
    {
      id: "xinjiang",
      name: "新疆",
      englishName: "Xinjiang",
      x: 149,
      y: 160,
      color: "#a65f18",
      summary: "Xinjiang food reflects grassland, oasis and Silk Road exchange. Because a clearly verified Xinjiang restaurant point is still limited in central Manchester, this region is presented as a research gap rather than hidden from the map. For non-Chinese users, the clearest entry points are halal-aware lamb dishes, wheat breads and noodles, cumin, charcoal grilling, tomato-chilli braising and pilaf-style rice.",
      foodTraits: ["Halal-aware lamb and wheat foods", "Cumin, smoke, tomato and chilli", "Silk Road and Central Asian exchange"],
      restaurantIds: [],
      representativeDishes: [
        {
          name: "大盘鸡",
          englishName: "Big Plate Chicken",
          tags: ["chicken", "potato", "wide noodles", "shared platter"],
          dietary: ["poultry", "gluten", "soy", "halal"],
          method: "Chicken, potatoes and peppers are braised with chilli, cumin and aromatics, then served with wide belt noodles that absorb the sauce.",
          taste: "Hearty, savoury and mildly to moderately spicy, with cumin fragrance, soft potatoes and a rich sauce for sharing.",
          story: "Chinese accounts commonly connect Big Plate Chicken with Shawan roadside restaurants in Xinjiang in the reform-era transport boom. It is useful for explaining how highway travel, group dining and regional migration can turn a practical shared platter into a food symbol."
        },
        {
          name: "手抓饭",
          englishName: "Uyghur Polo / Hand Pilaf",
          tags: ["rice", "lamb", "carrot", "cumin", "oasis food"],
          dietary: ["halal"],
          method: "Rice is steamed or braised with lamb or mutton, carrots, onions, oil and cumin; some versions add raisins or dried apricots.",
          taste: "Fragrant and filling, with separate oily rice grains, sweet carrots and a warm cumin-lamb aroma.",
          story: "Polo links Xinjiang to Central Asian foodways. In the demo it helps users see Xinjiang cuisine not only as spicy food, but as rice, lamb, hospitality and Muslim food culture."
        },
        {
          name: "羊肉串",
          englishName: "Cumin Lamb Skewers",
          tags: ["lamb", "cumin", "charcoal grill", "street food"],
          dietary: ["halal"],
          method: "Small pieces of lamb are skewered and grilled over high heat, usually seasoned with salt, cumin and chilli powder.",
          taste: "Smoky, savoury, fatty and cumin-forward, with direct heat rather than the numbing mala profile of Sichuan food.",
          story: "Lamb skewers make Xinjiang's public food culture easy to understand for international users: the smell of cumin and smoke, late-night eating, and visible street-side cooking all become part of the cultural experience."
        }
      ]
    },
    {
      id: "chuanyu",
      name: "川渝",
      englishName: "Sichuan-Chongqing",
      x: 334,
      y: 262,
      color: "#c93f31",
      summary: "Sichuan and Chongqing are closely connected in food culture: Chongqing was historically part of Sichuan, and both are strongly associated with mala, the numbing-spicy sensation created by Sichuan peppercorns and chillies. For non-Chinese users, this region is best introduced not simply as \"very spicy\", but as a cuisine of layered aromas, fermented chilli bean paste, red oil, hot pot, street snacks and highly social dining.",
      foodTraits: ["Mala: numbing + spicy", "Red oil, doubanjiang and peppercorn", "Hot pot as communal dining"],
      restaurantIds: ["red-chilli", "one-plus", "noodle-alley", "spicy-city", "chuan-guoxiang", "no8-hotpot", "lameizi", "chuan-yun-xuan", "hao-zai-lai", "xiongqi"],
      representativeDishes: [
        {
          name: "麻婆豆腐",
          englishName: "Mapo Tofu",
          tags: ["numbing", "spicy", "doubanjiang"],
          story: "Mapo tofu is a clear example of Sichuan-Chongqing flavour logic: heat from chilli, tingling from Sichuan peppercorn, savoury depth from fermented broad bean chilli paste, and softness from tofu."
        },
        {
          name: "重庆火锅",
          englishName: "Chongqing Hot Pot",
          tags: ["communal", "beef tallow", "chilli"],
          story: "Chongqing hot pot places cooking at the centre of the table. Diners choose ingredients, cook them together, and adjust dipping sauces, making it both a meal and a social ritual."
        }
      ]
    },
    {
      id: "shaanxi",
      name: "陕西",
      mapName: "西北",
      markerEnglishName: "Xibei",
      englishName: "Northwest (Shaanxi focus)",
      x: 374,
      y: 225,
      color: "#8a6540",
      summary: "This Northwest entry uses Shaanxi and Xi'an as its current Manchester-facing focus while locating them within the wider Xibei food region used in regional-cuisine research. Wheat breads and noodles, lamb, vinegar, chilli oil and street snacks connect food culture to dryland agriculture, Muslim communities and Silk Road urban history. Gansu, Qinghai and Ningxia require further restaurant and fieldwork evidence in later versions.",
      foodTraits: ["Wheat noodles and breads", "Lamb paomo and street snacks", "Vinegar, chilli oil and hot oil aroma"],
      restaurantIds: ["mr-hong-beef-noodle"],
      representativeDishes: [
        {
          name: "肉夹馍",
          englishName: "Roujiamo",
          tags: ["flatbread", "braised meat", "street snack"],
          story: "Roujiamo shows how northern wheat foods can become portable urban meals: bread, slow-cooked meat and street vending in one compact form."
        },
        {
          name: "油泼面",
          englishName: "Biangbiang / Oil-splashed Noodles",
          tags: ["wide noodles", "chilli flakes", "hot oil"],
          story: "Oil-splashed noodles are sensory and theatrical: hot oil is poured over chilli, garlic and spring onion, releasing aroma before the noodles are mixed."
        }
      ]
    },
    {
      id: "hunan",
      name: "湖南",
      englishName: "Hunan",
      x: 412,
      y: 282,
      color: "#a83e3a",
      summary: "Hunan food is often mistaken for simply being spicy, but its profile is more about fresh chilli heat, sour-spicy flavours, chopped chilli, smoked meats and wok-fired home cooking. It is useful as a contrast to Sichuan-Chongqing mala.",
      foodTraits: ["Fresh chilli and sour-spicy flavours", "Chopped chilli and cured meats", "Smoky, wok-fired home cooking"],
      restaurantIds: ["hunan-restaurant", "blue-eyed-panda"],
      representativeDishes: [
        {
          name: "剁椒鱼头",
          englishName: "Steamed Fish Head with Chopped Chilli",
          tags: ["chopped chilli", "steamed", "fresh heat"],
          story: "This dish shows Hunan-style chilli as bright and fresh rather than numbing. The steamed fish carries the aroma of chopped chilli without relying on Sichuan peppercorn."
        },
        {
          name: "小炒黄牛肉",
          englishName: "Stir-fried Beef with Chilli",
          tags: ["quick stir-fry", "chilli", "wok aroma"],
          story: "Small stir-fries are central to Hunan home-style cooking: fast heat, sliced meat, fresh chilli and a strong wok aroma."
        }
      ]
    },
    {
      id: "guangdong",
      name: "广东",
      englishName: "Guangdong",
      x: 415,
      y: 330,
      color: "#1f796a",
      summary: "Guangdong food is a major source of overseas Chinese restaurant culture. It values freshness, precise heat control, roast meats, soups and dim sum, making it especially relevant to Manchester's Chinatown history.",
      foodTraits: ["Roast meats and precise heat control", "Freshness and balanced seasoning", "Yum cha and dim sum culture"],
      restaurantIds: ["happy-seasons", "sweet-mandarin", "yang-sing", "mei-dim", "little-yang-sing", "wings", "blue-eyed-panda", "tattu", "peace-garden", "onlyyu", "lao-di-fang", "taiwu", "chao-niu-yan"],
      representativeDishes: [
        {
          name: "早茶点心",
          englishName: "Dim Sum / Yum Cha",
          tags: ["teahouse", "sharing", "small plates"],
          story: "Dim sum is not just a set of dishes but a rhythm of eating: tea, conversation and many small plates shared across the table."
        },
        {
          name: "烧味饭",
          englishName: "Cantonese Roast Rice",
          tags: ["roast duck", "char siu", "urban meal"],
          story: "Cantonese roast rice turns specialist roasting techniques into a fast, everyday Chinatown meal: meat, sauce and rice built for city rhythms."
        }
      ]
    },
    {
      id: "hongkong",
      name: "香港",
      englishName: "Hong Kong",
      x: 444,
      y: 356,
      color: "#366fae",
      summary: "Hong Kong food mixes Cantonese roots, cha chaan teng culture, migration and British colonial urban life. It is a strong lens for discussing family memory and cross-cultural Chinese food in Manchester.",
      foodTraits: ["Roast rice and cha chaan teng", "Everyday Chinese-Western fusion", "Migration and family memory"],
      restaurantIds: ["sweet-mandarin", "happy-seasons", "yang-sing", "mei-dim", "little-yang-sing", "wings", "blue-eyed-panda", "tattu", "peace-garden", "onlyyu", "lao-di-fang", "taiwu"],
      representativeDishes: [
        {
          name: "茶餐厅咖喱饭",
          englishName: "Hong Kong-style Curry Rice",
          tags: ["fusion", "home-style", "migration memory"],
          story: "Hong Kong-style curry brings together South Asian spice routes, British colonial food habits and Cantonese home cooking. It works well for telling family migration stories."
        },
        {
          name: "菠萝包",
          englishName: "Pineapple Bun",
          tags: ["bakery", "cha chaan teng", "sweet-savory"],
          story: "The pineapple bun represents Hong Kong bakery culture and the everyday texture of cha chaan teng dining."
        }
      ]
    },
    {
      id: "beijing",
      name: "北京",
      englishName: "Beijing",
      x: 445,
      y: 171,
      color: "#97610e",
      summary: "Beijing food should not be treated as Sichuan food. It is better explained through roast duck, noodles, dumplings, sesame paste, sweet bean sauce and the contrast between courtly dining and everyday alleyway food.",
      foodTraits: ["Peking duck and pancakes", "Noodles, dumplings and wheat foods", "Sweet bean sauce, sesame paste and scallion"],
      restaurantIds: ["red-chilli"],
      representativeDishes: [
        {
          name: "北京烤鸭",
          englishName: "Peking Duck",
          tags: ["roast duck", "pancake", "sweet bean sauce"],
          story: "Peking duck connects courtly dining, historic restaurant brands and international tourism. It is one of the most recognisable symbols of Beijing cuisine."
        },
        {
          name: "炸酱面",
          englishName: "Zhajiangmian",
          tags: ["soybean paste", "noodles", "alleyway food"],
          story: "Zhajiangmian gives Beijing cuisine an everyday face. It contrasts with the ceremonial feel of roast duck through noodles, sauce and household memory."
        }
      ]
    },
    {
      id: "shandong",
      name: "山东",
      englishName: "Shandong",
      x: 464,
      y: 204,
      color: "#3f7194",
      summary: "Shandong cuisine is one of the historically influential northern traditions. It is associated with seafood, soups, quick high-heat cooking and a clean savoury profile, and it strongly influenced northern and imperial cooking.",
      foodTraits: ["Clean savoury flavours and soups", "Seafood and quick stir-frying", "Influence on northern and imperial cuisine"],
      restaurantIds: [],
      representativeDishes: [
        {
          name: "糖醋鲤鱼",
          englishName: "Sweet and Sour Carp",
          tags: ["Yellow River", "sweet-sour", "banquet"],
          story: "Sweet and Sour Carp uses shape, sauce and presentation to communicate banquet tradition and the cultural geography of the Yellow River."
        },
        {
          name: "葱烧海参",
          englishName: "Braised Sea Cucumber with Scallion",
          tags: ["sea cucumber", "scallion", "heat control"],
          story: "This dish shows Shandong cuisine's interest in marine ingredients, broth-like sauces and precise heat control."
        }
      ]
    },
    {
      id: "jiangnan",
      name: "江南",
      mapName: "苏浙",
      markerEnglishName: "Su-Zhe",
      englishName: "Jiangsu-Zhejiang foodways",
      x: 474,
      y: 252,
      color: "#7c5fa1",
      summary: "This entry combines Jiangsu and Zhejiang foodways because culinary research notes substantial continuity between them, while retaining Huaiyang and Jiangnan as useful cultural explanations. Refined knife work, clear and delicate flavours, river and lake ingredients, mild sweetness and literati urban culture present an eastern Chinese tradition of subtlety rather than intensity.",
      foodTraits: ["Clear, delicate and mildly sweet", "River fish and refined knife work", "Huaiyang and Jiangnan urban culture"],
      restaurantIds: [],
      representativeDishes: [
        {
          name: "狮子头",
          englishName: "Lion's Head Meatballs",
          tags: ["clear braise", "Huaiyang", "banquet"],
          story: "Lion's Head meatballs express Huaiyang delicacy through soft texture, gentle seasoning and a clear broth-like sauce."
        },
        {
          name: "扬州炒饭",
          englishName: "Yangzhou Fried Rice",
          tags: ["rice", "wok control", "many ingredients"],
          story: "Yangzhou fried rice is internationally familiar and can introduce Huaiyang-Jiangnan ideas of ingredient separation, colour and controlled heat."
        }
      ]
    },
    {
      id: "fujian",
      name: "福建",
      englishName: "Fujian",
      x: 462,
      y: 302,
      color: "#2f7e71",
      summary: "Fujian food is shaped by mountains, coastline and maritime exchange. Soups, seafood, mushrooms, red rice wine lees and careful knife work are useful ways to explain its flavour world.",
      foodTraits: ["Mountain and coastal ingredients", "Soups and umami", "Red rice wine lees, mushrooms and seafood"],
      restaurantIds: [],
      representativeDishes: [
        {
          name: "佛跳墙",
          englishName: "Buddha Jumps Over the Wall",
          tags: ["soup", "seafood", "banquet"],
          story: "Buddha Jumps Over the Wall uses long simmering and many luxury ingredients to show Fujian cuisine's emphasis on soup and deep savoury flavour."
        },
        {
          name: "沙茶面",
          englishName: "Satay Noodles",
          tags: ["soup noodles", "satay", "maritime trade"],
          story: "Satay noodles show how Fujian coastal food connects with Southeast Asian spice exchange and maritime migration."
        }
      ]
    },
    {
      id: "yunnan",
      name: "云南",
      mapName: "云贵",
      markerEnglishName: "Yungui",
      englishName: "Yunnan-Guizhou (Yunnan focus)",
      x: 308,
      y: 312,
      color: "#4e7c48",
      summary: "This Yunnan-Guizhou entry follows the Yungui grouping used in regional-cuisine research, while the current prototype is Yunnan-led because its representative dishes are more fully documented. Mountain landscapes, rice noodles, mushrooms, herbs, fermentation and many ethnic food traditions show how ecology and borderland exchange shape food. A dedicated Manchester restaurant point has not yet been verified, so Guizhou dishes and local restaurant evidence remain a documented fieldwork gap.",
      foodTraits: ["Rice noodles and hot broth rituals", "Mushrooms, herbs and mountain ingredients", "Borderland and multi-ethnic foodways"],
      restaurantIds: [],
      representativeDishes: [
        {
          name: "过桥米线",
          englishName: "Crossing-the-bridge Rice Noodles",
          tags: ["rice noodles", "hot broth", "ritual", "Mengzi"],
          dietary: ["pork", "poultry"],
          method: "A very hot chicken or pork-bone broth is served separately from rice noodles and thin toppings. Diners add the ingredients step by step so the broth cooks and warms them at the table.",
          taste: "Clean, aromatic and broth-led, with rice-noodle softness and a lighter profile than chilli-heavy cuisines.",
          story: "Chinese sources usually associate the dish with Mengzi in southern Yunnan and explain its identity through the famous separated-broth serving ritual. The oil layer that keeps the broth hot also turns the meal into a visible cultural performance."
        },
        {
          name: "汽锅鸡",
          englishName: "Steam Pot Chicken",
          tags: ["steam pot", "clear broth", "chicken", "Jianshui pottery"],
          dietary: ["poultry"],
          method: "Chicken is steamed in a special Jianshui-style clay steam pot. Vapour rises through the central funnel and condenses inside, creating a small amount of concentrated chicken broth.",
          taste: "Pure, savoury and gentle, with a clear chicken aroma rather than heavy sauce or strong chilli.",
          story: "Steam Pot Chicken is valuable for explaining food through tools and technique: the regional vessel, steam condensation and clean broth all show a different side of Chinese cooking."
        },
        {
          name: "野生菌火锅",
          englishName: "Wild Mushroom Hot Pot",
          tags: ["mushroom", "seasonal", "hot pot", "mountain ingredients"],
          dietary: ["vegetarian"],
          method: "Seasonal mushrooms are cooked in a hot broth and eaten after thorough heating. In real service, safe identification and cooking time are essential.",
          taste: "Earthy, aromatic and umami-rich, often lighter than beef-tallow or chilli-oil hot pot.",
          story: "Yunnan's mushroom culture helps non-Chinese users understand the region through ecology: mountains, rainfall, foraging knowledge and seasonal eating shape the food as much as spice or technique."
        }
      ]
    },
    {
      id: "dongbei",
      name: "东北",
      englishName: "Northeast",
      x: 541,
      y: 116,
      color: "#506a82",
      summary: "Northeastern Chinese food is shaped by cold winters, stews, pickled cabbage, large shared portions and historical Manchu, Russian and frontier influences.",
      foodTraits: ["Stews and pickled cabbage", "Large shared portions", "Manchu, Russian and frontier influences"],
      restaurantIds: ["yang-guo-fu", "meishi-meike"],
      representativeDishes: [
        {
          name: "锅包肉",
          englishName: "Guobaorou",
          tags: ["sweet-sour", "fried", "Harbin"],
          story: "Guobaorou combines sweet-sour sauce with a crisp fried texture. It helps explain northeastern urban food and modern cross-cultural exchange."
        },
        {
          name: "猪肉炖粉条",
          englishName: "Pork Stew with Glass Noodles",
          tags: ["stew", "pickled cabbage", "cold climate"],
          story: "Pork stew with glass noodles is a useful entry point for cold-climate cooking, family tables and the comfort of shared one-pot meals."
        }
      ]
    },
  ],
  restaurants: [
    {
      id: "red-chilli",
      name: "Red Chilli 红辣椒",
      area: "Oxford Road / Portland Street",
      provinceLinks: ["川渝", "北京"],
      map: { x: 175, y: 302, lat: 53.4774, lng: -2.2373 },
      accent: "#d94b35",
      cuisineCategoryIds: ["chuanyu", "beijing"],
      dataConfidence: "Red Chilli official website says it specialises in Beijing and Sichuan dishes; final dish availability should still be checked against the current menu or fieldwork.",
      description: "A useful case for comparing Beijing and Sichuan-Chongqing food in one Manchester restaurant. Its public description references Beijing and Sichuan dishes, so this prototype separates roast duck and zhajiangmian from mala, boiled dishes and dry-fried chilli dishes.",
      sourceIds: ["red-chilli", "beijing-cuisine", "peking-duck", "zhajiangmian"],
      dishes: [
        {
          name: "北京烤鸭",
          englishName: "Peking Duck",
          province: "北京",
          tags: ["roast duck", "pancake", "sweet bean sauce"],
          method: "Traditional Peking duck focuses on drying and colouring the skin before roasting the bird until the skin becomes crisp. It is usually eaten with thin pancakes, scallion, cucumber and sweet bean sauce.",
          taste: "Crisp skin, rich duck fat and savoury-sweet sauce are balanced by fresh scallion and cucumber.",
          story: "Peking duck moved from courtly and historic restaurant culture into global tourism memory. It is one of the clearest ways to explain Beijing cuisine's ceremonial side."
        },
        {
          name: "老北京炸酱面",
          englishName: "Beijing Zhajiangmian",
          province: "北京",
          tags: ["wheat noodles", "soybean paste", "vegetable toppings"],
          method: "Diced meat is fried with yellow soybean paste or sweet bean sauce to make a thick sauce, then mixed with noodles and fresh toppings such as cucumber, bean sprouts and radish.",
          taste: "Salty, savoury and wheat-forward rather than spicy. The paste, noodles and crisp vegetables create the balance.",
          story: "Zhajiangmian represents everyday Beijing food. Unlike roast duck, it is closer to household and alleyway memory."
        },
        {
          name: "川渝麻婆豆腐",
          englishName: "Sichuan-Chongqing Mapo Beancurd",
          province: "川渝",
          tags: ["numbing", "spicy", "doubanjiang"],
          method: "Fry doubanjiang, chilli and Sichuan peppercorn in oil to release red colour and aroma, then simmer tofu gently in the sauce and finish with ground Sichuan pepper.",
          taste: "First comes salty fermented depth from doubanjiang, followed by chilli heat and a tingling peppercorn finish. The soft tofu makes the intensity feel rounded rather than simply hot.",
          story: "Mapo tofu is often narrated as an urban Sichuan dish rather than court cuisine. It shows how everyday food can become a regional symbol through memory, repetition and migration."
        },
        {
          name: "川渝担担面",
          englishName: "Sichuan-Chongqing Dandan Noodles",
          province: "川渝",
          tags: ["red oil", "sesame", "street snack"],
          method: "Cook noodles until springy, season the bowl with red oil, soy sauce, vinegar and sesame or peanut aroma, then add minced pork topping and spring onion.",
          taste: "A compact mix of savoury, spicy, nutty and lightly sour notes. The noodles carry the red oil, so the flavour builds with each bite.",
          story: "Dandan noodles are linked to the memory of street vendors carrying their wares on shoulder poles. They are useful in the map for explaining mobility, labour and everyday urban food."
        },
        {
          name: "歌乐山辣子鸡",
          englishName: "Geleshan Dry Fried Chicken",
          province: "川渝",
          tags: ["dry-fried", "chilli", "shared dish"],
          method: "Marinate and fry small chicken pieces, then toss them quickly with dried chillies, Sichuan peppercorns, garlic and spring onion until the aromatics coat the surface.",
          taste: "Crisp, dry-fragrant and direct in its chilli impact. The pleasure is partly visual and social: diners search through a mound of chillies for the chicken pieces.",
          story: "This dish helps explain the energetic \"jianghu\" side of Chongqing food culture, where chilli is not only flavour but also atmosphere, noise and shared excitement."
        }
      ]
    },
    {
      id: "one-plus",
      name: "One+ Restaurant",
      area: "42 Charles Street",
      provinceLinks: ["川渝", "云南"],
      map: { x: 306, y: 265, lat: 53.4734, lng: -2.2389 },
      accent: "#b73352",
      cuisineCategoryIds: ["chuanyu", "yunnan"],
      dataConfidence: "Location and concept are based on public restaurant information; detailed dish wording can be replaced after fieldwork.",
      description: "A useful case for interactive dining: noodles, rice bowls, individual hot pot and seafood barbecue represent different ways of eating and socialising in one venue.",
      sourceIds: ["one-plus"],
      dishes: [
        {
          name: "个人小火锅",
          englishName: "Individual Chinese Hot Pot",
          province: "川渝",
          tags: ["hot pot", "customisable", "interactive"],
          method: "Choose a broth, cook thinly sliced meat, tofu products, vegetables and noodles in the simmering soup, then season each bite with a personal dipping sauce.",
          taste: "The broth sets the direction: mala broth is rich, warming and intense, while clear broth foregrounds the natural taste of ingredients.",
          story: "Hot pot turns the diner into a participant rather than a spectator. That makes it a strong metaphor for this interactive map: users assemble their own route through food culture."
        },
        {
          name: "手工面与米饭碗",
          englishName: "Handmade Noodle and Rice Bowls",
          province: "云南",
          tags: ["staple food", "everyday meal", "hot broth"],
          method: "Fresh noodles or rice form the base, with toppings, broth, greens and aromatics added to make a complete single-person meal.",
          taste: "More everyday than hot pot, with flavours ranging from clean and light to spicy and aromatic.",
          story: "Noodles and rice bowls connect migration memories across Chinese regions. Away from home, the comfort of a staple meal is often what people remember first."
        },
        {
          name: "海鲜烧烤拼盘",
          englishName: "Seafood and BBQ Selection",
          province: "广东",
          tags: ["barbecue", "seafood", "sharing"],
          method: "Seafood, meat and vegetables are grilled at the table or served with garlic, chilli, seafood or curry-style sauces.",
          taste: "Smokier and more social than a plated dish, with sauces adding sweetness, spice, garlic or curry aroma.",
          story: "Table barbecue moves Chinese dining from kitchen technique to social performance, showing how younger Manchester diners encounter Chinese food through group meals."
        }
      ]
    },
    {
      id: "happy-seasons",
      name: "Happy Seasons",
      area: "Chinatown",
      provinceLinks: ["广东", "香港"],
      map: { x: 295, y: 210, lat: 53.478, lng: -2.2407 },
      accent: "#1f9a87",
      cuisineCategoryIds: ["cantonese", "hongkong"],
      dataConfidence: "Public reports and menu observations should be verified with a site visit or restaurant website before final report use.",
      description: "A Chinatown roast-meat case study. Public reporting connects its three-roast combination with the Haaland Special, making it a useful bridge between Manchester pop culture and Cantonese roast-meat meals.",
      sourceIds: ["happy-seasons"],
      dishes: [
        {
          name: "三拼烧味饭",
          englishName: "Triple Roast Meat Rice",
          province: "广东",
          tags: ["roast duck", "crispy pork", "rice"],
          method: "Roast duck, char siu or crispy pork are chopped and served over rice with roast-meat sauce, greens or ginger-scallion relish.",
          taste: "Roasted skin, savoury-sweet juices and rice that absorbs the sauce make it direct and satisfying.",
          story: "Roast rice is everyday food in many Chinatowns: quick, filling and shaped by Cantonese and Hong Kong restaurant adaptation to urban life."
        },
        {
          name: "Haaland Special",
          englishName: "Roast Duck and Crispy Belly Pork Set",
          province: "香港",
          tags: ["local media", "football culture", "roast meats"],
          method: "A large roast-meat combination built around roast duck and two pork items, usually eaten with rice or noodles.",
          taste: "Rich duck, crisp pork and caramelised roast aromas create a savoury and indulgent plate.",
          story: "Its cultural interest is not only flavour but Manchester football culture: local celebrity, Chinatown dining and social media all participate in the naming of a dish."
        }
      ]
    },
    {
      id: "sweet-mandarin",
      name: "Sweet Mandarin",
      area: "Northern Quarter",
      provinceLinks: ["香港", "广东"],
      map: { x: 414, y: 142, lat: 53.4831, lng: -2.2361 },
      accent: "#2f6fba",
      cuisineCategoryIds: ["cantonese", "hongkong"],
      dataConfidence: "Cultural narrative is suitable for dissertation framing, but menu details should be checked against current restaurant materials.",
      description: "A strong dissertation case because it links food, women's migration history, family memory and Manchester's Chinese community.",
      sourceIds: ["lily-kwok"],
      dishes: [
        {
          name: "Lily Kwok's Chicken Curry",
          englishName: "Lily Kwok's Chicken Curry",
          province: "香港",
          tags: ["family recipe", "curry", "migration memory"],
          method: "Chicken is cooked with onion, potato or vegetables until the curry sauce thickens, then served so rice can carry the sauce.",
          taste: "Mildly spiced, slightly sweet and sauce-rich. Compared with mala dishes, it feels more like home comfort food.",
          story: "Lily Kwok's story links early Manchester Chinese restaurants, women's entrepreneurship and family recipes. The dish is not just a menu item but an entry into migration history."
        },
        {
          name: "家常点心拼盘",
          englishName: "Home-style Dim Sum Selection",
          province: "广东",
          tags: ["dim sum", "sharing", "teahouse"],
          method: "Small steamed, pan-fried and fried items are combined so diners can move between textures while talking.",
          taste: "Not built around one strong hit of flavour; it works through savoury, soft, chewy and crisp contrasts.",
          story: "Dim sum culture emphasises variety and shared pacing. It helps explain how Cantonese food organises family and friendship around the table."
        }
      ]
    },
    {
      id: "yang-sing",
      name: "Yang Sing",
      area: "34 Princess Street / Chinatown",
      provinceLinks: ["广东", "香港", "北京"],
      map: { x: 218, y: 188, lat: 53.4778246, lng: -2.2409458 },
      accent: "#1f9a87",
      cuisineCategoryIds: ["cantonese", "hongkong", "beijing"],
      dataConfidence: "Added from OpenStreetMap public POI data; signature dishes are representative Cantonese/banquet examples and should be checked against the current menu.",
      description: "A long-running Chinatown dining point useful for explaining Cantonese banquet culture, dim sum and the way formal Chinese restaurants became part of Manchester city-centre food life.",
      sourceIds: ["osm-overpass"],
      dishes: [
        {
          name: "粤式点心拼盘",
          englishName: "Cantonese Dim Sum Selection",
          province: "广东",
          tags: ["dim sum", "sharing", "steamed"],
          method: "Small steamed or fried dishes such as dumplings, buns and rolls are served together so diners can compare textures and fillings.",
          taste: "Gentler than Sichuan food: savoury, lightly sweet, chewy, soft and crisp textures are usually more important than chilli heat.",
          story: "Dim sum links Cantonese teahouse culture with family and group dining. It is especially useful for non-Chinese users because the meal is built from many small choices."
        },
        {
          name: "北京烤鸭卷饼",
          englishName: "Peking Duck Pancakes",
          province: "北京",
          tags: ["duck", "pancake", "banquet"],
          method: "Roast duck is sliced and wrapped in thin pancakes with cucumber, scallion and sweet bean sauce.",
          taste: "Crisp skin and rich duck are balanced by fresh vegetables and a savoury-sweet sauce.",
          story: "Although linked to Beijing, roast duck is often offered in overseas Cantonese banquet restaurants, showing how regional dishes circulate through restaurant menus."
        }
      ]
    },
    {
      id: "mei-dim",
      name: "Mei Dim",
      area: "45 Faulkner Street / Chinatown",
      provinceLinks: ["广东", "香港"],
      map: { x: 235, y: 179, lat: 53.4785971, lng: -2.2393628 },
      accent: "#1f9a87",
      cuisineCategoryIds: ["cantonese", "hongkong"],
      dataConfidence: "Added from OpenStreetMap public POI data; dim sum examples should be checked against the current menu.",
      description: "A compact Chinatown point for showing how dim sum restaurants organise choice, sharing and Cantonese food memory in Manchester.",
      sourceIds: ["osm-overpass"],
      dishes: [
        {
          name: "虾饺烧卖",
          englishName: "Har Gow and Siu Mai",
          province: "广东",
          tags: ["dim sum", "shrimp", "pork"],
          method: "Dumplings are steamed in bamboo baskets, with translucent wrappers for har gow and open-topped pork or shrimp filling for siu mai.",
          taste: "Soft wrappers, springy seafood and savoury meat flavours create a light but filling teahouse dish.",
          story: "These dumplings are useful for explaining how Cantonese food values texture, small portions and conversation across the table."
        },
        {
          name: "烧鸭饭",
          englishName: "Roast Duck Rice",
          province: "香港",
          tags: ["roast duck", "rice", "everyday meal"],
          method: "Roast duck is chopped and served over rice with sauce and greens.",
          taste: "Rich roast skin and salty-sweet juices are softened by plain rice.",
          story: "Roast rice is one of the most recognisable Chinatown everyday meals, connecting Hong Kong street food rhythms with Manchester lunch culture."
        }
      ]
    },
    {
      id: "little-yang-sing",
      name: "Little Yang Sing",
      area: "17 George Street / Chinatown",
      provinceLinks: ["广东", "香港"],
      map: { x: 230, y: 172, lat: 53.4791449, lng: -2.2399014 },
      accent: "#1f9a87",
      cuisineCategoryIds: ["cantonese", "hongkong"],
      dataConfidence: "Added from OpenStreetMap public POI data; dish wording is representative and should be verified with the current menu.",
      description: "A Cantonese Chinatown restaurant point useful for explaining how smaller family-style venues sit alongside larger banquet restaurants.",
      sourceIds: ["osm-overpass"],
      dishes: [
        {
          name: "家常点心篮",
          englishName: "House Dim Sum Basket",
          province: "广东",
          tags: ["dim sum", "sharing", "teahouse"],
          method: "A mix of steamed dumplings and buns is served in small portions for sharing.",
          taste: "Mild, savoury and textural, with sweetness from wrappers and freshness from fillings.",
          story: "The basket format makes Cantonese food legible to new users: each item becomes a small cultural sample."
        },
        {
          name: "广式脆面",
          englishName: "Cantonese Crispy Noodles",
          province: "广东",
          tags: ["wheat noodles", "wok sauce", "vegetables"],
          method: "Noodles are fried until crisp, then topped with a glossy stir-fried sauce of vegetables, meat or seafood.",
          taste: "The key contrast is crisp noodles softening under savoury sauce.",
          story: "Crispy noodles show Cantonese attention to texture and sauce control in a dish that is familiar to many overseas diners."
        }
      ]
    },
    {
      id: "wings",
      name: "Wings Restaurant",
      area: "1 Lincoln Square",
      provinceLinks: ["广东", "香港"],
      map: { x: 151, y: 166, lat: 53.4796671, lng: -2.2467274 },
      accent: "#1f9a87",
      cuisineCategoryIds: ["cantonese", "hongkong"],
      dataConfidence: "Added from OpenStreetMap public POI data; the restaurant is used here as a city-centre Cantonese banquet-style POI.",
      description: "A central Manchester point for Cantonese banquet dining, useful for linking Chinese food culture to business meals, celebrations and formal dining.",
      sourceIds: ["osm-overpass"],
      dishes: [
        {
          name: "粤式烧鸭",
          englishName: "Cantonese Roast Duck",
          province: "广东",
          tags: ["duck", "roast", "banquet"],
          method: "Duck is roasted so the skin becomes glossy and the meat remains rich, then served chopped with sauce.",
          taste: "Savoury, fatty and aromatic, with a sweet-salty roast sauce.",
          story: "Roast duck is a strong bridge between restaurant craft and celebration meals in Cantonese food culture."
        },
        {
          name: "海鲜炒饭",
          englishName: "Seafood Fried Rice",
          province: "广东",
          tags: ["seafood", "rice", "wok"],
          method: "Rice is stir-fried quickly with egg, seafood, vegetables and light seasoning.",
          taste: "Mild and savoury, with wok aroma and sweetness from seafood.",
          story: "Fried rice is often treated as simple, but it helps explain Cantonese heat control and the central place of rice in everyday meals."
        }
      ]
    },
    {
      id: "hunan-restaurant",
      name: "Hunan / Xiang Zhi Wei 湘之味",
      area: "19 George Street / Chinatown",
      provinceLinks: ["湖南"],
      map: { x: 228, y: 173, lat: 53.4790309, lng: -2.240063 },
      accent: "#c45132",
      cuisineCategoryIds: ["hunan"],
      dataConfidence: "OpenStreetMap provides the Chinatown POI; Xiaohongshu searches repeatedly surface 湘之味 as a Manchester Hunan restaurant lead. Current menu and English naming should be verified before final submission.",
      description: "A clear Hunan-linked point for distinguishing fresh chilli, sour-spicy and smoky flavours from Sichuan-Chongqing mala. Xiaohongshu posts frame it as a student-facing Hunan taste reference.",
      sourceIds: ["osm-overpass", "xiaohongshu-manchester-leads"],
      dishes: [
        {
          name: "剁椒鱼",
          englishName: "Fish with Chopped Chilli",
          province: "湖南",
          tags: ["seafood", "chopped chilli", "fresh heat"],
          method: "Fish is steamed or cooked with chopped chilli, ginger and aromatics.",
          taste: "Bright, salty, chilli-forward and less numbing than Sichuan dishes.",
          story: "This is a good way to teach users that Chinese spiciness is regional: Hunan heat is often fresh and direct."
        },
        {
          name: "小炒牛肉",
          englishName: "Stir-fried Beef with Chilli",
          province: "湖南",
          tags: ["beef", "fresh chilli", "wok"],
          method: "Thin beef slices are quickly stir-fried with fresh chilli, garlic and aromatics.",
          taste: "Hot, savoury and wok-fragrant.",
          story: "Small stir-fries show Hunan home-style speed, heat and everyday intensity."
        }
      ]
    },
    {
      id: "noodle-alley",
      name: "Noodle Alley 宽窄巷",
      area: "56 Faulkner Street, Manchester M1 4FH / Chinatown",
      provinceLinks: ["川渝"],
      map: { x: 223, y: 185, lat: 53.4780282, lng: -2.2404495 },
      accent: "#d94b35",
      cuisineCategoryIds: ["chuanyu"],
      dataConfidence: "OpenStreetMap provides the Chinatown POI. A public Xiaohongshu food post dated May 2023 identifies the restaurant at 56 Faulkner Street, M1 4FH and records Sichuan snacks including Chongqing xiaomian, Yibin ranmian and steamed beef; current menu availability still needs checking.",
      description: "A Sichuan snack and noodle point for explaining individual, everyday dishes alongside the better-known shared hot-pot experience.",
      sourceIds: ["osm-overpass", "xiaohongshu-noodle-alley-2023"],
      dishes: [
        {
          name: "重庆小面",
          englishName: "Chongqing Xiaomian (Chongqing Noodles)",
          province: "川渝",
          tags: ["wheat noodles", "red oil", "mala"],
          method: "Fresh alkaline noodles are seasoned with chilli oil, soy sauce, vinegar, garlic, sesame or peanut aroma and Sichuan pepper. They can be served dry or with broth, with toppings varying by shop.",
          taste: "Springy, fragrant and direct, with red-oil heat, savoury soy, acidity and a possible peppercorn tingle.",
          story: "Xiaomian is a useful everyday counterpart to hot pot: a low-cost, individual breakfast or street meal closely associated with Chongqing's neighbourhood food culture."
        },
        {
          name: "宜宾燃面",
          englishName: "Yibin Ranmian (Burning Noodles)",
          province: "川渝",
          tags: ["thin wheat noodles", "Yibin preserved mustard greens", "chilli oil"],
          dietary: ["pork", "gluten", "nuts", "soy"],
          dietaryNote: "The 2023 food post confirms the dish name, not the current recipe. Ranmian may be vegetarian or topped with minced meat, and toppings, oils and sauces can vary: confirm before ordering.",
          method: "Fine wheat noodles are tossed rather than served in broth, typically with chilli oil, sesame or peanut aroma and Yibin yacai, a preserved mustard green.",
          taste: "Dry, aromatic and savoury, with concentrated chilli warmth, toasted fragrance and a salty fermented-vegetable finish.",
          story: "From Yibin in southern Sichuan, ranmian shows how a small bowl of noodles can carry place-specific pantry ingredients and a regional identity beyond generic 'spicy noodles'."
        },
        {
          name: "粉蒸牛肉",
          englishName: "Steamed Beef with Rice Flour",
          province: "川渝",
          tags: ["beef", "rice flour", "steamed"],
          dietary: ["beef", "soy"],
          dietaryNote: "The post records this dish in 2023, but the seasoning and side ingredients are not a current allergen statement. Confirm sauces and cross-contact with the restaurant.",
          method: "Marinated beef is coated in seasoned rice flour and steamed until tender, often with chilli, aromatics and a soft, grainy coating.",
          taste: "Tender and savoury rather than sharply spicy, with a soft rice-flour texture and deep aromatic seasoning.",
          story: "Steaming is a useful counterpoint to the stereotype that Sichuan food is only fried or fiercely hot: texture, fragrance and slow cooking matter too."
        }
      ]
    },
    {
      id: "spicy-city",
      name: "Spicy City Restaurant",
      area: "56 Faulkner Street / Chinatown",
      provinceLinks: ["川渝"],
      map: { x: 223, y: 186, lat: 53.4780086, lng: -2.2404748 },
      accent: "#d94b35",
      cuisineCategoryIds: ["chuanyu"],
      dataConfidence: "Added from OpenStreetMap public POI data; dish examples should be verified with menu or fieldwork.",
      description: "A Sichuan-Chongqing style Chinatown point for red oil, dry pot and spicy shared dishes.",
      sourceIds: ["osm-overpass"],
      dishes: [
        {
          name: "水煮鱼",
          englishName: "Boiled Fish in Chilli Oil",
          province: "川渝",
          tags: ["seafood", "mala", "red oil"],
          method: "Fish slices are cooked in a chilli and peppercorn broth, then finished with hot oil.",
          taste: "Numbing, spicy, oily and aromatic.",
          story: "Boiled dishes explain that Sichuan-Chongqing heat is layered through oil, broth and aromatics."
        },
        {
          name: "干锅鸡",
          englishName: "Dry Pot Chicken",
          province: "川渝",
          tags: ["chicken", "dry pot", "chilli"],
          method: "Chicken and vegetables are tossed with chilli, garlic and spices until the sauce clings to the ingredients.",
          taste: "Dry-fragrant, spicy and savoury.",
          story: "Dry pot dining is highly social because the dish is shared and picked through slowly."
        }
      ]
    },
    {
      id: "chuan-guoxiang",
      name: "Chuan Guoxiang",
      area: "43 Faulkner Street / Chinatown",
      provinceLinks: ["川渝"],
      map: { x: 236, y: 178, lat: 53.4786274, lng: -2.2393232 },
      accent: "#d94b35",
      cuisineCategoryIds: ["chuanyu"],
      dataConfidence: "Added from OpenStreetMap public POI data; Sichuan dish examples are representative and need menu confirmation.",
      description: "A Sichuan-named Chinatown point suitable for explaining mala, twice-cooked pork and fragrant pot styles.",
      sourceIds: ["osm-overpass"],
      dishes: [
        {
          name: "回锅肉",
          englishName: "Twice-cooked Pork",
          province: "川渝",
          tags: ["pork", "doubanjiang", "wok"],
          method: "Pork is simmered, sliced, then stir-fried with fermented chilli bean paste, leeks and peppers.",
          taste: "Savoury, fatty, chilli-fragrant and slightly sweet.",
          story: "Twice-cooked pork is a household-style Sichuan classic that shows how doubanjiang builds depth."
        },
        {
          name: "麻辣香锅",
          englishName: "Mala Fragrant Pot",
          province: "川渝",
          tags: ["mala", "customisable", "shared dish"],
          method: "Chosen ingredients are stir-fried with chilli, Sichuan peppercorn and aromatic paste.",
          taste: "Numbing, spicy, oily and strongly aromatic.",
          story: "Fragrant pot turns choice into culture: diners assemble the dish from preferred ingredients."
        }
      ]
    },
    {
      id: "blue-eyed-panda",
      name: "Blue Eyed Panda",
      area: "3 Jersey Street / Ancoats",
      provinceLinks: ["广东", "香港", "湖南"],
      map: { x: 347, y: 121, lat: 53.4835686, lng: -2.2291567 },
      accent: "#2f6fba",
      cuisineCategoryIds: ["cantonese", "hongkong", "hunan"],
      dataConfidence: "Official website confirms the address and lists a gluten-free menu; exact dish availability still needs current menu checks.",
      description: "An Ancoats Chinese restaurant useful for demonstrating accessibility features because its public website explicitly offers a gluten-free menu.",
      sourceIds: ["osm-overpass", "blue-eyed-panda"],
      dishes: [
        {
          name: "椒盐豆腐",
          englishName: "Salt and Pepper Tofu",
          province: "广东",
          tags: ["tofu", "vegetarian option", "salt-pepper"],
          method: "Tofu is fried or crisped, then tossed with salt, pepper, chilli and spring onion.",
          taste: "Crisp outside, soft inside, lightly spicy and savoury.",
          story: "This is a useful dish for non-meat eaters, showing that Chinese restaurant food is not only meat-centred."
        },
        {
          name: "无麸质炒菜选择",
          englishName: "Gluten-free Stir-fry Selection",
          province: "广东",
          tags: ["gluten-free menu", "wok", "accessibility"],
          method: "Ingredients are stir-fried with sauces selected or adapted for gluten-free diners.",
          taste: "Varies by dish, but the key cultural point is accommodation rather than one fixed flavour.",
          story: "A gluten-free menu makes the project more inclusive for non-Chinese users with dietary restrictions."
        }
      ]
    },
    {
      id: "yang-guo-fu",
      name: "Yang Guo Fu Ma La Tang 杨国福麻辣烫",
      area: "Manchester, exact address to verify",
      provinceLinks: ["东北", "川味源流"],
      map: { x: 224, y: 184, lat: 53.4782, lng: -2.2404 },
      accent: "#b73352",
      cuisineCategoryIds: ["dongbei", "chuanyu"],
      dataConfidence: "User-reported from Xiaohongshu-style Manchester Chinese food discovery; public geocoding did not return a stable Manchester POI, so this is a placeholder point near Chinatown until the exact address is confirmed.",
      description: "A Northeast-style malatang chain lead. Malatang has Sichuan street-food roots, but Yang Guo Fu is commonly understood through the later Northeast chain style: self-selected ingredients, creamy sesame-forward soup and strong customisation.",
      sourceIds: ["user-reported-xhs", "malatang-background"],
      dishes: [
        {
          name: "杨国福菌菇汤麻辣烫",
          englishName: "Yang Guo Fu Mushroom-broth Malatang",
          province: "东北",
          tags: ["malatang", "mushroom broth", "mild option"],
          method: "Diners select vegetables, tofu products, noodles, meat or seafood, then the ingredients are cooked together in a mild mushroom broth. Stock and sauce ingredients still need to be confirmed.",
          taste: "Mild, savoury and earthy rather than chilli-led, with flavour changing according to the selected ingredients.",
          story: "The mushroom broth shows that a malatang meal does not have to be strongly spicy. Its self-selection model makes ingredient and cross-contact guidance especially important."
        },
        {
          name: "杨国福番茄汤麻辣烫",
          englishName: "Yang Guo Fu Tomato-broth Malatang",
          province: "东北",
          tags: ["malatang", "tomato broth", "mild option"],
          method: "Selected vegetables, tofu products, noodles, meat or seafood are cooked in a tomato-based broth. Diners can change the bowl contents, but should confirm the stock and sauces.",
          taste: "Mild, gently sweet and tomato-forward, with a lighter impression than a chilli-oil broth.",
          story: "The tomato option helps introduce malatang as a customisable format rather than one fixed flavour. It is milder, but not automatically vegetarian, halal or allergen-free."
        }
      ]
    },
    {
      id: "lameizi",
      name: "Lameizi Restaurant & Supermarket 辣妹子",
      area: "City Centre, Chester St, Manchester M1 5QS / Floor 1, Manchester Metropolitan University",
      provinceLinks: ["川渝"],
      map: { x: 218, y: 246, lat: 53.4729, lng: -2.2402 },
      accent: "#d94b35",
      cuisineCategoryIds: ["chuanyu"],
      dataConfidence: "User-provided Google Maps screenshots confirm the listing name, Chinese name, address, Google category and rating lead. Coordinates are placed near Chester Street for the prototype and should be checked with a copied Google Maps pin before final submission.",
      description: "A newly added Sichuan-Chongqing lead near the university corridor. It strengthens the map beyond Chinatown and helps show how mala restaurants cluster around student and city-centre food routes.",
      sourceIds: ["google-maps-lameizi", "sichuan-cuisine", "mala-seasoning"],
      dishes: [
        {
          name: "水煮鱼",
          englishName: "Sichuan Boiled Fish",
          province: "川渝",
          tags: ["mala", "fish", "chilli oil"],
          dietary: ["seafood", "soy", "alcohol"],
          method: "Fish slices are poached, placed over vegetables, then covered with hot chilli oil, dried chillies and Sichuan peppercorn.",
          taste: "Numbing, spicy and aromatic, with tender fish absorbing chilli oil and peppercorn fragrance.",
          story: "Boiled fish is a strong example of Sichuan-Chongqing mala aesthetics: heat, aroma and spectacle arrive together when the hot oil hits the chillies."
        },
        {
          name: "麻辣香锅",
          englishName: "Mala Fragrant Pot",
          province: "川渝",
          tags: ["mala", "customisable", "dry pot"],
          dietary: ["soy", "nuts"],
          method: "Diners choose ingredients, then the kitchen stir-fries them with chilli, Sichuan peppercorn, aromatic paste and dry-pot seasoning.",
          taste: "Dry, spicy, savoury and intensely fragrant; the flavour can be adjusted through ingredient choice.",
          story: "Mala fragrant pot is helpful for non-Chinese users because it turns regional flavour into a visible choice system: the diner builds the dish before the kitchen cooks it."
        }
      ]
    },
    {
      id: "chuan-yun-xuan",
      name: "Chuan Yun Xuan 川韵轩",
      area: "Near RNCM / M15 6AD lead",
      provinceLinks: ["川渝"],
      map: { x: 244, y: 303, lat: 53.4682, lng: -2.2389 },
      accent: "#d94b35",
      cuisineCategoryIds: ["chuanyu"],
      dataConfidence: "Xiaohongshu posts repeatedly identify 川韵轩 as a newer Manchester Sichuan restaurant near RNCM, with one comment giving M15 6AD. Exact storefront coordinates and current menu need Google Maps or fieldwork verification.",
      description: "A student-area Sichuan lead that extends the map south of Chinatown. It is useful for showing how recent Chinese restaurants cluster around university buildings as well as Chinatown.",
      sourceIds: ["xiaohongshu-manchester-leads", "sichuan-cuisine", "mala-seasoning"],
      dishes: [
        {
          name: "夫妻肺片",
          englishName: "Fuqi Feipian",
          province: "川渝",
          tags: ["beef", "offal", "mala"],
          dietary: ["beef", "soy", "nuts"],
          method: "Thin slices of beef and offal are dressed with chilli oil, Sichuan peppercorn, sesame or peanut aroma and fresh herbs.",
          taste: "Cold, spicy, numbing and deeply savoury, with aroma from red oil rather than heat alone.",
          story: "This dish helps explain Sichuan cold-dish culture: intense flavour can come from dressing, slicing and texture, not only from hot wok cooking."
        },
        {
          name: "刀削面与米线",
          englishName: "Knife-cut Noodles and Rice Noodles",
          province: "川渝",
          tags: ["noodles", "student meal", "broth"],
          dietary: ["gluten", "soy"],
          method: "Noodles or rice noodles are served with broth, chilli oil, vegetables and meat or tofu toppings.",
          taste: "Flexible: from light broth to spicy red-oil comfort food.",
          story: "For students, noodle bowls make regional Chinese food portable, affordable and repeatable around the university corridor."
        }
      ]
    },
    {
      id: "hao-zai-lai",
      name: "Hao Zai Lai Noodle House 好再来面馆",
      area: "Chinatown, near Teapresso lead",
      provinceLinks: ["川渝"],
      map: { x: 232, y: 178, lat: 53.47855, lng: -2.2396 },
      accent: "#8b6f47",
      cuisineCategoryIds: ["chuanyu"],
      dataConfidence: "Xiaohongshu posts describe 好再来面馆 as a newer Chinatown noodle point near Teapresso. Exact address and official English name need verification.",
      description: "A Chinatown noodle lead useful for representing newer student-frequented noodle shops and Sichuan beef-broth styles.",
      sourceIds: ["xiaohongshu-manchester-leads", "sichuan-cuisine"],
      dishes: [
        {
          name: "跷脚牛肉",
          englishName: "Qiaojiao Beef",
          province: "川渝",
          tags: ["beef", "clear broth", "Leshan"],
          dietary: ["beef", "soy"],
          method: "Beef slices and offal are served in a light but aromatic broth, often with greens and dipping seasoning.",
          taste: "Cleaner and broth-forward compared with heavy mala dishes, while still warming and savoury.",
          story: "Qiaojiao beef is associated with Leshan in Sichuan and helps show that Sichuan food is not only chilli oil and hot pot."
        },
        {
          name: "香辣牛肉面",
          englishName: "Spicy Beef Noodles",
          province: "川渝",
          tags: ["beef", "wheat noodles", "spicy"],
          dietary: ["beef", "gluten", "soy"],
          method: "Beef, noodles and potatoes or greens are served with chilli seasoning and rich broth or sauce.",
          taste: "Beefy, warming and spicy, with noodles carrying the sauce.",
          story: "A beef noodle bowl works well for the app because it is easy for non-Chinese users to understand while still carrying a regional story."
        }
      ]
    },
    {
      id: "no8-hotpot",
      name: "No.8 Hotpot 星期八火锅",
      area: "Unit 7, The Quadrangle, Hulme Street, Manchester M1 5GL",
      provinceLinks: ["川渝"],
      map: { x: 297, y: 282, lat: 53.47287, lng: -2.24099 },
      accent: "#d94b35",
      cuisineCategoryIds: ["chuanyu"],
      dataConfidence: "No.8's official website verifies its Unit 7 address and describes the restaurant as serving traditional Sichuan-style hot pot with a modern twist. The Chongqing-style interpretation is additionally informed by a user field assessment and is presented as a cultural classification rather than the restaurant's official wording. Broths, ingredients and opening details should be reconfirmed before a visit.",
      description: "A strong Manchester entry point for understanding Chongqing-style communal hot pot: diners share a simmering mala broth, cook sliced meat, offal, seafood, vegetables and tofu at the table, and balance the broth with an individual dipping sauce. The restaurant also offers milder broths, making the format easier to explore with a mixed group.",
      sourceIds: ["no8-official", "no8-menu", "chongqing-hotpot"],
      dishes: [
        {
          name: "重庆风味麻辣锅",
          englishName: "Chongqing-style Mala Hot Pot",
          province: "川渝",
          tags: ["hot pot", "mala", "communal dining"],
          dietary: ["beef", "soy"],
          dietaryNote: "Spicy broths may contain beef tallow and soy-based seasonings. Ingredients are chosen separately, so confirm the broth recipe, halal status, allergens and shared utensils with staff.",
          method: "A chilli-and-Sichuan-peppercorn broth is kept simmering at the table. Diners briefly cook sliced meat, offal, tofu products, mushrooms, vegetables and noodles, then season each bite with their own dipping sauce.",
          taste: "Deeply savoury, aromatic, numbing and hot. The broth builds intensity as ingredients cook, while sesame oil or other dipping sauces can soften and round the heat.",
          story: "Chongqing hot pot turns cooking into a shared social rhythm. The bubbling pot is the centre of the table, and the sequence of choosing, cooking and sharing ingredients matters as much as any single finished dish."
        },
        {
          name: "鸳鸯锅",
          englishName: "Twin-flavour Hot Pot",
          province: "川渝",
          tags: ["split broth", "customisable", "sharing"],
          dietary: ["beef", "soy"],
          dietaryNote: "A mild-looking broth is not automatically vegetarian, halal or allergen-free. Confirm both broth bases and avoid moving utensils between sections if cross-contact matters.",
          method: "A divided pot serves a mala broth beside a gentler broth so diners can cook the same range of ingredients at different heat levels.",
          taste: "The mala side is chilli-hot and peppercorn-numbing; the mild side provides a cleaner, softer contrast whose flavour depends on the selected broth.",
          story: "The divided pot adapts a strongly flavoured communal meal for diners with different heat preferences, while preserving the shared table experience."
        }
      ]
    },
    {
      id: "xiongqi",
      name: "XiongQi Hot Pot 雄柒火锅",
      area: "56 Faulkner Street, Manchester M1 4FH",
      provinceLinks: ["川渝"],
      map: { x: 224, y: 184, lat: 53.47846, lng: -2.24031 },
      accent: "#b73352",
      cuisineCategoryIds: ["chuanyu"],
      dataConfidence: "The Manchester Chinese directory lists XiongQi at 56 Faulkner Street, while the restaurant's published menu identifies a hot-pot offer and lists a Manchester contact number. Menu details still need periodic checking because restaurant dishes and prices change.",
      description: "A Sichuan-Chongqing hot-pot restaurant centred on communal broth cooking, sliced meats, vegetables and strong chilli-peppercorn seasoning.",
      sourceIds: ["xiongqi-manchester", "xiongqi-menu", "sichuan-cuisine"],
      dishes: [
        {
          name: "麻辣鸳鸯锅",
          englishName: "Mala Twin-flavour Hot Pot",
          province: "川渝",
          tags: ["hot pot", "mala", "sharing"],
          dietary: ["beef", "soy"],
          method: "A divided pot lets diners cook ingredients in a chilli-and-peppercorn broth alongside a milder broth. Ingredients and dipping sauces should be checked individually.",
          taste: "Numbing, spicy and aromatic on one side, with a gentler broth offering contrast.",
          story: "The divided pot makes different heat preferences shareable at one table, while keeping the communal rhythm of Sichuan-Chongqing hot pot."
        },
        {
          name: "辣子鸡",
          englishName: "Deep-fried Chicken with Chilli",
          province: "川渝",
          tags: ["chicken", "dried chilli", "fried"],
          dietary: ["poultry", "gluten", "soy"],
          method: "Small pieces of chicken are fried, then tossed with dried chillies, Sichuan peppercorns and aromatic seasonings.",
          taste: "Dry, crisp, fragrant and hot, with chilli aroma surrounding bite-sized chicken.",
          story: "The dish shows that the large volume of chillies is part of the aroma and presentation; diners usually search through them for the chicken pieces."
        }
      ]
    },
    {
      id: "onlyyu",
      name: "ONLYYU / Only Yu",
      area: "58-60 George Street, Manchester M1 4HF",
      provinceLinks: ["广东", "香港"],
      map: { x: 230, y: 181, lat: 53.4789, lng: -2.2401 },
      accent: "#1f9a87",
      cuisineCategoryIds: ["cantonese", "hongkong"],
      dataConfidence: "Only Yu's official website lists its first- and second-floor restaurant at 58-60 George Street. Dish availability and opening hours should still be checked before a visit.",
      description: "A Cantonese community-recommended lead for dim sum, roast meats and Hong Kong-style comfort dishes.",
      sourceIds: ["onlyyu-official", "xiaohongshu-manchester-leads"],
      dishes: [
        {
          name: "红米肠与虾饺",
          englishName: "Red Rice Noodle Rolls and Har Gow",
          province: "广东",
          tags: ["dim sum", "shrimp", "rice roll"],
          dietary: ["seafood", "soy"],
          method: "Shrimp dumplings are steamed while red rice noodle rolls wrap crisp filling in soft rice sheets.",
          taste: "Springy seafood, soft rice wrapper and savoury dipping sauce.",
          story: "Dim sum lets the app explain Cantonese food as paced sharing: small plates, tea and repeated choices across a table."
        },
        {
          name: "烧腊三拼",
          englishName: "Triple Roast Meat Platter",
          province: "香港",
          tags: ["roast meats", "sharing", "rice"],
          dietary: ["pork", "poultry", "soy"],
          method: "Roast duck, char siu or crispy pork are chopped and served with rice, greens and savoury-sweet roast sauce.",
          taste: "Glossy, savoury, sweet and rich, balanced by plain rice.",
          story: "Roast-meat platters are a classic overseas Cantonese restaurant anchor and a strong visual route into Hong Kong food memory."
        }
      ]
    },
    {
      id: "lao-di-fang",
      name: "Lao Di Fang 老地方大酒楼",
      area: "Chinatown, exact address to verify",
      provinceLinks: ["广东", "香港"],
      map: { x: 226, y: 182, lat: 53.47865, lng: -2.2402 },
      accent: "#2f6fba",
      cuisineCategoryIds: ["cantonese", "hongkong"],
      dataConfidence: "Xiaohongshu posts repeatedly mention 老地方 as a Chinatown Cantonese restaurant with dim sum, roast meats, hot pot or KTV/private-room context. Exact address should be confirmed.",
      description: "A Cantonese gathering-place lead for family meals, private-room social dining and late-night Chinatown culture.",
      sourceIds: ["xiaohongshu-manchester-leads"],
      dishes: [
        {
          name: "干炒牛河",
          englishName: "Dry-fried Beef Ho Fun",
          province: "广东",
          tags: ["beef", "wok hei", "rice noodles"],
          dietary: ["beef", "gluten", "soy"],
          method: "Wide rice noodles are wok-fried with beef, bean sprouts, onion and soy-based seasoning.",
          taste: "Smoky, savoury and slightly sweet, with springy noodles and tender beef.",
          story: "This dish is a Cantonese heat-control lesson: the cultural value is in wok aroma and timing, not heavy sauce."
        },
        {
          name: "烧味拼盘",
          englishName: "Cantonese Roast Meat Platter",
          province: "香港",
          tags: ["roast duck", "char siu", "sharing"],
          dietary: ["pork", "poultry", "soy"],
          method: "Roast meats are chopped and shared with rice, greens and dipping sauces.",
          taste: "Sweet-savoury roast aromas, crisp skin and rich meat juices.",
          story: "Shared roast meats make Chinatown dining social: one platter can carry family, student and celebration memories at once."
        }
      ]
    },
    {
      id: "taiwu",
      name: "Tai Wu 太湖",
      area: "81 Upper Brook Street, Manchester M13 9TX",
      provinceLinks: ["广东", "香港"],
      map: { x: 238, y: 296, lat: 53.4689, lng: -2.2393 },
      accent: "#1f9a87",
      cuisineCategoryIds: ["cantonese", "hongkong"],
      dataConfidence: "Tai Wu's official booking page and the public Food Standards listing identify the restaurant at 81 Upper Brook Street. Individual dishes and service times should be rechecked before a visit.",
      description: "A Cantonese dim-sum and banquet-style lead useful for mapping student access to Cantonese food outside the Chinatown core.",
      sourceIds: ["taiwu-official", "taiwu-food-standards", "xiaohongshu-manchester-leads"],
      dishes: [
        {
          name: "早茶点心",
          englishName: "Yum Cha Dim Sum",
          province: "广东",
          tags: ["dim sum", "tea", "sharing"],
          dietary: ["seafood", "pork", "gluten"],
          method: "Small steamed, fried and baked dishes are served across the table with tea.",
          taste: "Mild, savoury, textural and varied rather than built around one strong flavour.",
          story: "Yum cha is a food rhythm: ordering many small dishes turns the table into a slow conversation."
        },
        {
          name: "烧鸭与河粉",
          englishName: "Roast Duck and Ho Fun",
          province: "香港",
          tags: ["roast duck", "rice noodles", "wok"],
          dietary: ["poultry", "soy"],
          method: "Roast duck or wok-fried rice noodles are served as everyday Cantonese restaurant staples.",
          taste: "Roasty, savoury and gently sweet, with texture from noodles or crisp skin.",
          story: "These dishes help users see how Cantonese restaurants balance banquet dishes with everyday lunch formats."
        }
      ]
    },
    {
      id: "chao-niu-yan",
      name: "Chao Niu Yan 潮牛宴",
      area: "61-63 Whitworth Street, Manchester M1 3NY",
      provinceLinks: ["广东", "潮汕"],
      map: { x: 214, y: 246, lat: 53.4729, lng: -2.2412 },
      accent: "#b73352",
      cuisineCategoryIds: ["cantonese"],
      dataConfidence: "A current public restaurant listing gives 61-63 Whitworth Street and a menu centred on Chaoshan beef hot pot, beef broths and freshly cut beef. An official first-party website has not yet been located.",
      description: "A Chaoshan beef hot pot lead that lets the app explain how Guangdong food is not only Cantonese dim sum: beef cuts, broth and dipping sauces form another regional language.",
      sourceIds: ["chao-niu-thefork", "xiaohongshu-manchester-leads"],
      dishes: [
        {
          name: "潮汕牛肉火锅",
          englishName: "Chaoshan Beef Hot Pot",
          province: "广东",
          tags: ["beef", "hot pot", "clear broth"],
          dietary: ["beef", "soy"],
          method: "Thin beef cuts are briefly swished in clear beef broth, then eaten with dipping sauces such as satay or soy-chilli sauce.",
          taste: "Clean, beef-forward and aromatic, less oily than Sichuan-Chongqing hot pot.",
          story: "The cultural focus is precision: different beef cuts are cooked for different times, making the meal both social and technical."
        },
        {
          name: "手打牛肉丸",
          englishName: "Handmade Beef Balls",
          province: "广东",
          tags: ["beef", "springy texture", "hot pot"],
          dietary: ["beef", "soy"],
          method: "Beef paste is worked until springy, shaped into balls and cooked in broth.",
          taste: "Bouncy, savoury and broth-soaked.",
          story: "Beef balls show the Chaoshan interest in texture, handwork and ingredient freshness."
        }
      ]
    },
    {
      id: "meishi-meike",
      name: "Meishi Meike 美时美客",
      area: "Manchester, exact address to verify",
      provinceLinks: ["东北"],
      map: { x: 318, y: 256, lat: 53.4737, lng: -2.2387 },
      accent: "#58758f",
      cuisineCategoryIds: ["dongbei"],
      dataConfidence: "Xiaohongshu food diary posts mention 美时美客 as a Northeast iron-pot-stew lead. Exact address, current opening status and menu require verification.",
      description: "A Northeast lead for adding cold-climate shared stews to the map, broadening the prototype beyond spicy Sichuan and Cantonese dim sum.",
      sourceIds: ["xiaohongshu-manchester-leads"],
      dishes: [
        {
          name: "东北铁锅炖",
          englishName: "Northeast Iron Pot Stew",
          province: "东北",
          tags: ["stew", "shared meal", "cold climate"],
          dietary: ["pork", "poultry", "soy"],
          method: "Meat, potatoes, vegetables and sometimes corn bread are simmered together in a large iron pot.",
          taste: "Hearty, savoury, warming and strongly communal.",
          story: "Iron-pot stew is useful for non-Chinese users because it explains northern cold-climate cooking through warmth, portions and group dining."
        },
        {
          name: "锅包肉",
          englishName: "Guobaorou",
          province: "东北",
          tags: ["sweet-sour", "fried pork", "Harbin"],
          dietary: ["pork", "gluten", "soy"],
          method: "Pork slices are battered, fried crisp and tossed with a bright sweet-sour sauce.",
          taste: "Crisp, tangy, sweet and savoury.",
          story: "Guobaorou connects northeastern urban food culture with cross-cultural sweet-sour tastes."
        }
      ]
    },
    {
      id: "tattu",
      name: "Tattu Manchester",
      area: "3 Hardman Square / Spinningfields",
      provinceLinks: ["广东", "香港"],
      map: { x: 80, y: 165, lat: 53.4797376, lng: -2.2532386 },
      accent: "#9a6fb0",
      cuisineCategoryIds: ["cantonese", "hongkong"],
      dataConfidence: "Official website confirms the Manchester address and positions the restaurant as modern Chinese and Japanese cuisine; regional labels here are interpretive.",
      description: "A modern Chinese dining point for showing how Chinese food culture can become immersive, design-led and hybrid in contemporary Manchester.",
      sourceIds: ["osm-overpass", "tattu"],
      dishes: [
        {
          name: "现代点心",
          englishName: "Modern Dim Sum",
          province: "广东",
          tags: ["dim sum", "modern Chinese", "sharing"],
          method: "Classic small-plate and dumpling formats are reworked with contemporary presentation and premium ingredients.",
          taste: "More polished and theatrical than everyday dim sum, often balancing savoury, sweet and aromatic notes.",
          story: "Tattu helps discuss how Chinese food is translated into luxury dining and visual experience for a wider UK audience."
        },
        {
          name: "黑椒牛肉",
          englishName: "Black Pepper Beef",
          province: "香港",
          tags: ["beef", "black pepper", "wok"],
          method: "Beef is seared or wok-fried with black pepper sauce and vegetables.",
          taste: "Savoury, peppery and rich.",
          story: "Black pepper beef is common in overseas Chinese menus and works as a bridge between Cantonese wok cooking and British restaurant expectations."
        }
      ]
    },
    {
      id: "mr-hong-beef-noodle",
      name: "Mr Hong Beef Noodle",
      area: "43 Faulkner Street / Chinatown",
      provinceLinks: ["陕西"],
      map: { x: 236, y: 178, lat: 53.4786454, lng: -2.239299 },
      accent: "#8b6f47",
      cuisineCategoryIds: ["shaanxi"],
      dataConfidence: "Added from OpenStreetMap public POI data; the map uses it as a north-western noodle-culture example pending menu verification.",
      description: "A beef-noodle point that helps the demo represent Chinese noodle culture and Muslim/Halal-related user questions, even though certification must be checked.",
      sourceIds: ["osm-overpass"],
      dishes: [
        {
          name: "牛肉汤面",
          englishName: "Beef Noodle Soup",
          province: "陕西",
          tags: ["beef", "wheat noodles", "broth"],
          method: "Noodles are served in beef broth with sliced beef, herbs and chilli oil if requested.",
          taste: "Savoury, warming and aromatic.",
          story: "Beef noodles are a useful bridge into north-western Chinese Muslim-influenced foodways, but diners still need to check halal certification."
        },
        {
          name: "麻辣牛肉面",
          englishName: "Spicy Beef Noodles",
          province: "川渝",
          tags: ["beef", "wheat noodles", "spicy"],
          method: "Beef noodles are seasoned with chilli oil and aromatics.",
          taste: "Spicy, beefy and warming.",
          story: "The dish shows how noodle shops often combine northern staple foods with Sichuan-Chongqing spicy seasoning."
        }
      ]
    },
    {
      id: "peace-garden",
      name: "Peace Garden",
      area: "57 Booth Street West",
      provinceLinks: ["广东", "香港"],
      map: { x: 237, y: 311, lat: 53.4671454, lng: -2.2391457 },
      accent: "#5b8c5a",
      cuisineCategoryIds: ["cantonese", "hongkong"],
      dataConfidence: "Added from OpenStreetMap public POI data; vegetarian-friendly examples are representative and require menu checks.",
      description: "A university-area Chinese point useful for showing how vegetarian or lighter options can be surfaced for non-Chinese users.",
      sourceIds: ["osm-overpass"],
      dishes: [
        {
          name: "宫保豆腐",
          englishName: "Kung Pao Tofu",
          province: "广东",
          tags: ["tofu", "peanut", "vegetarian option"],
          method: "Tofu is stir-fried with chilli, vegetables and peanuts in a savoury-sweet sauce.",
          taste: "Sweet, savoury, nutty and gently spicy.",
          story: "Using tofu instead of chicken shows how Chinese restaurant dishes can be adapted for vegetarian diners."
        },
        {
          name: "素炒面",
          englishName: "Vegetable Chow Mein",
          province: "广东",
          tags: ["wheat noodles", "vegetarian option", "wok"],
          method: "Noodles are stir-fried with mixed vegetables and soy-based seasoning.",
          taste: "Savoury, mild and wok-fragrant.",
          story: "Vegetable noodles are a practical accessibility dish for users seeking lower-risk options."
        }
      ]
    }
  ],
  sources: [
    {
      id: "regional-cuisine-zhu-2013",
      label: "Zhu et al. (2013): Geography and Similarity of Regional Cuisines in China",
      url: "https://doi.org/10.1371/journal.pone.0079161",
      note: "Peer-reviewed evidence for treating cuisine as a regional phenomenon shaped strongly by geographical proximity. It also supports allowing several provinces to share a broader culinary tradition."
    },
    {
      id: "regional-cuisine-zhang-ma-2020",
      label: "Zhang and Ma (2020): Nutritional characteristics and health effects of regional cuisines in China",
      url: "https://doi.org/10.1186/s42779-020-0045-z",
      note: "Used to define regional cuisine through geography, environment, economy, cultural context, ethnicity, religion, ingredients and cooking methods, rather than through dish format alone."
    },
    {
      id: "chinese-culinary-regionalism-2020",
      label: "Swislocki (2020): Special Issue on Chinese Culinary Regionalism",
      url: "https://doi.org/10.1080/20549547.2020.1770490",
      note: "Used to recognise that Chinese food identities can be organised by province, city and ethnic region, and that the canonical four- or eight-cuisine lists do not cover every tradition represented in this project."
    },
    {
      id: "regional-differentiation-chen-1994",
      label: "Chen Chuankang (1994): The Culture of Chinese Diet: Regional Differentiation and Developing Trends",
      url: "https://www.geog.com.cn/CN/10.11821/xb199403004",
      note: "Provides a Chinese cultural-geography basis for treating foods, dishes and dietary culture as regional geographical phenomena rather than a single fixed cuisine list."
    },
    {
      id: "food-culture-poi-regionalization-2021",
      label: "Jiang et al. (2021): Using Restaurant POI Data to Explore Regional Structure of Food Culture Based on Cuisine Preference",
      url: "https://doi.org/10.3390/ijgi10010038",
      note: "Supports restaurant POIs and cultural regionalization as useful analytical methods, while showing that a regional structure depends on the selected data, categories and method."
    },
    {
      id: "fsa-allergy-guidance",
      label: "UK Food Standards Agency: food allergies, intolerances and coeliac disease",
      url: "https://www.food.gov.uk/food-safety-and-hygiene/food-allergies-intolerances-and-coeliac-disease",
      note: "Supports the project's cautious wording: vegetarian or vegan labelling is not an allergen guarantee, and users should still confirm ingredients and cross-contact directly."
    },
    {
      id: "osm-overpass",
      label: "OpenStreetMap / Overpass public POI query",
      url: "https://www.openstreetmap.org/",
      note: "Used on 8 July 2026 to expand Manchester Chinese restaurant coordinates from publicly mapped POI data. Names, locations and opening status should be checked against Google Maps, official websites or fieldwork before final dissertation use."
    },
    {
      id: "blue-eyed-panda",
      label: "Blue Eyed Panda official website",
      url: "https://www.blueeyedpanda.co.uk/",
      note: "Used to verify the address and the presence of a gluten-free menu reference."
    },
    {
      id: "tattu",
      label: "Tattu Manchester official website",
      url: "https://tattu.co.uk/manchester/",
      note: "Used to verify the Manchester address and its modern Chinese/Japanese positioning."
    },
    {
      id: "user-reported-xhs",
      label: "User-reported Xiaohongshu lead",
      url: "https://www.xiaohongshu.com/",
      note: "Used as a discovery lead for Yang Guo Fu Ma La Tang in Manchester. Exact address, opening status and menu should be verified before final dissertation submission."
    },
    {
      id: "google-maps-lameizi",
      label: "Google Maps lead: Lameizi Restaurant & Supermarket",
      url: "https://www.google.com/maps/search/Lameizi+Restaurant+%26+Supermarket+Manchester",
      note: "User-provided Google Maps screenshots on 8 July 2026 confirm the listing name, Chinese name 辣妹子, category, rating lead and address at Chester St, Manchester M1 5QS."
    },
    {
      id: "xiaohongshu-manchester-leads",
      label: "Xiaohongshu Manchester Chinese restaurant search leads",
      url: "https://www.xiaohongshu.com/search_result?keyword=%E6%9B%BC%E5%9F%8E%E4%B8%AD%E9%A4%90%E5%8E%85",
      note: "Used on 8 July 2026 as Chinese community discovery material. It surfaced student-facing restaurant leads such as ONLYYU, 老地方, 太湖, 川韵轩, 好再来面馆, 潮牛宴, 美时美客, 雄柒 and 湘之味; exact addresses and current menus require public-map or fieldwork verification."
    },
    {
      id: "no8-official",
      label: "No.8 Hotpot official website",
      url: "https://www.no8-manchester.com/",
      note: "Used on 14 July 2026 to verify the current address at Unit 7, The Quadrangle, Hulme Street, Manchester M1 5GL and the restaurant's own description of traditional Sichuan-style hot pot with a modern twist."
    },
    {
      id: "no8-menu",
      label: "No.8 Hotpot official menu page",
      url: "https://www.no8-manchester.com/menu",
      note: "Used on 14 July 2026 to verify the Chinese hot-pot menu and the restaurant's Chinese name, 星期八. Dish availability and broth recipes should still be confirmed directly."
    },
    {
      id: "onlyyu-official",
      label: "Only Yu official website",
      url: "https://www.onlyyu.co.uk/",
      note: "Used on 14 July 2026 to verify the restaurant address at 58-60 George Street, Manchester M1 4HF and its Cantonese positioning."
    },
    {
      id: "taiwu-official",
      label: "Tai Wu official booking page",
      url: "https://www.taiwu.co.uk/book",
      note: "Used on 14 July 2026 to verify the restaurant address at 81 Upper Brook Street, Manchester M13 9TX."
    },
    {
      id: "taiwu-food-standards",
      label: "Food Standards Agency: Tai Wu",
      url: "https://ratings.food.gov.uk/business/786280/tai-wu-manchester",
      note: "Used as a second public source for Tai Wu's address and current trading record."
    },
    {
      id: "xiongqi-manchester",
      label: "Manchester Chinese directory: XiongQi Hot Pot",
      url: "https://www.manchesterchinese.com/chinese-restaurants/display.asp?id=16",
      note: "Used on 14 July 2026 to verify XiongQi's address at 56 Faulkner Street, Manchester M1 4FH."
    },
    {
      id: "xiongqi-menu",
      label: "XiongQi published menu",
      url: "https://www.xiongqi.co.uk/wp-content/uploads/2022/11/LDN-Nov-Web.pdf",
      note: "Used to verify the hot-pot positioning, Manchester contact and representative menu items. The publication date means current availability should be checked."
    },
    {
      id: "chao-niu-thefork",
      label: "TheFork: Chao Niu Manchester menu",
      url: "https://www.thefork.co.uk/restaurant/chao-niu-r856518/menu",
      note: "Used on 14 July 2026 to verify the public address and current Chaoshan beef hot-pot menu. This remains a third-party source."
    },
    {
      id: "xiaohongshu-noodle-alley-2023",
      label: "Xiaohongshu: Noodle Alley dish and address evidence (2023)",
      url: "https://www.xiaohongshu.com/search_result?keyword=%E6%9B%BC%E5%9F%8E%20%E5%AE%BD%E7%AA%84%E5%B7%B7%20%E9%87%8D%E5%BA%86%E5%B0%8F%E9%9D%A2&source=web_explore_feed",
      note: "Public post by NicoleXfff, edited 19 May 2023, identifies Noodle Alley / 宽窄巷 at 56 Faulkner Street, M1 4FH and mentions Chongqing xiaomian, Yibin ranmian and steamed beef. It is used as menu and visual research evidence only; the creator's photographs are not copied into this prototype."
    },
    {
      id: "xiaohongshu-image-yangzhou-fried-rice",
      label: "Xiaohongshu visual reference: Yangzhou fried rice",
      url: "https://www.xiaohongshu.com/explore/69209d00000000001f004f43",
      note: "A finished-dish photograph by 酥鱼食验室 was used to replace a generic fried-rice image. It is a dish-level cultural reference, not evidence of a Manchester restaurant's current serving. Permission is still required before public deployment."
    },
    {
      id: "xiaohongshu-image-chongqing-xiaomian",
      label: "Xiaohongshu visual reference: Chongqing xiaomian",
      url: "https://www.xiaohongshu.com/explore/69a43132000000002303a54c",
      note: "A Chongqing field photograph by 9月捡了个猫 was used because it shows the dry, chilli-seasoned noodle form described in the text. It is not a photograph of Noodle Alley. Permission is still required before public deployment."
    },
    {
      id: "xiaohongshu-image-shrimp-siu-mai",
      label: "Xiaohongshu visual reference: fresh shrimp siu mai",
      url: "https://www.xiaohongshu.com/explore/69b4fec1000000002302290c",
      note: "A photograph by 小漓泡泡糖如履薄冰冰 is used as a component reference for the har-gow-and-siu-mai dish entry. It shows shrimp siu mai only and does not claim to represent Mei Dim's current basket. Permission is still required before public deployment."
    },
    {
      id: "xiaohongshu-image-triple-roast-rice",
      label: "Xiaohongshu visual reference: Cantonese triple roast rice",
      url: "https://www.xiaohongshu.com/explore/69ca5fa4000000001f002b09",
      note: "A UK roast-meat rice photograph by 茱茱猪猪 is used to show the visual distinction between roast poultry, char siu and roast pork. It is not a Manchester restaurant photograph. Permission is still required before public deployment."
    },
    {
      id: "xiaohongshu-image-cantonese-crispy-noodles",
      label: "Xiaohongshu visual reference: Cantonese crispy noodles",
      url: "https://www.xiaohongshu.com/explore/6624f366000000001c0049aa",
      note: "A UK restaurant photograph by Chinatown中國城大酒樓 replaces an unrelated generic noodle bowl. It is used for the crisp-noodle and glossy-sauce technique, not as a Little Yang Sing menu claim. Permission is still required before public deployment."
    },
    {
      id: "xiaohongshu-image-qiaojiao-beef-manchester",
      label: "Xiaohongshu Manchester reference: qiaojiao beef",
      url: "https://www.xiaohongshu.com/explore/69170ab700000001b030265",
      note: "A Manchester dining post by 吃肉的兔子Janae links the pictured qiaojiao beef to One More Noodles / 好再来面馆. This is stronger restaurant-linked visual evidence than the previous generic beef-noodle image, but current availability should still be verified. Permission is still required before public deployment."
    },
    {
      id: "xiaohongshu-image-chaoshan-beef-balls",
      label: "Xiaohongshu visual reference: Chaoshan beef balls",
      url: "https://www.xiaohongshu.com/explore/6a0ea99200000000070280be",
      note: "A clear-soup photograph by Zora is used to show the rounded, springy beef-ball form without confusing it with an ordinary beef noodle soup. It is not a Chao Niu Yan restaurant photograph. Permission is still required before public deployment."
    },
    {
      id: "xinjiang-cuisine-background",
      label: "Xinjiang cuisine background",
      url: "https://zh.wikipedia.org/wiki/%E6%96%B0%E7%96%86%E8%8F%9C",
      note: "Used to frame Xinjiang food through lamb, wheat foods, cumin, pilaf, naan, grilling and halal-aware north-western food culture."
    },
    {
      id: "xinjiang-dapanji",
      label: "Chinese source: Big Plate Chicken",
      url: "https://zh.wikipedia.org/wiki/%E5%A4%A7%E7%9B%98%E9%B8%A1",
      note: "Used to translate the Shawan roadside-origin account, chicken-potato base and belt-noodle serving style into the English demo text."
    },
    {
      id: "xinjiang-polo",
      label: "Chinese source: Uyghur polo / hand pilaf",
      url: "https://zh.wikipedia.org/wiki/%E6%8A%93%E9%A5%AD",
      note: "Used to summarise polo through rice, lamb, carrot, onion, cumin and Central Asian foodway references."
    },
    {
      id: "yunnan-crossing-bridge-noodles",
      label: "Chinese source: Crossing-the-bridge rice noodles",
      url: "https://zh.wikipedia.org/wiki/%E8%BF%87%E6%A1%A5%E7%B1%B3%E7%BA%BF",
      note: "Used to translate the Mengzi origin account, separated-broth serving ritual and hot-oil insulation story for non-Chinese users."
    },
    {
      id: "yunnan-steam-pot-chicken",
      label: "Chinese source: Steam Pot Chicken",
      url: "https://zh.wikipedia.org/wiki/%E6%B1%BD%E9%94%85%E9%B8%A1",
      note: "Used to explain Jianshui steam-pot technique, condensation cooking and clean broth flavour."
    },
    {
      id: "malatang-background",
      label: "Malatang background reference",
      url: "https://zh.wikipedia.org/wiki/%E9%BA%BB%E8%BE%A3%E7%83%AB",
      note: "Used to frame malatang as a customisable Chinese hot snack/meal format with regional variations."
    },
    {
      id: "wikimedia-dish-images",
      label: "Wikimedia Commons dish reference images",
      url: "https://commons.wikimedia.org/",
      note: "Used for prototype dish reference images. Final dissertation versions should ideally replace these with fieldwork photos or fully attributed image captions."
    },
    {
      id: "red-chilli",
      label: "Red Chilli official website",
      url: "https://redchillirestaurant.co.uk/",
      note: "Used to verify its Beijing and Sichuan positioning and sample menu references."
    },
    {
      id: "chinese-regional-cuisine",
      label: "Chinese regional cuisine overview",
      url: "https://en.wikipedia.org/wiki/Chinese_regional_cuisine",
      note: "Used to cross-check major regional cuisine categories and the role of geography, history and ingredients."
    },
    {
      id: "chinese-cuisine",
      label: "Chinese cuisine overview",
      url: "https://en.wikipedia.org/wiki/Chinese_cuisine",
      note: "Used to frame Chinese cuisine through geography, climate, history and cooking techniques."
    },
    {
      id: "sichuan-cuisine",
      label: "Sichuan cuisine background",
      url: "https://en.wikipedia.org/wiki/Sichuan_cuisine",
      note: "Used to verify Sichuan-Chongqing overlap, mala flavour, Sichuan peppercorn and key seasonings."
    },
    {
      id: "mala-seasoning",
      label: "Mala seasoning background",
      url: "https://en.wikipedia.org/wiki/Mala_%28seasoning%29",
      note: "Used to explain mala as the combined numbing-spicy sensation of Sichuan peppercorn and chilli."
    },
    {
      id: "chongqing-hotpot",
      label: "Chongqing hot pot background",
      url: "https://en.wikipedia.org/wiki/Chongqing_hot_pot",
      note: "Used to frame Chongqing hot pot as numbing-spicy, communal and table-centred dining."
    },
    {
      id: "chengdu-gastronomy",
      label: "Chengdu UNESCO City of Gastronomy reference",
      url: "https://en.wikipedia.org/wiki/City_of_Gastronomy",
      note: "Used as a quick reference for Chengdu's recognition in Sichuan food culture and gastronomic identity."
    },
    {
      id: "huaiyang-cuisine",
      label: "Huaiyang cuisine background",
      url: "https://en.wikipedia.org/wiki/Huaiyang_cuisine",
      note: "Used to verify Huaiyang cuisine's importance, delicate flavours and refined knife work."
    },
    {
      id: "shandong-cuisine",
      label: "Shandong cuisine background",
      url: "https://en.wikipedia.org/wiki/Shandong_cuisine",
      note: "Used to verify Shandong cuisine's influence on northern and imperial cooking, seafood and soups."
    },
    {
      id: "china-boundary",
      label: "China administrative boundary base map",
      url: "https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json",
      note: "Used to generate the proportionally scaled SVG base map; stored locally as a static demo asset."
    },
    {
      id: "beijing-cuisine",
      label: "Beijing cuisine background",
      url: "https://en.wikipedia.org/wiki/Beijing_cuisine",
      note: "Used to verify Beijing cuisine references such as wheat foods, sauces, roast duck and dumplings."
    },
    {
      id: "peking-duck",
      label: "Peking duck background",
      url: "https://en.wikipedia.org/wiki/Peking_duck",
      note: "Used to verify Peking duck serving style, history and cultural significance."
    },
    {
      id: "zhajiangmian",
      label: "Zhajiangmian background",
      url: "https://en.wikipedia.org/wiki/Zhajiangmian",
      note: "Used to verify sauce, toppings and everyday-food framing for Beijing zhajiangmian."
    },
    {
      id: "one-plus",
      label: "One+ Restaurant official website",
      url: "https://www.oneplusrestaurant.co.uk/",
      note: "Used to verify the multi-floor concept, address, hot pot, noodle/rice bar and seafood barbecue references."
    },
    {
      id: "happy-seasons",
      label: "Happy Seasons public report",
      url: "https://www.thesun.co.uk/sport/37289594/erling-haaland-dish-chinese-restaurant-happy-seasons/",
      note: "Used as a public reporting lead for the Haaland Special reference."
    },
    {
      id: "lily-kwok",
      label: "Lily Kwok / Sweet Mandarin background",
      url: "https://en.wikipedia.org/wiki/Lily_Kwok",
      note: "Used to frame Sweet Mandarin, Lily Kwok and family-recipe migration narratives."
    },
    {
      id: "image-chongqing-xiaomian",
      label: "Chongqing Xiaomian image reference",
      url: "https://zh.wikipedia.org/wiki/File:Chongqing_Xiaomian_with_fried_eggs.jpg",
      note: "Used for the Chongqing Xiaomian reference image; the article identifies it as Chongqing vegetarian xiaomian with fried egg."
    },
    {
      id: "image-sichuan-boiled-fish",
      label: "Sichuan boiled fish image reference",
      url: "https://zh.wikipedia.org/wiki/File:Shuizhuyu_at_Hamarkand_Silk_Road_Cuisine,_Beiqinglu_(20230121154615).jpg",
      note: "Used for the water-boiled fish reference image."
    },
    {
      id: "image-twice-cooked-pork",
      label: "Twice-cooked pork image reference",
      url: "https://zh.wikipedia.org/wiki/File:Huiguorou_made_from_Neijiang_local_pork_at_Daqian_Restaurant,_Beidadi_(20251011111845).jpg",
      note: "Used for the twice-cooked pork reference image."
    },
    {
      id: "image-dry-fried-beef-ho-fun",
      label: "Dry-fried beef ho fun image reference",
      url: "https://zh.wikipedia.org/wiki/File:Gon_caau_ngau_ho_(20150222171214).JPG",
      note: "Used for the dry-fried beef ho fun reference image."
    },
    {
      id: "image-yibin-ranmian",
      label: "Yibin ranmian image reference",
      url: "https://commons.wikimedia.org/wiki/File:Ranmian_at_Beijing_Yibin_Hostel_(20210401111937).jpg",
      note: "Used for the Yibin ranmian reference image. The photographer N509FZ released the image under CC BY-SA 4.0."
    }
  ],
  methodology: [
    {
      title: "Project Positioning",
      text: "The prototype is positioned as a Web GIS-based cultural mapping application rather than a restaurant recommendation website. Restaurants are treated as cultural points of interest that help explain regional Chinese food cultures in Manchester."
    },
    {
      title: "Reference Projects",
      text: "Diya Chutani's CommunityBites project informs the food-place POI framing, accessibility focus, map-based discovery and evaluation structure. Guo Cheng's Manchester Cultural Tour informs cultural classification, restaurant POI filtering and Web GIS architecture. Zhaolin Fang's historical mapping project informs the narrative information panel and map-linked exploration pattern."
    },
    {
      title: "12-Entry Regional Foodway Framework",
      text: "The China map is a research-led analytical sample, not an official or exhaustive twelve-cuisine division. It adapts regional types in Zhu et al. (2013): Chuan, Lu, Yue, Su-Zhe, Min, Xiang, Jing, Dongbei, Hong Kong, Xibei, Xinjiang and Yungui. Sichuan and Chongqing are presented together; Jiangsu and Zhejiang are merged because later research notes substantial continuity; Northwest and Yunnan-Guizhou are currently Shaanxi-led and Yunnan-led because those are the strongest documented entry points in this Manchester prototype."
    },
    {
      title: "Manchester Restaurant Evidence Layer",
      text: "The restaurant filter is a second analytical layer and does not redefine the twelve map entries. A Manchester restaurant receives one or more regional labels only when its menu, self-description, public evidence or fieldwork links it to those traditions. Labels may overlap because one restaurant can serve several regional foodways. Hotpot, malatang and noodles remain dish or dining formats, while family memory remains a narrative theme rather than a region."
    },
    {
      title: "Data Model",
      text: "The current prototype stores regional cuisine entries, restaurant POIs, signature dishes and sources as structured JavaScript data. Regions with confirmed Manchester restaurant points are linked to markers, while regions without stable POI data are explicitly marked as to be explored. In a later dissertation version, this can be exported to GeoJSON or CSV and connected to Leaflet, Mapbox GL JS, or a PostgreSQL/PostGIS backend."
    },
    {
      title: "User Flow",
      text: "The main interaction path is: select a Chinese regional foodway, view its cultural food traits, locate related Manchester restaurants, choose a restaurant, and then explore representative dishes through method, taste and cultural-story descriptions."
    },
    {
      title: "Evaluation Plan",
      text: "A suitable evaluation can combine functional testing, mobile usability checks, source verification, and a small user study asking whether non-Chinese users better understand that Chinese food is regionally diverse."
    }
  ]
};

// Maintained dish-level dietary profiles. These are deliberately explicit: the UI
// must not infer allergy, vegetarian or religious information from a dish's prose.
const FOOD_DISH_DIETARY_PROFILES = {
  "北京烤鸭": { tags: ["poultry", "gluten", "soy"] },
  "老北京炸酱面": { tags: ["pork", "gluten", "soy"] },
  "川渝麻婆豆腐": { tags: ["pork", "soy"] },
  "川渝担担面": { tags: ["pork", "gluten", "nuts", "soy"] },
  "歌乐山辣子鸡": { tags: ["poultry", "soy"] },
  "个人小火锅": {
    tags: ["gluten", "soy"],
    note: "Broth and chosen ingredients vary. Confirm the broth, dipping sauce and cross-contact before ordering."
  },
  "手工面与米饭碗": { tags: ["gluten", "soy"] },
  "海鲜烧烤拼盘": { tags: ["seafood", "gluten", "soy"] },
  "三拼烧味饭": { tags: ["pork", "poultry", "gluten", "soy"] },
  "Haaland Special": { tags: ["pork", "poultry", "gluten", "soy"] },
  "Lily Kwok's Chicken Curry": { tags: ["poultry"] },
  "家常点心拼盘": { tags: ["pork", "seafood", "gluten", "soy"] },
  "粤式点心拼盘": { tags: ["pork", "seafood", "gluten", "soy"] },
  "北京烤鸭卷饼": { tags: ["poultry", "gluten", "soy"] },
  "虾饺烧卖": { tags: ["pork", "seafood", "gluten", "soy"] },
  "烧鸭饭": { tags: ["poultry", "soy"] },
  "家常点心篮": { tags: ["pork", "seafood", "gluten", "soy"] },
  "广式脆面": { tags: ["gluten", "soy"] },
  "粤式烧鸭": { tags: ["poultry", "soy"] },
  "海鲜炒饭": { tags: ["seafood", "egg", "soy"] },
  "剁椒鱼": { tags: ["seafood", "soy"] },
  "小炒牛肉": { tags: ["beef", "soy"] },
  "担担面": { tags: ["pork", "gluten", "nuts", "soy"] },
  "重庆小面": { tags: ["pork", "gluten", "nuts", "soy"] },
  "水煮鱼": { tags: ["seafood", "soy", "alcohol"] },
  "干锅鸡": { tags: ["poultry", "soy"] },
  "回锅肉": { tags: ["pork", "soy"] },
  "麻辣香锅": {
    tags: ["soy"],
    note: "Ingredients are chosen by the diner. Confirm the selected items, sauce and shared cooking equipment."
  },
  "麻辣锅底": { tags: ["beef", "soy"] },
  "番茄清汤锅": {
    tags: ["soy"],
    note: "Broth recipe and chosen ingredients vary. Confirm stock, seasoning and cross-contact before ordering."
  },
  "椒盐豆腐": { tags: ["soy", "gluten", "vegetarian"] },
  "无麸质炒菜选择": {
    tags: [],
    note: "This is a menu category, not one fixed dish. Confirm the exact item and cross-contact with the restaurant."
  },
  "杨国福菌菇汤麻辣烫": {
    tags: ["gluten", "nuts", "soy"],
    note: "Ingredients and sauces are chosen by the diner. Confirm the selected items and shared cooking equipment."
  },
  "杨国福番茄汤麻辣烫": {
    tags: ["gluten", "nuts", "soy"],
    note: "Ingredients and sauces are chosen by the diner. Confirm the selected items and shared cooking equipment."
  },
  "现代点心": { tags: ["pork", "seafood", "gluten", "soy"] },
  "黑椒牛肉": { tags: ["beef", "soy"] },
  "牛肉汤面": { tags: ["beef", "gluten"] },
  "麻辣牛肉面": { tags: ["beef", "gluten", "soy"] },
  "宫保豆腐": { tags: ["gluten", "nuts", "soy", "vegetarian"] },
  "素炒面": { tags: ["gluten", "soy", "vegetarian"] }
};

// Structured verification metadata keeps discovery leads visibly separate from
// restaurant records that have a specific public address. Google Places remains
// disabled until a restricted API key and conservative quotas are configured.
const RESTAURANT_RECORD_METADATA = {
  "red-chilli": { verificationStatus: "partial", lastChecked: "2026-07-08" },
  "one-plus": { verificationStatus: "verified", lastChecked: "2026-07-08" },
  "happy-seasons": { verificationStatus: "partial", lastChecked: "2026-07-08" },
  "sweet-mandarin": { verificationStatus: "partial", lastChecked: "2026-07-08" },
  "yang-sing": { verificationStatus: "verified", lastChecked: "2026-07-08" },
  "mei-dim": { verificationStatus: "verified", lastChecked: "2026-07-08" },
  "little-yang-sing": { verificationStatus: "verified", lastChecked: "2026-07-08" },
  "wings": { verificationStatus: "verified", lastChecked: "2026-07-08" },
  "hunan-restaurant": { verificationStatus: "verified", lastChecked: "2026-07-08" },
  "noodle-alley": { verificationStatus: "verified", lastChecked: "2026-07-08" },
  "spicy-city": { verificationStatus: "partial", lastChecked: "2026-07-08" },
  "chuan-guoxiang": { verificationStatus: "partial", lastChecked: "2026-07-08" },
  "no8-hotpot": { verificationStatus: "verified", lastChecked: "2026-07-14" },
  "blue-eyed-panda": { verificationStatus: "verified", lastChecked: "2026-07-08" },
  "yang-guo-fu": { verificationStatus: "lead", lastChecked: "2026-07-08" },
  "lameizi": { verificationStatus: "verified", lastChecked: "2026-07-08" },
  "chuan-yun-xuan": { verificationStatus: "partial", lastChecked: "2026-07-08" },
  "hao-zai-lai": { verificationStatus: "lead", lastChecked: "2026-07-08" },
  "xiongqi": { verificationStatus: "verified", lastChecked: "2026-07-14" },
  "onlyyu": { verificationStatus: "verified", lastChecked: "2026-07-14" },
  "lao-di-fang": { verificationStatus: "lead", lastChecked: "2026-07-08" },
  "taiwu": { verificationStatus: "verified", lastChecked: "2026-07-14" },
  "chao-niu-yan": { verificationStatus: "partial", lastChecked: "2026-07-14" },
  "meishi-meike": { verificationStatus: "lead", lastChecked: "2026-07-08" },
  "tattu": { verificationStatus: "verified", lastChecked: "2026-07-08" },
  "mr-hong-beef-noodle": { verificationStatus: "verified", lastChecked: "2026-07-08" },
  "peace-garden": { verificationStatus: "verified", lastChecked: "2026-07-08" }
};

FOOD_MAP_DATA.reviewIntegration = {
  provider: "Google Places",
  mode: "link-only",
  enabled: false,
  note: "Automatic rating retrieval stays disabled until a restricted key, quota and data policy are configured."
};

FOOD_MAP_DATA.restaurants.forEach((restaurant) => {
  const metadata = RESTAURANT_RECORD_METADATA[restaurant.id] || {
    verificationStatus: "lead",
    lastChecked: null
  };
  Object.assign(restaurant, metadata, {
    googlePlaceId: null,
    googleRating: null,
    googleReviewCount: null,
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurant.name} ${restaurant.area} Manchester`)}`
  });
});
