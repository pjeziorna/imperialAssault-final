'use strict';

import mongoose from 'mongoose';

var EmpireClassCardSchema = new mongoose.Schema({
  name: String,
  classSet: String,
  expCost: Number
});

export default mongoose.model('EmpireClassCard', EmpireClassCardSchema);
