const router = require('express').Router()
const todos = require('../models/todos.js')

router.get('/', (req, res) => {
    console.log(req.body)
    res.render('todos/index', { todos })
})

router.post('/', (req, res) => {
    //console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    todos.push(req.body)
    res.redirect('/todos')
  })

  router.get('/new', (req, res) => {
    res.render('todos/new')
})
  
router.delete('/todos/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!todos[id]) {
      res.render('error404')
    }
    else {
        todos.splice(id, 1)
      res.redirect('/todos')
    }
  })

  router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!todos[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into places[id]
        todos[id] = req.body
        res.redirect(`/todos/${id}`)
    }
  })
  

router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!todos[id]) {
        res.render('error404')
    }
    else {
      res.render('todos/edit', { todos: todos[id] })
    }
  })
  
  

module.exports = router
