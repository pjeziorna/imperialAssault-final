/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';
import AllyCard from '../api/ally-card/ally-card.model.js';

AllyCard.find({}).remove()
.then(() => {
    AllyCard.create({
        name: 'Han Solo',
        fraction: 'rebelion'
    }, {
        name: 'Lord Vader',
        fraction: 'empire'
    }, {
        name: 'Boba Fett',
        fraction: 'empire'
    })
    .then(() => {
        console.log('---finished populating ally cards---');
    });
});
