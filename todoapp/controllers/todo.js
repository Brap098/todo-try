const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let todo = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('todo/index', {todo})
  })


  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  


  router.get('/new', (req, res) => {
    res.render('todo/new')
})
  

module.exports = router