const config = require('./config/config');
const path = require('path');
const mongoose = require('mongoose');
const commentRoute = require('./route/itemRoute.js');
const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(commentRoute);

const port = process.env.PORT || 9001;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(config.databaseURL, options).then(() => {
    console.log(`You are now connected to ${port}. ---->>> Please visit localhost:${port}/todolist to get started!`);
    app.listen(port);
});