'use strict';

import mongoose from 'mongoose';

var AgendaCardSchema = new mongoose.Schema({
  gameSet: String,
  agendaSet: String,
  cards: Array
});

export default mongoose.model('AgendaCard', AgendaCardSchema);
