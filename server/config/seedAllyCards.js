/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';
import AllyCard from '../api/ally-card/ally-card.model.js';

AllyCard.find({}).remove()
.then(() => {
    AllyCard.create({
        name: 'Rebel Saboteurs',
        fraction: 'rebelion'
    }, {
        name: 'Rebel Troopers',
        fraction: 'rebelion'
    }, {
        name: 'Luke Skywalker',
        fraction: 'rebelion'
    }, {
        name: 'Han Solo',
        fraction: 'rebelion'
    }, {
        name: 'Chewbacca',
        fraction: 'rebelion'
    }, {
        name: 'Darth Vader',
        fraction: 'empire'
    }, {
        name: 'IG-88',
        fraction: 'empire'
    }, {
        name: 'General Weiss',
        fraction: 'empire'
    }, {
        name: 'Imperial Guard Champion',
        fraction: 'empire'
    })
    .then(() => {
        console.log('---finished populating ally cards---');
    });
});
