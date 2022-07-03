const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'J-Tops bbq shop',
        city: 'clayton',
        state: 'NC',
        cuisines: 'BBQ, Ribs, Chicken, ETC',
        pic: 'public\images\JTop_s-logo-greyscale-white.png'
      }, {
          name: 'fivestarraleigh',
          city: 'Raleigh',
          state: 'NC',
          cuisines: 'chinese, drinks',
          pic: 'public\images\81806fivestar_logo.png'
      }]
      
    res.render('places/index', {places})
})

module.exports = router
