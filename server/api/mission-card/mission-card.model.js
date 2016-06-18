'use strict';

import mongoose from 'mongoose';

var MissionCardSchema = new mongoose.Schema({
    _id: String, // short name - enum like MISSION_1
    missionType: String,
    title: String,
    rebelVictoryBonus: {
        credits: {type: Number, default: 0},
        exp: {type: Number, default: 0},
        other: String
    },
    empireVictoryBonus: {
        influence: {type: Number, default: 0},
        exp: {type: Number, default: 0},
        other: String
    },
    additionalRewards: {
        exp: {type: Number, default: 0},
        credits: {type: Number, default: 0},
        influence: {type: Number, default: 0},
        other: String
    },
    deckType: String
});

export default mongoose.model('MissionCard', MissionCardSchema);
