const mongoose = require('mongoose');


const item = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

const todoItem = mongoose.model('Comment', item);

module.exports = todoItem;