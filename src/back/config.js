const config = {
    earth: {
        maxHealth: 10000,
        maxGES: 10000,
        healthDamage: 100
    },
    categories: [
        {
            type: 'Energie',
            factories: [
                {
                    type: 'Usine de charbon',
                    price: 10,
                    limit: 50,
                    healthDamages:100,
                    GESDamages: 100,

                    multiplier: 1,
                    passifGold: 1,
                },
                {
                    type: 'Usine de pétrole',
                    price: 20,
                    limit: 80,
                    healthDamages:100,
                    GESDamages: 90,
                    multiplier: 1,
                    passifGold: 3,
                },
                {
                    type: 'Usine à gaz',
                    price: 50,
                    limit: 80,
                    healthDamages:100,
                    GESDamages: 85,
                    multiplier: 1,
                    passifGold: 5,
                },
                {
                    type: 'Centrale nucléaire',
                    price: 150,
                    limit: 90,
                    healthDamages:100,
                    GESDamages: 10,
                    multiplier: 2,
                    passifGold: 20,
                },
                {
                    type: 'Energie Éolienne',
                    price: 180,
                    limit: 150,
                    healthDamages:100,
                    GESDamages: 5,
                    multiplier: 3,
                    passifGold: 30,
                },
                {
                    type: 'Energie Solaire',
                    price: 200,
                    limit: 150,
                    healthDamages:100,
                    GESDamages: 5,
                    multiplier: 3,
                    passifGold: 50,
                }
            ]
        },
        {
            type: 'Transports',
            factories: [
                {
                    type: 'Voiture',
                    price: 25,
                    limit: 30,
                    healthDamages:50,
                    GESDamages: 100,
                    multiplier: 1,
                    passifGold: 1,
                },
                {
                    type: 'Avion',
                    price: 40,
                    limit: 20,
                    healthDamages:50,
                    GESDamages: 90,
                    multiplier: 1,
                    passifGold: 3,
                },
                {
                    type: 'Bus',
                    price: 30,
                    limit: 80,
                    healthDamages:50,
                    GESDamages: 85,
                    multiplier: 2,
                    passifGold: 5,
                },
                {
                    type: 'Transport ferroviaire',
                    price: 150,
                    limit: 100,
                    healthDamages:50,
                    GESDamages: 10,
                    multiplier: 3,
                    passifGold: 20,
                },
                {
                    type: 'Vélo',
                    price: 80,
                    limit: 150,
                    healthDamages:50,
                    GESDamages: 5,
                    multiplier: 5,
                    passifGold: 50,
                }
            ]
        },
        {
            type: 'Citoyens',
            factories: [
                {
                    type: 'Acheter en friperie et/ou écoresponsables',
                    price: 5,
                    limit: 100,
                    healthDamages:20,
                    GESDamages: 10,
                    multiplier: 2,
                    passifGold: 3,
                },
                {
                    type: 'Alimentation à base de végétaux',
                    price: 40,
                    limit: 80,
                    healthDamages:20,
                    GESDamages: 40,
                    multiplier: 2,
                    passifGold: 3,
                },
                {
                    type: 'Acheter des vêtements fast-fashion',
                    price: 30,
                    limit: 80,
                    healthDamages:20,
                    GESDamages: 150,
                    multiplier: 1,
                    passifGold: 1,
                }
            ]
        }
    ],
    questions: [
        {
            intitule: "Pensez-vous que les technologies pourront vous sauver ?",
            reponse: "non"
        },
        {
            intitule: "Le nucléaire augmente les GES ?",
            reponse: "oui"
        },
        {
            intitule: "Pensez-vous que ce n'est pas à vous d'agir ?",
            reponse: "non"
        },
        {
            intitule: "Pensez-vous que les énergies renouvelables ne sont pas assez performantes ?",
            reponse: "non"
        },
        {
            intitule: "Avez-vous besoin d'acheter des vêtements si rapidement, et en avez-vous réellement besoin ?",
            reponse: "non"
        }
    ]
}

export default config