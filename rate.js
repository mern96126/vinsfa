'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  
  var rateSchema = new Schema({
    current_tea_rate: {
        type: mongoose.Types.Decimal128,
        required: true
     },
    current_coffee_rate: {
      type: mongoose.Types.Decimal128,
      required: true
    },
  },{
    timestamps: true
 });

module.exports = mongoose.model('ratedetails', rateSchema);