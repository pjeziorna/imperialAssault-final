'use strict';

import mongoose from 'mongoose';

var AgendaCardSchema = new mongoose.Schema({
  name: String,
  agendaSet: String,
  influenceCost: Number
});

export default mongoose.model('AgendaCard', AgendaCardSchema);
