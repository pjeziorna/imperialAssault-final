'use strict';

import mongoose from 'mongoose';

let Schema = mongoose.Schema;

var MissionSchema = new mongoose.Schema({
    _id: { type: String, index: true },
    title: String,
    deckType: String,
    missionType: String,
    campaign_id: { type: Schema.Types.ObjectId, index: true},
    imperialStats: {
        influenceInMission: Number,
        influence: Number,
        exp: Number
    },
    rebelStats: {
        creditsInMission: Number,
        credits: Number,
        allys: Array,
        users: Array,
        soldItems: Array
    },
    availableSideMissions: Array,
    timeSpent: {
        hours: Number,
        minutes: Number
    },
    winner: String,
    playDate: { type: Date, default: new Date() }
});

export default mongoose.model('Mission', MissionSchema);
