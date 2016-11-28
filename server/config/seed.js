/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Campaign from '../api/campaign/campaign.model.js';
import User from '../api/user/user.model';

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('---finished populating users---');
    });
  });

Campaign.find({}).remove()
    .then(() => {
        Campaign.create({
            name: 'Campaign 1',
            owner: 'test@example.com',
            active: true,
            startDate: 1466101831972,
            endDate: -1,
            empire: {
                player: {
                    name: 'admin',
                    email: 'admin@example.com'
                },
                classSet: 'Technological Superiority',
                agendaSets: ['For the Right Price', 'Agents of the Empire', 'Lord Vader\'s Command', 'Retaliation', 'Imperial Discipline', 'The General\'s Scheme']
            },
            rebelion: [{
                player: {
                    name: 'test',
                    email: 'test@example.com'
                },
                hero: 'Fenn Signis'
            }, {
                player: {
                    name: 'test3',
                    email: 'test3@example.com'
                },
                hero: 'Gideon Argus'
            }, {
                player: {
                    name: 'test4',
                    email: 'test4@example.com'
                },
                hero: 'Diana Passil'
            }, {
                player: {
                    name: 'test5'
                },
                hero: 'Biv Bodrik'
            }],
            missions: [{
                title: 'Homecoming',
                _id: 'HOMECOMING',
                rebelion: {
                    itemsPossessed: ["DH-17"]
                },
                empire: {
                    classCards: ["Technical Support"]
                },
                winner: 'rebelion'
            }, {
                title: 'Armed and Operation',
                _id: 'ARMED_OPERATION',
                rebelion: {
                    itemsPossessed: ["DH-17"],
                    itemsSold: ['DL-44'],
                    players: [{
                        player: 'test',
                        hero: 'Fenn Signis',
                        heroClassCards: {
                            possessed: ['Take Cover'],
                            sold: ['Infantry Rifle']
                        },
                        exp: 1
                    }, {
                        player: 'test3',
                        hero: 'Gideon Argus',
                        heroClassCards: {
                            possessed: ['Mobile Tactician'],
                            sold: ['Holdout Blaster']
                        },
                        exp: 1
                    }]
                },
                empire: {
                    classCards: ["Technical Support","Jetpacks"]
                },
                winner: 'empire'
            }]
        }, {
            name: 'Campaign 2',
            owner: 'admin@example.com',
            active: true,
            startDate: 1466101915866,
            endDate: -1,
            empire: {
                player: {
                    name: 'test2',
                    email: 'test2@example.com'
                },
                classSet: 'Subversive Tactics',
                agendaSets: ['For the Right Price', 'Agents of the Empire', 'Agenda test']
            },
            rebelion: [{
                player: {
                    name: 'test',
                    email: 'test@example.com'
                },
                hero: 'Fenn Signis'
            }, {
                player: {
                    name: 'test2'
                },
                hero: 'Gaarkhan'
            }, {
                player: {
                    name: 'admin',
                    email: 'admin@example.com'
                },
                hero: 'Diana Passil'
            }],
            missions: [{
                "additionalRewards" : {
                    "exp" : 1,
                    "credits" : 100,
                    "influence" : 1,
                    "other" : "100¢ OR 1 inf."
                },
                "rebelVictoryBonus" : {
                    "credits" : 0,
                    "exp" : 1,
                    "other" : ""
                },
                "empireVictoryBonus" : {
                    "influence" : 0,
                    "exp" : 1,
                    "other" : ""
                },
                "_id" : "NEW_THREAT",
                "playDate" : "2016-11-27T23:00:00.000Z",
                "winner" : "empire",
                "nextStoryMission" : "Imperial Hospitality",
                "availableSideMissions" : [
                    "Target of Opportunity",
                    "Sorry About the Mess"
                ],
                "rebelion" : {
                    "itemsPossessed" : [
                        "DH-17"
                    ],
                    "itemsSold" : [
                        "DL-44"
                    ],
                    "players" : [
                        {
                            "exp" : 1,
                            "heroClassCards" : {
                                "sold" : [
                                    "Infantry Rifle"
                                ],
                                "possessed" : [
                                    "Take Cover"
                                ]
                            },
                            "hero" : "Fenn Signis",
                            "player" : "test"
                        },
                        {
                            "exp" : 1,
                            "heroClassCards" : {
                                "sold" : [
                                    "Holdout Blaster"
                                ],
                                "possessed" : [
                                    "Mobile Tactician"
                                ]
                            },
                            "hero" : "Gideon Argus",
                            "player" : "test3"
                        }
                    ],
                    "allies" : "Han Solo",
                    "expInMission" : 1,
                    "credits" : 400,
                    "creditsInMission" : 200
                },
                "empire" : {
                    "allies" : [
                        "Lord Vader"
                    ],
                    "agendaCards" : [
                        "Imperial Informants"
                    ],
                    "classCards" : [
                        "Technical Support",
                        "Jetpacks"
                    ],
                    "exp" : 3,
                    "expInMission" : 2,
                    "influenceInMission" : 1,
                    "influence" : 4
                },
                "campaign_id" : "583c3aaf6829e1d41c04c7e1",
                "missionType" : "Story1",
                "deckType" : "hero",
                "title" : "A New Threat"
            }, {
                title: 'Armed and Operation',
                _id: 'ARMED_OPERATION'
            }]
        }, {
            "name" : "test campaign",
            "owner" : "test@example.com",
            "active" : true,
            "missions" : [{
                "additionalRewards" : {
                    "exp" : 1,
                    "credits" : 100,
                    "influence" : 1,
                    "other" : ""
                },
                "rebelVictoryBonus" : {
                    "credits" : 100,
                    "exp" : 0,
                    "other" : ""
                },
                "empireVictoryBonus" : {
                    "influence" : 1,
                    "exp" : 0,
                    "other" : ""
                },
                "_id" : "AFTERMATH",
                "playDate" : "2016-11-27T23:00:00.000Z",
                "winner" : "empire",
                "nextStoryMission" : "Imperial Hospitality",
                "availableSideMissions" : [
                    "Brace for Impact",
                    "Sorry About the Mess"
                ],
                "rebelion" : {
                    "itemsPossessed" : [],
                    "itemsSold" : [],
                    "players" : [
                        {
                            "exp" : 1,
                            "heroClassCards" : {
                                "sold" : [],
                                "possessed" : [
                                    "Vibro-Ax"
                                ]
                            },
                            "player" : {
                                "name" : "Pyza 1",
                                "login": "admin@example.com"
                            },
                            "hero" : "Gaarkhan"
                        },
                        {
                            "exp" : 1,
                            "heroClassCards" : {
                                "sold" : [],
                                "possessed" : [
                                    "Infantry Rifle"
                                ]
                            },
                            "player" : {
                                "name" : "Pyza 2"
                            },
                            "hero" : "Fenn Signis"
                        },
                        {
                            "exp" : 1,
                            "heroClassCards" : {
                                "sold" : [],
                                "possessed" : [
                                    "Plasteel Staff"
                                ]
                            },
                            "player" : {
                                "name" : "Pyza 3"
                            },
                            "hero" : "Diala Passil"
                        }
                    ],
                    "allies" : [],
                    "expInMission" : 1,
                    "credits" : 300,
                    "creditsInMission" : 300
                },
                "empire" : {
                    "agendaCards" : [
                        "Dark Obsession",
                        "A Dark Power",
                        "As You Wish"
                    ],
                    "allies" : [
                        "Darth Vader"
                    ],
                    "classCards" : [
                        "Field Officer"
                    ],
                    "exp" : 1,
                    "expInMission" : 1,
                    "influenceInMission" : 2,
                    "influence" : 2
                },
                "campaign_id" : "583c87676f8934041138e433",
                "missionType" : "Introduction",
                "deckType" : "hero",
                "title" : "Aftermath"
            }
        ],
            "rebelion" : [
                {
                    "hero" : "Gaarkhan",
                    "player" : {
                        "name" : "Pyza 1",
                        "login" : "admin@example.com"
                    }
                },
                {
                    "hero" : "Fenn Signis",
                    "player" : {
                        "name" : "Pyza 2"
                    }
                },
                {
                    "hero" : "Diala Passil",
                    "player" : {
                        "name" : "Pyza 3"
                    }
                }
            ],
            "empire" : {
                "classSet" : "Inspiring Leadership",
                "agendaSets" : [
                    "Lord Vader's Command",
                    "Imperial Industry",
                    "Retaliation",
                    "For the Right Price",
                    "Agents of the Empire",
                    "Imperial Discipline"
                ],
                "player" : {
                    "name" : "PJ"
                }
            },
            "startDate" : 1480361799051
        })
        .then(() => {
            console.log('---finished populating campaigns---');
        });
    });
