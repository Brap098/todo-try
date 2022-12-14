require('dotenv').config()
const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.use('/todo', require('./controllers/todo.js'))

app.get('/', (req, res) => {
    res.render('home')
  })
  
app.get('*', (req, res) => {
    res.render('error404')
  })
  
app.listen(process.env.PORT)

