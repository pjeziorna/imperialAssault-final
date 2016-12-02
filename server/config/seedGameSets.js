/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';
import GameSet from '../api/game-set/game-set.model.js';

GameSet.find({}).remove()
.then(() => {
    GameSet.create({
        _id: "CORE_SET",
        name: "Core set"
    }, {
        _id: 'TWIN_SHADOWS',
        name: "Twin shadows"
    }, {
        _id: "BESPIN_GAMBIT",
        name: "Bespin gambit"
    }, {
        _id: "RETURN_TO_HOTH",
        name: "Return to Hoth"
    })
    .then(() => {
        console.log('---finished populating game sets---');
    });
});
