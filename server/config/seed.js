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
                hero: 'Diala Passil'
            },
            rebelion: [{
                player: 'test',
                hero: 'Fenn Signis'
            }, {
                player: 'test3',
                hero: 'Gideon Argus'
            }],
            missions: [{
                name: 'Mission 3'
            }, {
                name: 'Mission 4'
            }]
        }, {
            name: 'Campaign 2',
            owner: 'test',
            active: true,
            startDate: 1466101915866,
            endDate: -1,
            empire: {
                player: 'admin',
                hero: 'Mak Eshka\'rey'
            },
            rebelion: [{
                player: 'test',
                hero: 'Fenn Signis'
            }, {
                player: 'test2',
                hero: 'Gaarkhan'
            }],
            missions: [{
                name: 'Mission 1'
            }, {
                name: 'Mission 2'
            }]
        })
        .then(() => {
            console.log('---finished populating campaigns---');
        });
    });
