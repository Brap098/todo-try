const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /todo')
})

module.exports = router
