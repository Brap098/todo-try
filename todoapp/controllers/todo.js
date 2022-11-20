
const router = require('express').Router()

router.get('/', (req, res) => {
    let places = []
    res.render('todo/index', {places})
})

module.exports = router
