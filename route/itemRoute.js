const express = require('express');
const TodoItem = require('../model/todoItem.js')
const router = express.Router();



router.get('/todoList', async (req, res) => {
    const todos = await TodoItem.find()
    res.render("todoList", {
        todos
    });
})

router.post('/todolist', async (req, res) => {

    const todo = new TodoItem({
        text: req.body.text,
    })

    await todo.save();
    res.redirect('/todolist')

})

router.get('/delete/:id', async (req, res) => {
    await TodoItem
        .deleteOne({
            _id: req.params.id
        });
    res.redirect('/todolist')
})

router.get('/update/:id', async (req, res) => {

    const foundItem = await TodoItem.findById({
        _id: req.params.id
    })

    res.render('edit', {
        foundItem
    })
})

router.post('/update/:id', async (req, res) => {

    await TodoItem.updateOne({
        _id: req.body.id
    }, {
        $set: {
            text: req.body.text
        }
    })

    res.redirect('/todolist')
})

module.exports = router;