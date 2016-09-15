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
                title: 'Homecoming',
                _id: 'HOMECOMING'
            }, {
                title: 'Armed and Operation',
                _id: 'ARMED_OPERATION'
            }]
        })
        .then(() => {
            console.log('---finished populating campaigns---');
        });
    });
