'use strict';

var mongoose = require('mongoose');

var item = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

var todoItem = mongoose.model('Comment', item);

module.exports = todoItem;