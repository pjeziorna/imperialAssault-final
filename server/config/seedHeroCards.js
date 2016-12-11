/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';
import HeroCard from '../api/hero-card/hero-card.model.js';

HeroCard.find({}).remove()
.then(() => {
    HeroCard.create({
            name: 'Diala Passil',
            gameSet: 'CORE_SET',
            classCards: [{
                name: 'Plasteel Staff',
                xpCost: 0
            }, {
                name: 'Force Adept',
                xpCost: 1
            }, {
                name: 'Force Throw',
                xpCost: 1
            }, {
                name: 'Defensive Stance',
                xpCost: 2
            }, {
                name: 'Battle Meditation',
                xpCost: 2
            }, {
                name: 'Snap Kick',
                xpCost: 3
            }, {
                name: 'Art of Movement',
                xpCost: 3
            }, {
                name: 'Way of the Sarlacc',
                xpCost: 4
            }, {
                name: 'Dancing Weapon',
                xpCost: 4
            }]
        }, {
            name: 'Fenn Signis',
            gameSet: 'CORE_SET',
            classCards: [{
                name: 'Infantry Rifle',
                xpCost: 0
            }, {
                name: 'Tactical Movement',
                xpCost: 1
            }, {
                name: 'Take Cover',
                xpCost: 1
            }, {
                name: 'Weapon Expert',
                xpCost: 2
            }, {
                name: 'Adrenaline Rush',
                xpCost: 2
            }, {
                name: 'Suppressive Fire',
                xpCost: 3
            }, {
                name: 'Trench Fighter',
                xpCost: 3
            }, {
                name: 'Rebel Elite',
                xpCost: 4
            }, {
                name: 'Superior Positioning',
                xpCost: 4
            }]
        }, {
            name: 'Gaarkhan',
            gameSet: 'CORE_SET',
            classCards: [{
                name: 'Vibro-Ax',
                xpCost: 0
            }, {
                name: 'Wookiee Loyalty',
                xpCost: 1
            }, {
                name: 'Wookiee Fortitude',
                xpCost: 1
            }, {
                name: 'Ferocity',
                xpCost: 2
            }, {
                name: 'Staggering Blow',
                xpCost: 2
            }, {
                name: 'Vicious Strike',
                xpCost: 3
            }, {
                name: 'Rampage',
                xpCost: 3
            }, {
                name: 'Unstoppable',
                xpCost: 4
            }, {
                name: 'Brutal Cleave',
                xpCost: 4
            }]
        }, {
            name: 'Gideon Argus',
            gameSet: 'CORE_SET',
            classCards: [{
                name: 'Holdout Blaster',
                xpCost: 0
            }, {
                name: 'Called Shot',
                xpCost: 1
            }, {
                name: 'Military Efficiency',
                xpCost: 1
            }, {
                name: 'Mobile Tactician',
                xpCost: 2
            }, {
                name: 'Air of Command',
                xpCost: 2
            }, {
                name: 'For the Cause!',
                xpCost: 3
            }, {
                name: 'Rallying Shout',
                xpCost: 3
            }, {
                name: 'Hammer and Anvil',
                xpCost: 4
            }, {
                name: 'Masterstroke',
                xpCost: 4
            }]
        }, {
            name: 'Jyn Odan',
            gameSet: 'CORE_SET',
            classCards: [{
                name: 'Vintage Blaster',
                xpCost: 0
            }, {
                name: 'Quick As A Whip',
                xpCost: 1
            }, {
                name: 'Smuggler\'s Luck',
                xpCost: 1
            }, {
                name: 'Cheap Shot',
                xpCost: 2
            }, {
                name: 'Roll With It',
                xpCost: 2
            }, {
                name: 'Gunslinger',
                xpCost: 3
            }, {
                name: 'Get Cocky',
                xpCost: 3
            }, {
                name: 'Trick Shot',
                xpCost: 4
            }, {
                name: 'Sidewinder',
                xpCost: 4
            }]
        }, {
            name: 'Mak Eshka\'rey',
            gameSet: 'CORE_SET',
            classCards: [{
                name: 'Longblaster',
                xpCost: 0
            }, {
                name: 'Supply Network',
                xpCost: 1
            }, {
                name: 'Disengage',
                xpCost: 1
            }, {
                name: 'Target Acquired',
                xpCost: 2
            }, {
                name: 'Jeswandi Training',
                xpCost: 2
            }, {
                name: 'Expertise',
                xpCost: 3
            }, {
                name: 'Execute',
                xpCost: 3
            }, {
                name: 'No Escape',
                xpCost: 4
            }, {
                name: 'Decoy',
                xpCost: 4
            }]
        });
    })
    .then(response => {
        console.log('---finished populating hero cards');
    });
