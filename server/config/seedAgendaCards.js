/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';
import AgendaCard from '../api/agenda-card/agenda-card.model.js';

AgendaCard.find({}).remove()
.then(() => {
    AgendaCard.create({
        agendaSet: 'Lord Vader\'s Command',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Dark Obsession',
            influenceCost: 3
        }, {
            name: 'A Dark Power',
            influenceCost: 2
        }, {
            name: 'As You Wish',
            influenceCost: 1
        }]
    }, {
        agendaSet: 'Imperial Industry',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Means of Production',
            influenceCost: 3
        }, {
            name: 'Restorative Supplies',
            influenceCost: 2
        }, {
            name: 'Interrogation Protocol',
            influenceCost: 1
        }]
    }, {
        agendaSet: 'Imperial Discipline',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Fire at Will',
            influenceCost: 2
        }, {
            name: 'Impending Doom',
            influenceCost: 1
        }, {
            name: 'Tactical Maneuvering',
            influenceCost: 1
        }]
    }, {
        agendaSet: 'Retaliation',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Breaking Point',
            influenceCost: 3
        }, {
            name: 'Weakness Revealed',
            influenceCost: 2
        }, {
            name: 'Tactical Explosives',
            influenceCost: 1
        }]
    }, {
        agendaSet: 'Agents of the Empire',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Impounded',
            influenceCost: 4
        }, {
            name: 'Imperial Informants',
            influenceCost: 1
        }, {
            name: 'Tracking Beacon',
            influenceCost: 1
        }]
    }, {
        agendaSet: 'For the Right Price',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Wanted',
            influenceCost: 4
        }, {
            name: 'High Value Target',
            influenceCost: 2
        }, {
            name: 'Hired Help',
            influenceCost: 1
        }]
    }, {
        agendaSet: 'Imperial Security Bureau',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Internal Affairs',
            influenceCost: 2
        }, {
            name: 'ISB Enforcers',
            influenceCost: 2
        }, {
            name: 'Imperial Operative',
            influenceCost: 1
        }]
    }, {
        agendaSet: 'The General\'s Scheme',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Forest Ambush',
            influenceCost: 3
        }, {
            name: 'Inspiring Command',
            influenceCost: 2
        }, {
            name: 'Special Modifications',
            influenceCost: 1
        }]
    }, {
        agendaSet: 'Crimson Empire',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Infection',
            influenceCost: 3
        }, {
            name: 'Best of the Best',
            influenceCost: 1
        }, {
            name: 'Pulling the Strings',
            influenceCost: 1
        }]
    }, {
        agendaSet: 'Droid Uprising',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Binary Revolution',
            influenceCost: 3
        }, {
            name: 'Sabotaged Plans',
            influenceCost: 1
        }, {
            name: 'Firepower Upgrade',
            influenceCost: 1
        }]
    }, {
        agendaSet: 'Stormtrooper Support',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Military Presence',
            influenceCost: 1
        }, {
            name: 'Perpetual Reinforcements',
            influenceCost: 1
        }, {
            name: 'Strength of Command',
            influenceCost: 3
        }]
    }, {
        agendaSet: 'Soldiers for Hire',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'By Any Means Necessary',
            influenceCost: 1
        }, {
            name: 'No Disintegrations',
            influenceCost: 2
        }, {
            name: 'Predator and Prey',
            influenceCost: 3
        }]
    }, {
        agendaSet: 'Vader\'s Fist',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Bunker Buster',
            influenceCost: 3
        }, {
            name: 'To the Last Men',
            influenceCost: 2
        }, {
            name: 'Set for Stun',
            influenceCost: 1
        }]
    }, {
        agendaSet: 'Nefarious Dealings',
        gameSet: 'CORE_SET',
        cards: [{
            name: 'Back-Room Bargains',
            influenceCost: 3
        }, {
            name: 'Final Blast',
            influenceCost: 2
        }, {
            name: 'Trade Routes Disrupted',
            influenceCost: 2
        }]
    });
})
.then(response => {
    console.log('---finished populating agenda cards---');
});
