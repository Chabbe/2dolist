'use strict';

var express = require('express');
var TodoItem = require('../model/todoItem.js');
var router = express.Router();

var items = 6;

router.get('/todoList', async function (req, res) {
    var pageNr = req.query.page;
    var sortName = req.query.sort;
    var todos = await TodoItem.find().sort({
        text: sortName
    }).skip((pageNr - 1) * items).limit(items);
    res.render('todoList', {
        todos: todos
    });
});

router.post('/todolist', async function (req, res) {

    var todo = new TodoItem({
        text: req.body.text
    });

    await todo.save();
    res.redirect('/todolist');
});

router.get('/delete/:id', async function (req, res) {
    await TodoItem.deleteOne({
        _id: req.params.id
    });
    res.redirect('/todolist');
});

router.get('/update/:id', async function (req, res) {

    var foundItem = await TodoItem.findById({
        _id: req.params.id
    });

    res.render('edit', {
        foundItem: foundItem
    });
});

router.post('/update/:id', async function (req, res) {

    await TodoItem.updateOne({
        _id: req.body.id
    }, {
        $set: {
            text: req.body.text
        }
    });

    res.redirect('/todolist');
});

module.exports = router;