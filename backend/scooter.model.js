const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Scooter = new Schema({
    scooter_location: {
        type: String
    },
    scooter_type: {
        type: String
    },
    scooter_date: {
        type: String
    },
    scooter_priority: {
        type: String
    },
    scooter_resolved: {
        type: Boolean
    }
})

module.exports = mongoose.model('Scooter', Scooter);