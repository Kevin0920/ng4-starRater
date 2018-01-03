var mongoose = require('mongoose');

var RateSchema = new mongoose.Schema({
    rate: { type: Number }
}, {timestamps: true});

var Rate = mongoose.model('Rate', RateSchema);