'use strict';

import mongoose from 'mongoose';

var GameSetSchema = new mongoose.Schema({
    _id: String,
    name: String
});

export default mongoose.model('GameSet', GameSetSchema);
