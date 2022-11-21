
const router = require('express').Router()

router.get('/', (req, res) => {
    let places = []
    res.render('todo/index', {places})
})

router.get('/new', (req, res) => {
    res.render('todo/new')
})

module.exports = router
