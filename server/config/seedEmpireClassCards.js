/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';
import EmpireClassCard from '../api/empire-class-card/empire-class-card.model.js';

EmpireClassCard.find({}).remove()
.then(() => {
    EmpireClassCard.create({
        name: 'Show of Force',
        classSet: 'Military Might',
        expCost: 0
    }, {
        name: 'Combat Medic',
        classSet: 'Military Might',
        expCost: 1
    }, {
        name: 'Riot Grenades',
        classSet: 'Military Might',
        expCost: 1
    }, {
        name: 'Assault Armor',
        classSet: 'Military Might',
        expCost: 2
    }, {
        name: 'Endless Ranks',
        classSet: 'Military Might',
        expCost: 2
    }, {
        name: 'Shock Troopers',
        classSet: 'Military Might',
        expCost: 3
    }, {
        name: 'Sustained Fire',
        classSet: 'Military Might',
        expCost: 3
    }, {
        name: 'Combat Veterans',
        classSet: 'Military Might',
        expCost: 4
    }, {
        name: 'Shock and Awe',
        classSet: 'Military Might',
        expCost: 4
    }, {
        name: 'Experimental Arms',
        classSet: 'Technological Superiority',
        expCost: 0
    }, {
        name: 'Jetpacks',
        classSet: 'Technological Superiority',
        expCost: 1
    }, {
        name: 'Technical Support',
        classSet: 'Technological Superiority',
        expCost: 1
    }, {
        name: 'Failsafe',
        classSet: 'Technological Superiority',
        expCost: 2
    }, {
        name: 'Hidden Detonators',
        classSet: 'Technological Superiority',
        expCost: 2
    }, {
        name: 'Cloaking Device',
        classSet: 'Technological Superiority',
        expCost: 3
    }, {
        name: 'Arc Blasters',
        classSet: 'Technological Superiority',
        expCost: 3
    }, {
        name: 'Superior Augments',
        classSet: 'Technological Superiority',
        expCost: 4
    }, {
        name: 'Adaptive Weapons',
        classSet: 'Technological Superiority',
        expCost: 4
    }, {
        name: 'Prey Upon Doubt',
        classSet: 'Subversive Tactics',
        expCost: 0
    }, {
        name: 'Savage Weaponry',
        classSet: 'Subversive Tactics',
        expCost: 1
    }, {
        name: 'Surgical Strike',
        classSet: 'Subversive Tactics',
        expCost: 1
    }, {
        name: 'Heavy Pressure',
        classSet: 'Subversive Tactics',
        expCost: 2
    }, {
        name: 'Exploit Weakness',
        classSet: 'Subversive Tactics',
        expCost: 2
    }, {
        name: 'Executioner',
        classSet: 'Subversive Tactics',
        expCost: 3
    }, {
        name: 'Weary Target',
        classSet: 'Subversive Tactics',
        expCost: 3
    }, {
        name: 'Oppression',
        classSet: 'Subversive Tactics',
        expCost: 4
    }, {
        name: 'No Quarter',
        classSet: 'Subversive Tactics',
        expCost: 4
    }, {
        name: 'Field Officer',
        classSet: 'Inspiring Leadership',
        expCost: 0
    }, {
        name: 'Supervisory Agent',
        classSet: 'Inspiring Leadership',
        expCost: 1
    }, {
        name: 'Press On',
        classSet: 'Inspiring Leadership',
        expCost: 1
    }, {
        name: 'Strategic Planning',
        classSet: 'Inspiring Leadership',
        expCost: 2
    }, {
        name: 'Noble Sacrifice',
        classSet: 'Inspiring Leadership',
        expCost: 2
    }, {
        name: 'Imperial Dedication',
        classSet: 'Inspiring Leadership',
        expCost: 3
    }, {
        name: 'Field General',
        classSet: 'Inspiring Leadership',
        expCost: 3
    }, {
        name: 'Optimal Tactics',
        classSet: 'Inspiring Leadership',
        expCost: 4
    }, {
        name: 'Lead By Example',
        classSet: 'Inspiring Leadership',
        expCost: 4
    }, {
        name: 'Strike Force',
        classSet: 'Precision Training',
        expCost: 0
    }, {
        name: 'Pinpoint Accuracy',
        classSet: 'Precision Training',
        expCost: 1
    }, {
        name: 'Sharpshooters',
        classSet: 'Precision Training',
        expCost: 1
    }, {
        name: 'Knowledge of Attack',
        classSet: 'Precision Training',
        expCost: 2
    }, {
        name: 'Versatile Attack',
        classSet: 'Precision Training',
        expCost: 2
    }, {
        name: 'Assassins',
        classSet: 'Precision Training',
        expCost: 3
    }, {
        name: 'Exacting Strike',
        classSet: 'Precision Training',
        expCost: 3
    }, {
        name: 'Find the Weakness',
        classSet: 'Precision Training',
        expCost: 4
    }, {
        name: 'Single-Minded',
        classSet: 'Precision Training',
        expCost: 4
    }, {
        name: 'Explosive Munitions',
        classSet: 'Armored Onslaught',
        expCost: 0
    }, {
        name: 'Armor Corps',
        classSet: 'Armored Onslaught',
        expCost: 1
    }, {
        name: 'Automated Repairs',
        classSet: 'Armored Onslaught',
        expCost: 1
    }, {
        name: 'Explosive Entry',
        classSet: 'Armored Onslaught',
        expCost: 2
    }, {
        name: 'Heavy Firepower',
        classSet: 'Armored Onslaught',
        expCost: 2
    }, {
        name: 'Mortar',
        classSet: 'Armored Onslaught',
        expCost: 3
    }, {
        name: 'Reactive Armor',
        classSet: 'Armored Onslaught',
        expCost: 3
    }, {
        name: 'Power to Shields',
        classSet: 'Armored Onslaught',
        expCost: 4
    }, {
        name: 'Rapid Dominance',
        classSet: 'Armored Onslaught',
        expCost: 4
    });
})
.then(response => {
    console.log('---finished populating empire class cards---');
});
