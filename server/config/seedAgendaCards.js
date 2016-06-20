/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';
import AgendaCard from '../api/agenda-card/agenda-card.model.js';

AgendaCard.find({}).remove()
.then(() => {
    AgendaCard.create({
        name: 'Dark Obsession',
        agendaSet: 'Lord Vader\'s Command',
        influenceCost: 3
    }, {
        name: 'A Dark Power',
        agendaSet: 'Lord Vader\'s Command',
        influenceCost: 2
    }, {
        name: 'As You Wish',
        agendaSet: 'Lord Vader\'s Command',
        influenceCost: 1
    }, {
        name: 'Means of Production',
        agendaSet: 'Imperial Industry',
        influenceCost: 3
    }, {
        name: 'Restorative Supplies',
        agendaSet: 'Imperial Industry',
        influenceCost: 2
    }, {
        name: 'Interrogation Protocol',
        agendaSet: 'Imperial Industry',
        influenceCost: 1
    }, {
        name: 'Breaking Point',
        agendaSet: 'Retaliation',
        influenceCost: 3
    }, {
        name: 'Weakness Revealed',
        agendaSet: 'Retaliation',
        influenceCost: 2
    }, {
        name: 'Tactical Explosives',
        agendaSet: 'Retaliation',
        influenceCost: 1
    }, {
        name: 'Impounded',
        agendaSet: 'Agents of the Empire',
        influenceCost: 4
    }, {
        name: 'Imperial Informants',
        agendaSet: 'Agents of the Empire',
        influenceCost: 1
    }, {
        name: 'Tracking Beacon',
        agendaSet: 'Agents of the Empire',
        influenceCost: 1
    }, {
        name: 'Wanted',
        agendaSet: 'For the Right Price',
        influenceCost: 4
    }, {
        name: 'High Value Target',
        agendaSet: 'For the Right Price',
        influenceCost: 2
    }, {
        name: 'Hired Help',
        agendaSet: 'For the Right Price',
        influenceCost: 1
    }, {
        name: 'Fire at Will',
        agendaSet: 'Imperial Discipline',
        influenceCost: 2
    }, {
        name: 'Impending Doom',
        agendaSet: 'Imperial Discipline',
        influenceCost: 1
    }, {
        name: 'Tactical Maneuvering',
        agendaSet: 'Imperial Discipline',
        influenceCost: 1
    }, {
        name: 'Internal Affairs',
        agendaSet: 'Imperial Security Bureau',
        influenceCost: 2
    }, {
        name: 'ISB Enforcers',
        agendaSet: 'Imperial Security Bureau',
        influenceCost: 2
    }, {
        name: 'Imperial Operative',
        agendaSet: 'Imperial Security Bureau',
        influenceCost: 1
    }, {
        name: 'Forest Ambush',
        agendaSet: 'The General\'s Scheme',
        influenceCost: 3
    }, {
        name: 'Inspiring Command',
        agendaSet: 'The General\'s Scheme',
        influenceCost: 2
    }, {
        name: 'Special Modifications',
        agendaSet: 'The General\'s Scheme',
        influenceCost: 1
    }, {
        name: 'Infection',
        agendaSet: 'Crimson Empire',
        influenceCost: 3
    }, {
        name: 'Best of the Best',
        agendaSet: 'Crimson Empire',
        influenceCost: 1
    }, {
        name: 'Pulling the Strings',
        agendaSet: 'Crimson Empire',
        influenceCost: 1
    }, {
        name: 'Binary Revolution',
        agendaSet: 'Droid Uprising',
        influenceCost: 3
    }, {
        name: 'Sabotaged Plans',
        agendaSet: 'Droid Uprising',
        influenceCost: 1
    }, {
        name: 'Firepower Upgrade',
        agendaSet: 'Droid Uprising',
        influenceCost: 1
    }, {
        name: 'Military Presence',
        agendaSet: 'Stormtrooper Support',
        influenceCost: 1
    }, {
        name: 'Perpetual Reinforcements',
        agendaSet: 'Stormtrooper Support',
        influenceCost: 1
    }, {
        name: 'Strength of Command',
        agendaSet: 'Stormtrooper Support',
        influenceCost: 3
    }, {
        name: 'By Any Means Necessary',
        agendaSet: 'Soldiers for Hire',
        influenceCost: 1
    }, {
        name: 'No Disintegrations',
        agendaSet: 'Soldiers for Hire',
        influenceCost: 2
    }, {
        name: 'Predator and Prey',
        agendaSet: 'Soldiers for Hire',
        influenceCost: 3
    }, {
        name: 'Bunker Buster',
        agendaSet: 'Vader\'s Fist',
        influenceCost: 3
    }, {
        name: 'To the Last Men',
        agendaSet: 'Vader\'s Fist',
        influenceCost: 2
    }, {
        name: 'Set for Stun',
        agendaSet: 'Vader\'s Fist',
        influenceCost: 1
    }, {
        name: 'Back-Room Bargains',
        agendaSet: 'Nefarious Dealings',
        influenceCost: 3
    }, {
        name: 'Final Blast',
        agendaSet: 'Nefarious Dealings',
        influenceCost: 2
    }, {
        name: 'Trade Routes Disrupted',
        agendaSet: 'Nefarious Dealings',
        influenceCost: 2
    });
})
.then(response => {
    console.log('---finished populating agenda cards---');
});
