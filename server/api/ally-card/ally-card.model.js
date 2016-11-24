'use strict';

import mongoose from 'mongoose';

var AllyCardSchema = new mongoose.Schema({
  name: String,
  fraction: String
});

export default mongoose.model('AllyCard', AllyCardSchema);
