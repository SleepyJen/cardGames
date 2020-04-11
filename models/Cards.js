const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    title: {
        type: String,
        default: ""
    },

    body: {
        type: String
    }
});

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;