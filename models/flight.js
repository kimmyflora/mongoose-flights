const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'AUS'
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: () => {
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      return oneYearFromNow;
    }
  }
});

// const Flight = mongoose.model('Flight', flightSchema);

module.exports = mongoose.model('Flight', flightSchema);














// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const flightSchema = new Schema({
//     airline: {
//         type: String,
//         enum: ['American', 'Southwest' & 'United']
//     required: true
//     },

//     airport: {
//         type: String,
//         enum: ['AUS', 'DFW', 'DEN', 'LAX' & 'SAN']
//     default: 'DEN'
//     },

//     flightNo: {
//         type: Number,
//         required: true,
//         min: 10,
//         max: 9999
//     },

//     departs: {
//         type: Date,
//         default: function () {
//             return new Date(+new Date() + 365 * 24 * 60 * 60 * 1000);
//         }
//     }
// })

// module.exports = mongoose.model('Flight', flightSchema)