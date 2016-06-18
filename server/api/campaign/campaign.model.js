'use strict';

import mongoose from 'mongoose';

var CampaignSchema = new mongoose.Schema({
  name: String,
  owner: String,
  active: Boolean,
  startDate: { type: Date, default: new Date() },
  empire: {
      login: String,
      player: String
  },
  rebelion: [],
  missions: []
});

export default mongoose.model('Campaign', CampaignSchema);
