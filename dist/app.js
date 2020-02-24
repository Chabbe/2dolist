'use strict';

var config = require('./config/config');
var path = require('path');
var mongoose = require('mongoose');
var commentRoute = require('./route/itemRoute.js');
var express = require('express');
var app = express();

app.use(express.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(commentRoute);

var port = process.env.PORT || 9001;
var options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(config.databaseURL, options).then(function () {
    console.log('You are now connected to ' + port + '. ---->>> Please visit localhost:' + port + '/todolist to get started!');
    app.listen(port);
});