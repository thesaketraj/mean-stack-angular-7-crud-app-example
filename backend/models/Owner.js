const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// collection and schema
let Owner = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    agentName: {
        type: String
    },
    phoneNumber: {
        type: Number
    }
}, {
    collection: 'owner'
})

module.exports = mongoose.model('Owner', Owner)