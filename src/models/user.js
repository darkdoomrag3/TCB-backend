const mongoos = require('mongoose');
const validator = require('validator');


const User = mongoos.model('User', {
    name: {
        type: String,
        require: true,
        trim: true

    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        require: true,
        validate(value) {
            if (value.length < 6) {
                throw new Error('password must be grather than 6')
            } else if (value.toLowerCase().includes('password')) {
                throw new Error('password can not be equal to password')
            }
        }

    },

    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw Error('age must be possitive value')
            }
        }
    },


})

module.exports = User
