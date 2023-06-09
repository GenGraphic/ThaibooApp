import React, { useState, createContext } from "react";

const SpeisekarteContext = createContext();

export function SpeisekarteProvider({ children }) {
    const [speisekarte] = useState([
        {
            category: 'VORSPEISEN',
            items: [
                {
                    index: 0,
                    name: '1. PO PIA THOD',
                    description: '3 knusprige Frühlingsrollen, gefüllt mit frischem Gemüse und Glasnudeln, serviert mit süß-saurem Thai-Dip (2,4,a,c,f,g,k,o)',
                    price: [
                        {Vegetarisch : '3.60€',
                        icon: require('./images/icons/plant-based.png')
                        },
                        {RindFleish : '4.90€',
                        icon: require('./images/icons/cow-silhouette.png')
                        }
                    ]
                },
                {
                    index: 1,
                    name: '2. GAI STAY 3 Stück',
                    description:'Hähnchenbrustfilet gewürz mit Curry und serviert mit Erdnusssoßen',
                    price: [{Normal: '5.90€'}],
                },
                {
                    index: 2,
                    name: '3. GIAOW THOD 6 Stück',
                    description: 'gebratene wan tan teig',
                    price: [{Normal: '4.90€'}],
                },
                {
                    index: 3,
                    name: '4. PLA MÜG THOD 6 Stück',
                    description: 'Frittierte Tintenfisch',
                    price: [{Normal: '4.90€'}],
                    image: require('./images/speisekarte/pla_mug-thod.png')
                },
                {
                    index: 4,
                    name: '5. GUNG THOD 6 Stück',
                    description: 'Frittierte Garnellen',
                    price: [{Normal: '5.90€'}],
                },
                {
                    index: 5,
                    name: '6. THAIBOO CHICKEN WING',
                    description: 'Frittieren Chicken-Wing serviert mit Süßsauer Sauce',
                    price: [{Normal: '4.90€'}],
                },
                {
                    index: 6,
                    name: '7. TOD RUAM',
                    description: '2 knusprige Frühlingsrollen/2 Giaw Thod /2 knusprige Garnelen 2 knusprig frittierte Tintenfischringe (2,4,a,c,f,g,k,o)',
                    price: [{Normal: '6.90€'}],
                }
            ]
        },
        {
            category: 'SUPPEN',
            items: [
                {
                    index: 7,
                    name: '8. TOOM KHA',
                    description: 'Die aromatische Thai-Suppe mit Pilzen, Zitronengras, Koriander, Karotten und Galgant Kokosmilch (4,a,d,g,f)',
                    price: [{Normal: ''}],
                },
                {
                    index: 8,
                    name: '9. TOM YUM',
                    description: 'Die klassische sauer-scharfe Thai Suppe mit Pilzen, Zwiebeln, Zitronengras und Galgant Kokosnussmilch (4,a,d,g,f)',
                    price: [{Normal: ''}],
                },
                {
                    index: 9,
                    name: '10 WAN-TAN SUPPE',
                    description: 'Würzige Thai-Suppe mit 4 Wan-Tan mit Hähnchen und Gemüse (4,a,d,g,f)',
                    price: [{Normal: '4.90€'}],
                }
            ],
            pricesTable: [
                {Vegetarisch: '4.50€',
                icon: require('./images/icons/plant-based.png')
                },
                {Tofu: '4.50€',
                icon: require('./images/icons/tofu.png')
                },
                {Hähnchen: '4.50€',
                icon: require('./images/icons/chicken.png')
                },
                {Garnelen: '5.90€',
                icon: require('./images/icons/shrimp.png')
                }
            ]
        },
        {
            category: 'HAUPTGERICHTE MIT THAI-CURRYSAUCE',
            items: [
                {
                    index: 10,
                    name: '11. GAENG PED (ROT)',
                    description: 'Cremiges rotes Thai Curry mit Kokosmilch. Gemüse und Reis (a,b,c,d,e,f,i)',
                    price: [{Normal: ''}],
                },
                {
                    index: 11,
                    name: '12. GAENG GRA RIE (GELB)',
                    description: 'Cremiges gelbes Thai Curry mit Kokosmilch, Gemüse und Reis (a,b,c,d,e,f,i)',
                    price: [{Normal: ''}],
                },
                {
                    index: 12,
                    name: '13. GAENG KIOW WAN (Grün)',
                    description: 'Cremiges grünes Thai Curry mit Kokosmilch, Gemüse und Reis (a,b,c,d,e,f,i)',
                    price: [{Normal: ''}],
                    image: require('./images/speisekarte/gaeng_kiow.webp')
                },
                {
                    index: 13,
                    name: '14. MASSAMAN',
                    description: 'Das etwas andere Thai-Curry mit Kokosmilch, Karotten, Zwiebeln Mild im Geschmack Erdnüsse (a,c,d,e, f, g, h,f)',
                    price: [{Normal: ''}],
                }
            ],
            pricesTable: [
                {Vegetarisch: '8.50€',},
                {Tofu: '9.50€',},
                {Hähnchen: '9.50€'},
                {Fisch: '14.50€'},
                {RindFleish: '9.90€'},
                {Garnelen: '11.50€'},
                {Ente: '12.50€'}
            ]
        },
        {
            category: 'NUDELGERICHTE MIT SOJASAUCE',
            items: [
                {
                    index: 14,
                    name: '15. PAD MIE LUANG - Eiernudeln',
                    description: 'Gebratene Eiernudeln mit Gemüse in Sojasauce (2,4,a,c,f,g,o)',
                    price: [{Normal: ''}],
                },
                {
                    index: 15,
                    name: '16. PAD WUN SEN - Glasnudeln',
                    description: 'Gebratene Glasnudeln mit Gemüse und Eiern in Sojasauce (2,4,a,c,f,g,o)',
                    price: [{Normal: ''}],
                },
                {
                    index: 16,   
                    name: '17. PAD THAI - Reisnudeln',
                    description: 'Gebratene Reisnudel in Tamarindsauce mit Eier und verschiedene Gemüse (2,a,c,d,e,f,g)',
                    price: [{Normal: ''}],
                    image: require('./images/speisekarte/pad-thai.webp')
                },
                {
                    index: 17,
                    name: '18. PAD SIE IEW',
                    description: 'Gebratene Reisnudel in Sojasauce mit Eier und verschiedene Gemüse. (a,b,c,d,e,f,i)',
                    price: [{Normal: ''}],
                },
                {
                    index: 18,
                    name: '19. BA MIE GAENG',
                    description: 'Eiernudeln in pikanter roter Currysauce mit Kokosmilch und Gemüse (a,b,c,d,e,f, g, h,f)',
                    price: [{Normal: ''}],
                },
                {
                    index: 19,
                    name: '20. NUDEL THAIBOO',
                    description: 'Penne mit Hähnchen und verschiedene Gemüse',
                    price: [{Normal: ''}],
                },
                {
                    index: 20,
                    name: '21. KUAY TIAW NUA',
                    description: 'Thaländische Riesnudel Hausgemacht Suppe mit sojasprossen, und Rindfleisch',
                    price: [{Normal: '12.00€'}],
                }
            ],
            pricesTable: [
                {Vegetarisch: '8.50€'},
                {Tofu: '9.50€'},
                {Hähnchen: '9.50€'},
                {RindFleish: '9.90€'},
                {Garnelen: '11.50€'},
                {Ente: '12.50€'}
            ]
        },
        {
            category: 'REISGERICHTE MIT SOJASAUCE',
            items: [
                {
                    index: 21,
                    name: '22. PAD PRIK GAENG - Scharf',
                    description: 'Pikante rote Currysauce und Limettenblätter Scharf im Geschmack (2,4,a,c,d,f,o)',
                    price: [{Normal: ''}],
                },
                {
                    index: 22,
                    name: '23. PAD KING',
                    description: 'Gebratener Ingwer, Gemüse und Mu Err Pilze (2,4,a,c,d,f,o)',
                    price: [{Normal: ''}],
                },
                {
                    index: 23,
                    name: '24. PAD PRIEW WAN',
                    description: 'Gemüse und schmackhafte süß-saure Sauce (2,4,a.c,d,f,o)',
                    price: [{Normal: ''}],
                },
                {
                    index: 233,
                    name: '25. PAD MED MAMUANG PRIK PAO',
                    description: 'Gebraten mit Cashewnüsse und Gemüse (2,4,a,c,d,f,o)',
                    price: [{Normal: ''}],
                },
                {
                    index: 24,
                    name: '26. PAD GRA PAO',
                    description: 'Gebraten mit Bambus, Chili, Zwiebeln und scharfem Thai-Basilikum (2,4,a,c,d,f,o)',
                    extra: 'mit Spiegelei + 1,50€',
                    price: [{Normal: ''}],
                },
                {
                    index: 25,
                    name: '27. PAD PAK RUAM MID',
                    description: 'Verschiedenes Gemüse gebraten mit Austernsauce und Sojasauce (2,4.a,c,d,f,o)',
                    price: [{Normal: ''}],
                },
                {
                    index: 26,
                    name: '28. NUA PAD NAM MAN HOY',
                    description: 'Rindfleisch mit Champignons, Gemüse und Austernsauce (2,4,a,c,d,f,o)',
                    price: [{Normal: '9.90€'}],
                },
                {
                    index: 27,
                    name: '29. THAIBOO PAD PRIK CURRY',
                    description: 'Rindfleisch Hähnchen und Garnelen Gebraten mit Rot Curry und Gemüse. - Scharf (2,4,a,c,d,f,o)',
                    price: [{Normal: '12.90€'}],
                },
                {
                    index: 28,
                    name: '30. LACHS TERIYAKI',
                    description: 'Reis mit Lachswürfel, Verschiedene Gemüse in Teriyaki sauce',
                    price: [{Normal: '13.00€'}],
                }
            ],
            pricesTable: [
                {Vegetarisch: '8.50€'},
                {Tofu: '9.50€'},
                {Hähnchen: '9.50€'},
                {RindFleish:' 9.90€'},
                {Garnelen: '11.50€'},
                {Ente: '12.50€'}
            ]
        },
        {
            category: 'GEBRATENER REIS',
            items: [
                {
                    index: 29,
                    name: '31. KHAO PAD', 
                    description: 'Gebratener Reis mit Ei und Gemüse (2,4,a,c,f,g,o)',
                    price: [
                        {Vegetarisch: '8.50€',
                        icon: require('./images/icons/plant-based.png')
                        },
                        {Tofu: '9.50€',
                        icon: require('./images/icons/tofu.png')
                        },
                        {Hähnchen: '9.50€',
                        icon: require('./images/icons/chicken.png')
                        },
                        {RindFleish: '9.90€',
                        icon: require('./images/icons/cow-silhouette.png')
                        },
                        {Ente: '12.50€',
                        icon: require('./images/icons/duck.png')
                        }
                    ]
                },
                {
                    index: 30,
                    name: '32. KHAO PAD ASIA',
                    description: 'Gebratener Reis mit Ei, Garnelen, Hähnchen und Gemüse',
                    price: [{Normal: '12.50€'}],
                }
            ]
        },
        {
            category: 'SALATE',
            items: [
                {
                    index: 31,
                    name: '33. YAM WUN SEN (Glasnudelsalat)',
                    description: 'Leckerer Glasnudelsalat mit ordentlich Chili, Lauch, Tomaten und Zwiebeln (2,a,d,i,k)',
                    price: [
                        {Vegetarisch: '7.90€',
                        icon: require('./images/icons/plant-based.png')
                        },
                        {Tofu: '8.50€',
                        icon: require('./images/icons/tofu.png')
                        },
                        {Hähnchen: '9.50€',
                        icon: require('./images/icons/chicken.png')
                        },
                        {Garnelen: '11.50€',
                        icon: require('./images/icons/shrimp.png')
                        },
                    ]
                },
                {
                    index: 32,
                    name: '34. THAIBOO SALAT',
                    description: '(Hausgemacht Salat Sauce)',
                    price: [{Normal: '11.50€'}],
                },
                {
                    index: 33,
                    name: '35. YUM NUA',
                    description: 'Rindflseisch salat mit verschiedene Gemüse hausgemachte sauce',
                    price: [{Normal: '12.00€'}],
                    image: require('./images/speisekarte/yam_nua.webp')
                }
            ],
            extra: [
                {
                    name: 'Gemüse',
                    price: '2.50€'
                },
                {
                    name: 'Rindfleisch',
                    price: '3.50€',
                },
                {
                    name: 'Curry Soßa',
                    price: '3.00€'
                },
                {
                    name: 'Tofu',
                    price: '2.50€'
                },
                {
                    name: 'Garnelen',
                    price: '3.50€'
                },
                {
                    name: 'Nüsse Cashewnüsse',
                    price: '3.00€'
                },
                {
                    name: 'Reis/Nudeln',
                    price: '3.00€'
                },
                {
                    name: 'Hähnchen',
                    price: '3.00€'
                },
                {
                    name: 'Ente',
                    price: '4.50€'
                }
            ]
        },
        {
            category: 'NACHTISCH',
            items: [
                {
                    index: 34,
                    name: '36. 2 Kugel Eis nach Wahl',
                    description: 'Vanille/Schokolade/Erdbeeren',
                    price: [{Normal: '4.90€'}],
                    extra: {
                        name: 'mit Sahne',
                        price: '+ 0.50€'
                    }
                },
                {
                    index: 35,
                    name: '37. Apfeltasche mit Vanilleeis',
                    description: '',
                    price: [{Normal: '5.90€'}],
                    image: require('./images/speisekarte/banana-split.webp')
                },
                {
                    index: 36,
                    name: '38. Knusprig frittierte Bananen im Teigmantel mit Vanilleeis',
                    description: 'mit Vanilleeis',
                    price: [{Normal: '5.90€'}],
                }
            ]
        }
    ]);

    return (
        <SpeisekarteContext.Provider value={{speisekarte}}>{children}</SpeisekarteContext.Provider>
    )
}

export default SpeisekarteContext;