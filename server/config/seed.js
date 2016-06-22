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
            owner: 'test',
            active: true,
            startDate: 1466101831972,
            endDate: -1,
            empire: {
                player: 'admin',
                login: 'admin',
                classSet: 'Technological Superiority',
                agendaSets: ['For the Right Price', 'Agents of the Empire']
            },
            rebelion: [{
                player: 'test',
                hero: 'Fenn Signis'
            }, {
                player: 'test3',
                hero: 'Gideon Argus'
            }],
            missions: [{
                title: 'Homecoming',
                _id: 'HOMECOMING'
            }, {
                title: 'Armed and Operation',
                _id: 'ARMED_OPERATION'
            }]
        }, {
            name: 'Campaign 2',
            owner: 'test',
            active: true,
            startDate: 1466101915866,
            endDate: -1,
            empire: {
                player: 'test',
                login: 'test',
                classSet: 'Subversive Tactics',
                agendaSets: ['For the Right Price', 'Agents of the Empire']
            },
            rebelion: [{
                player: 'test',
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
