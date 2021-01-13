const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength:50
    },
    email: {
        tpye: String, 
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0 
    }, 
    token: {
        tpye: String,
    },
    tokenExp: {
        type: Number
    }
})

const User = mogoose.model('User', userSchema)

module.exports = { User }