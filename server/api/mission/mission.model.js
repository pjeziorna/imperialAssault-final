'use strict';

import mongoose from 'mongoose';

let Schema = mongoose.Schema;

var MissionSchema = new mongoose.Schema({
    _id: { type: String, index: true },
    title: String,
    deckType: String,
    missionType: String,
    campaign_id: { type: Schema.Types.ObjectId, index: true},
    empire: {
        influence: Number,
        influenceInMission: Number,
        expInMission: Number,
        exp: Number
    },
    rebelion: {
        creditsInMission: Number,
        credits: Number,
        expInMission: Number,
        allys: Array,
        players: Array,
        itemsSold: Array,
        itemsPossessed: Array
    },
    availableSideMissions: Array,
    nextStoryMission: String,
    timeSpent: {
        hours: Number,
        minutes: Number
    },
    winner: String,
    playDate: { type: Date, default: new Date() }
});

export default mongoose.model('Mission', MissionSchema);
