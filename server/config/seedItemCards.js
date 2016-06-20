/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';
import ItemCard from '../api/item-card/item-card.model.js';

ItemCard.find({}).remove()
.then(() => {
    ItemCard.create({
        _id: 'DL-44',
        title: 'DL-44: Pistol',
        type: 'wepon',
        tier: 1,
        price: 500
    }, {
        _id: 'DH-17',
        title: 'DH-17: Pistol',
        type: 'wepon',
        tier: 1,
        price: 200
    }, {
        _id: 'E-11',
        title: 'E-11: Rifle',
        type: 'wepon',
        tier: 1,
        price: 400
    }, {
        _id: 'VIBROBLADE',
        title: 'Vibroblade: Blade',
        type: 'wepon',
        tier: 1,
        price: 300
    }, {
        _id: 'ARMORED_GAUNTLETS',
        title: 'Armored Gauntlets: Fist',
        type: 'wepon',
        tier: 1,
        price: 300
    }, {
        _id: 'TACTICAL_DISPLAY',
        title: 'Tactical Display',
        type: 'modifications',
        tier: 1,
        price: 300
    }, {
        _id: 'MARKSMAN_BARREL',
        title: 'Marksman Barrel',
        type: 'modifications',
        tier: 1,
        price: 300
    }, {
        _id: 'BALANCED_HILT',
        title: 'Balanced Hilt',
        type: 'modifications',
        tier: 1,
        price: 300
    }, {
        _id: 'EXTENDED_HAFT',
        title: 'Extended Haft',
        type: 'modifications',
        tier: 1,
        price: 300
    }, {
        _id: 'COMBAT_COAT',
        title: 'Combat Coat',
        type: 'armor',
        tier: 1,
        price: 500
    }, {
        _id: 'SURVIVAL_GEAR',
        title: 'Survival Gear',
        type: 'accessory',
        tier: 1,
        price: 250
    }, {
        _id: 'PORTABLE_MEDKIT',
        title: 'Portable Medikit',
        type: 'accessory',
        tier: 1,
        price: 450
    }, {
        _id: 'DEATHHAMMER',
        title: '434 Deathhammer: Pistol',
        type: 'weapon',
        tier: 2,
        price: 600
    }, {
        _id: 'A280',
        title: 'A280: Rifle',
        type: 'weapon',
        tier: 2,
        price: 600
    }, {
        _id: 'T-21',
        title: 'T-21: Heavy',
        type: 'weapon',
        tier: 2,
        price: 900
    }, {
        _id: 'BD-1_VIBRO_AX',
        title: 'BD-1 Vibro-Ax: Blade Staff',
        type: 'weapon',
        tier: 2,
        price: 600
    }, {
        _id: 'VIBRO_KNUCKLERS',
        title: 'Vibro Knucklers: Fist Blade',
        type: 'weapon',
        tier: 2,
        price: 400
    }, {
        _id: 'SPREAD_BARREL',
        title: 'Spread Barrel',
        type: 'modifications',
        tier: 2,
        price: 300
    }, {
        _id: 'OVERCHARGER',
        title: 'Overcharger',
        type: 'modifications',
        tier: 2,
        price: 300
    }, {
        _id: 'HIGH-IMPACT_GUARD',
        title: 'High-Impact Guard',
        type: 'modifications',
        tier: 2,
        price: 500
    }, {
        _id: 'COMBAT_COAT_2',
        title: 'Combat Coat',
        type: 'armor',
        tier: 2,
        price: 500
    }, {
        _id: 'LAMINATE_ARMOR_2',
        title: 'Laminate Armor',
        type: 'armor',
        tier: 2,
        price: 700
    }, {
        _id: 'EXTRA_AMMUNITION',
        title: 'Extra Ammunition',
        type: 'accessory',
        tier: 2,
        price: 300
    }, {
        _id: 'SLICING_TOOLS',
        title: 'Slicing Tools',
        type: 'accessory',
        tier: 2,
        price: 250
    }, {
        _id: 'SPORTING_BLASTER',
        title: 'Sporting Blaster: Pistol',
        type: 'weapon',
        tier: 3,
        price: 900
    }, {
        _id: 'PULSE_CANNON',
        title: 'Pulse Cannon: Rifle',
        type: 'weapon',
        tier: 3,
        price: 1200
    }, {
        _id: 'DXR-6',
        title: 'DXR-6: Rifle',
        type: 'weapon',
        tier: 3,
        price: 1000
    }, {
        _id: 'FORCE_PIKE',
        title: 'Force Pike: Staff',
        type: 'weapon',
        tier: 3,
        price: 1100
    }, {
        _id: 'TELESCOPIC_SIGHT',
        title: 'Telescopic Sight',
        type: 'modifications',
        tier: 3,
        price: 400
    }, {
        _id: 'DISRUPTION_CELL',
        title: 'Disruption Cell',
        type: 'modifications',
        tier: 3,
        price: 600
    }, {
        _id: 'SHOCK_EMITTER',
        title: 'Shock Emitter',
        type: 'modifications',
        tier: 3,
        price: 500
    }, {
        _id: 'LAMINATE_ARMOR_3',
        title: 'Laminate Armor',
        type: 'armor',
        tier: 3,
        price: 700
    }, {
        _id: 'REINFORCED_HELMET',
        title: 'Reinforced Helmet',
        type: 'accessory',
        tier: 3,
        price: 300
    }, {
        _id: 'COMBAT_VISOR',
        title: 'Combat Visor',
        type: 'accessory',
        tier: 3,
        price: 350
    }, {
        _id: 'COMBAT_KNIFE',
        title: 'Combat Knife',
        type: 'accessory',
        tier: 3,
        price: 500
    }, {
        _id: 'PERSONAL_SHIELDS',
        title: 'Personal Shields',
        type: 'accessory',
        tier: 3,
        price: 550
    });
})
.then(response => {
    console.log('---finished populating item cards---');
});
