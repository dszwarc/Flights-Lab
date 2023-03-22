const mongoose = require('mongoose');

function defaultDate(){
    let defaultDate = new Date();
    return defaultDate.setFullYear(defaultDate.getFullYear() + 1);
}

const destSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN' ]
    },
    arrival: {
        type: Date
    }
})

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American','Delta','Southwest','United']
    },
    airport: {
        type: String,
        default: 'DEN',
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo:{
        type: Number,
        max: 9999,
        min: 10
    },
    departs: {
        type: Date,
        default: defaultDate()
    },
    destinations: {
        type: [destSchema]
    }
})



module.exports = mongoose.model('Flight', flightSchema);