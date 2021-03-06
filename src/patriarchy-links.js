export const graph = { 
    "nodes": [ 
        {"id": "the patriarchy"}, 
    {"id": "the upper class"}, 
    {"id": "the landed gentry"}, 
    {"id": "the academy"}, 
    {"id": "the institution"}, 
    {"id": "the medical academy"}, 
    {"id": "white supremacy"}, 
    {"id": "warfare and competition"}, 
    {"id": "tit-for-tat"}, 
    {"id": "western hegemony"}, 
    {"id": "environmental exploitation"}, 
    {"id": "development/industrialization"}, 
    {"id": "resource extraction"}, 
    {"id": "resource depletion"}, 
    {"id": "exploitation/inequality"}, 
    {"id": "violence"}, 
    {"id": "divisions among people"}, 
    {"id": "othering"}, 
    {"id": "nationalism"}, 
    {"id": "differential access to resources"}, 
    {"id": "race"}, 
    {"id": "gender"}, 
    {"id": "class"}, 
    {"id": "monotheistic religion"}, 
    {"id": "one male father god"}, 
    {"id": "deifies masculinity, singular rulership (authoritarianism), heteronormative heirarchical family structure (father in rule of children and wife)"}, 
    {"id": "ownership, divisions, property, class"}, 
    {"id": "control of women's sexuality, focus on purity"}, 
    {"id": "developed in and utilized by governments with similar (dominant over subservient) ethoses"}, 
    {"id": "certain paternity is important for inheretance of land and resources"}, 
    {"id": "limiting female freedom of expression, speech, ownership"},
    {"id": "gives order to the universe by assigning philosophical 'right' of dominant social group to rule over another 'naturally subservient' group"}, 
    {"id": "use violence, fear, destruction to control subjects"}, 
    {"id": "disenfranchisement of women"}, 
    {"id": "relegation to the 'private' sphere and exclusion from the 'public' sphere"},
    {"id": "wage gap"}, 
    {"id": "rape culture (e.g. everything unearthed in the #meToo moment)"}, 
    {"id": "women prevented from equal education, property rights, platforms for speech, voting rights, right to work"}, 
    {"id": "explicit -- laws which forbid"},
    {"id": "implicit -- biases that exclude"}, 
    {"id": "systematic exclution from societal positions of power and influence"}, 
    {"id": "disproportionate house work"}, 
    {"id": "normal functioning/lingua franca of society includes inherent denigration of women"},
    {"id":"gynecological experiements on women"}, 
    {"id":"labeling women crazy and locking them up", "group":"sylvia"}, 
    {"id":"restrictive 'boy's club'"}
    // //  // {"id":"what killed sylvia "},
    // {"id":""},
    // {"id":""},
    // {"id":""},
    // {"id":""},
    // {"id":""},
    // {"id":""},
    // {"id":""},
    // {"id":""},
    // {"id":""},
    // {"id":""},
    // {"id":""},
    // {"id":""},
    // {"id":""},
    // {"id":""},

    ], 
    "links": [
        {"source":"warfare and competition", "target": "tit-for-tat", "value": 1},
    {"source":"warfare and competition", "target": "violence", "value": 1},
    {"source":"warfare and competition", "target": "resource extraction", "value": 1},
    {"source":"resource extraction", "target": "the landed gentry", "value": 1},
    {"source":"the institution", "target": "nationalism", "value": 1},
    {"source":"the institution", "target": "the medical academy", "value": 1},
    {"source":"the institution", "target": "the academy", "value": 1},
    {"source":"the academy", "target": "the medical academy", "value": 1},
    {"source":"the institution", "target": "the patriarchy", "value": 1},
    {"source":"western hegemony", "target": "resource extraction", "value": 1},
    {"source":"resource extraction", "target": "resource depletion", "value": 1},
    {"source":"resource depletion", "target": "exploitation/inequality", "value": 1},
    {"source":"divisions among people", "target": "exploitation/inequality", "value": 1},
    {"source":"resource extraction", "target": "differential access to resources", "value": 1},
    {"source":"divisions among people", "target": "differential access to resources", "value": 1},
    {"source":"divisions among people", "target": "race", "value": 1},
    {"source":"divisions among people", "target": "othering", "value": 1},
    {"source":"class", "target": "othering", "value": 1},
    {"source":"divisions among people", "target": "class", "value": 1},
    {"source":"divisions among people", "target": "gender", "value": 1},
    {"source":"gender", "target": "othering", "value": 1},
    {"source":"monotheistic religion", "target": "one male father god", "value": 1},
    {"source":"the patriarchy", "target": "monotheistic religion", "value": 1},
    {"source":"monotheistic religion", "target": "deifies masculinity, singular rulership (authoritarianism), heteronormative heirarchical family structure (father in rule of children and wife)", "value": 1},
    {"source":"monotheistic religion", "target": "control of women's sexuality, focus on purity", "value": 1},
    {"source":"the patriarchy", "target": "control of women's sexuality, focus on purity", "value": 1},
    {"source":"control of women's sexuality, focus on purity", "target": "limiting female freedom of expression, speech, ownership", "value": 1},
    {"source":"control of women's sexuality, focus on purity", "target": "certain paternity is important for inheretance of land and resources", "value": 1},
    {"source":"monotheistic religion", "target": "developed in and utilized by governments with similar (dominant over subservient) ethoses", "value": 1},
    {"source":"monotheistic religion", "target": "use violence, fear, destruction to control subjects", "value": 1},
    {"source":"warfare and competition", "target": "use violence, fear, destruction to control subjects", "value": 1},
    {"source":"western hegemony", "target": "use violence, fear, destruction to control subjects", "value": 1},
    {"source":"white supremacy", "target": "developed in and utilized by governments with similar (dominant over subservient) ethoses", "value": 1},
    {"source":"white supremacy", "target": "gives order to the universe by assigning philosophical 'right' of dominant social group to rule over another 'naturally subservient' group", "value": 1},
    {"source":"the patriarchy", "target": "disenfranchisement of women", "value": 1},
    {"source":"white supremacy", "target": "control of women's sexuality, focus on purity", "value": 1},
    {"source":"disenfranchisement of women", "target": "relegation to the 'private' sphere and exclusion from the 'public' sphere", "value": 1},
    {"source":"disenfranchisement of women", "target": "wage gap", "value": 1},
    {"source":"disenfranchisement of women", "target": "rape culture (e.g. everything unearthed in the #meToo moment)", "value": 1},
    {"source":"disenfranchisement of women", "target": "women prevented from equal education, property rights, platforms for speech, voting rights, right to work", "value": 1},
    {"source":"disenfranchisement of women", "target": "explicit -- laws which forbid", "value": 1},
    {"source":"disenfranchisement of women", "target": "implicit -- biases that exclude", "value": 1},
    {"source":"explicit -- laws which forbid", "target": "systematic exclution from societal positions of power and influence", "value": 1},
    {"source":"implicit -- biases that exclude", "target": "disproportionate house work", "value": 1},
    {"source":"implicit -- biases that exclude", "target": "normal functioning/lingua franca of society includes inherent denigration of women", "value": 1},
    {"source": "the medical academy", "target":"gynecological experiements on women"},
    {"source":"the medical academy", "target":"labeling women crazy and locking them up"}, 
    {"source":"the medical academy", "target":"restrictive 'boy's club'"},
    {"source": "gynecological experiements on women", "target":"violence"}, 
    {"source":"environmental exploitation", "target":"the landed gentry" }, 
    {"source":"environmental exploitation", "target":"resource extraction" }, 
    {"source":"environmental exploitation", "target":"development/industrialization"}, 
    {"source":"resource depletion", "target":"development/industrialization"}, 
    {"source": "ownership, divisions, property, class", "target":"the patriarchy"}, 
    {"source": "ownership, divisions, property, class", "target":"disenfranchisement of women"},
    {"source": "ownership, divisions, property, class", "target":"explicit -- laws which forbid"},
    {"source": "ownership, divisions, property, class", "target":"divisions among people"},
    {"source": "ownership, divisions, property, class", "target":"exploitation/inequality"},
    {"source": "ownership, divisions, property, class", "target":"western hegemony"},
    {"source": "ownership, divisions, property, class", "target":"nationalism"},
    {"source": "ownership, divisions, property, class", "target":"the upper class"},
    {"source": "ownership, divisions, property, class", "target":"differential access to resources"},



    ]
}
