const config = {
    earth: {
        maxHealth: 10000,
        maxGES: 10000,
        healthDamage: 1
    },
    categories: [
        {
            type: 'energie',
            factories: [
                {
                    type: 'charbon',
                    price: 11111,
                    limit:11111,
                    healthDamages:11111,
                    GESDamages: 11111,
                    multiplier: 1,
                    passifGold: 111,
                }
            ]
        }
    ],
    questions: [
        {
            intitule: "blablabla0",
            reponse: "oui"
        },
        {
            intitule: "blablabla1",
            reponse: "non"
        },
        {
            intitule: "blablabla2",
            reponse: "oui"
        },
        {
            intitule: "blablabla3",
            reponse: "non"
        }
    ]
    
}

export default config