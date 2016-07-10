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
                player: 'admin',
                login: 'admin@example.com',
                classSet: 'Technological Superiority',
                agendaSets: ['For the Right Price', 'Agents of the Empire']
            },
            rebelion: [{
                player: 'test',
                login: 'test@example.com',
                hero: 'Fenn Signis'
            }, {
                player: 'test3',
                login: 'test3@example.com',
                hero: 'Gideon Argus'
            }, {
                player: 'test4',
                login: 'test4@example.com',
                hero: 'Diana Passil'
            }, {
                player: 'test5',
                login: 'test5@example.com',
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
                }
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
                }
            }]
        }, {
            name: 'Campaign 2',
            owner: 'admin@example.com',
            active: true,
            startDate: 1466101915866,
            endDate: -1,
            empire: {
                player: 'test2',
                login: 'test2@example.com',
                classSet: 'Subversive Tactics',
                agendaSets: ['For the Right Price', 'Agents of the Empire']
            },
            rebelion: [{
                player: 'test',
                login: 'test@example.com',
                hero: 'Fenn Signis'
            }, {
                player: 'test2',
                hero: 'Gaarkhan'
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
