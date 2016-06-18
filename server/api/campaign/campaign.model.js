'use strict';

import mongoose from 'mongoose';

var CampaignSchema = new mongoose.Schema({
  name: String,
  owner: String,
  active: Boolean,
  startDate: Number,
  endDate: Number,
  empire: {
      player: String,
      hero: String
  },
  rebelion: [],
  missions: []
});

export default mongoose.model('Campaign', CampaignSchema);
