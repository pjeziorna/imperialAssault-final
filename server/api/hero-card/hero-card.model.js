'use strict';

import mongoose from 'mongoose';

var HeroCardSchema = new mongoose.Schema({
  name: String,
  classCards: Array
});

export default mongoose.model('HeroCard', HeroCardSchema);
