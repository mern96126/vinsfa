'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var cafeSchema = new Schema({
    date: {
      type: Date,
      default: function() {
        // Get the current UTC time
        const currentUTC = new Date();
        // Calculate the Indian Standard Time (IST) by adding 5 hours and 30 minutes to UTC time
        const indianTime = new Date(currentUTC.getTime() + 330 * 60000); // 330 minutes
    
        // Format the date in 12-hour time format with a space between date and time
        const options = {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true, // Use 12-hour time format
          timeZoneName: 'short', // Add time zone name (optional)
        };
        
        return indianTime.toLocaleString('en-US', options);
      },
    },
    
    auth_person: {
        type: String,
        trim: true,
        required: true
      },
    shift: {
        type: String,
        trim: true,
        required: true
      },
    tea_count: {
        type: Number,
        required: true
      },
    tea_rate: {
        type: mongoose.Types.Decimal128,
        required: true
      },
    coffee_count: {
        type: Number,
        required: true
      },   
    coffee_rate: {
        type: mongoose.Types.Decimal128,
        required: true
      }, 
    total_amount:{
        type: mongoose.Types.Decimal128,
        required: true
    },
  },{
      timestamps: true
   });
  
   cafeSchema.virtual('formattedDate').get(function () {
    return format(this.date, 'dd-MM-yyyy'); // Adjust the format as needed
  });
  

  module.exports = mongoose.model('cafedetails', cafeSchema);