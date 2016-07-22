'use strict';

import mongoose from 'mongoose';
let Schema = mongoose.Schema;

var CampaignSchema = new mongoose.Schema({
  name: String,
  owner: String,
  active: Boolean,
  startDate: { type: Date, default: new Date() },
  empire: {
      player: {
          email: String,
          name: String
      },
      classSet: String,
      agendaSets: Array
  },
  rebelion: Array,
  missions: Schema.Types.Mixed
});

export default mongoose.model('Campaign', CampaignSchema);
