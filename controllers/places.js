const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'J-Tops bbq shop',
        city: 'clayton',
        state: 'NC',
        cuisines: 'BBQ, Ribs, Chicken, ETC',
        pic: '/images/JTop_s-logo-greyscale-white.png'
      }, {
          name: 'fivestarraleigh',
          city: 'Raleigh',
          state: 'NC',
          cuisines: 'chinese, drinks',
          pic: '/images/81806fivestar_logo.png'
      }]
      
    res.render('places/index', {places})
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })


router.get('/new', (req, res) => {
    res.render('places/new')
})

  

module.exports = router
