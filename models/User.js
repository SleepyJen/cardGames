const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: "Must include a first name"
    },

    lastName: {
        type: String,
        default: ''
    },

    password: {
        type: String,
        required: 'must include a password'
    },

    players: {
        type: [],
        default: []
    },

    cards: {
        type: [],
        default: []
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;