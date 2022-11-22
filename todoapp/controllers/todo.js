const router = require('express').Router()
const todos = require('../todoLists/todos.js')

// GET /places
router.get('/', (req, res) => {
    res.render('todo/index', {todo})
  })


  router.post('/', (req, res) => {

    todos.push(req.body)
    res.redirect('/todo')
  })
  
  


  router.get('/new', (req, res) => {
    res.render('todo/new')
})
  

module.exports = router