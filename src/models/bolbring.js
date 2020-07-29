

const mongoose = require('mongoose');


const Bolbring = mongoose.model('Bolbring', {
    bolbringName: {
        type: String,
        trim: true,
        require: true
    },

    description: {
        type: String,
        trim: true,
        require: true
    },
    complited: {
        type: Boolean,
        default: false
    },
    bolberingModel: {
        type: Number,
        require: true
    }
})

module.exports = Bolbring