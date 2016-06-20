'use strict';

import mongoose from 'mongoose';

var ItemCardSchema = new mongoose.Schema({
    _id: String,
    title: String,
    type: String,   //wepon, armor, modifications, accessory
    tier: Number,
    price: Number
});

export default mongoose.model('ItemCard', ItemCardSchema);
