/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// import Thing from '../api/thing/thing.model';
import Campaign from '../api/campaign/campaign.model.js';
import User from '../api/user/user.model';

// Thing.find({}).remove()
//   .then(() => {
//     Thing.create({
//       name: 'Development Tools',
//       info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
//              'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
//              'Stylus, Sass, and Less.'
//     }, {
//       name: 'Server and Client integration',
//       info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
//              'AngularJS, and Node.'
//     }, {
//       name: 'Smart Build System',
//       info: 'Build system ignores `spec` files, allowing you to keep ' +
//              'tests alongside code. Automatic injection of scripts and ' +
//              'styles into your index.html'
//     }, {
//       name: 'Modular Structure',
//       info: 'Best practice client and server structures allow for more ' +
//              'code reusability and maximum scalability'
//     }, {
//       name: 'Optimized Build',
//       info: 'Build process packs up your templates as a single JavaScript ' +
//              'payload, minifies your scripts/css/images, and rewrites asset ' +
//              'names for caching.'
//     }, {
//       name: 'Deployment Ready',
//       info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
//              'and openshift subgenerators'
//     });
//   });

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
                hero: 'Diana Pasil'
            },
            rebelion: [{
                player: 'test',
                hero: 'Fenn Signis'
            }, {
                player: 'test3',
                hero: 'Gideon'
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
                hero: 'Mashk`a rey'
            },
            rebelion: [{
                player: 'test',
                hero: 'Fenn Signis'
            }, {
                player: 'test2',
                hero: 'Wookie'
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
