const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const moment = require('moment')
const app = express()

app.set('view engine', 'pug')
app.locals.moment = moment

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'cualquierpalabaraquesenosocurra'
}))

app.get('/', (req, res) => {
  res.render('pages/login')
})

app.post('/login', (req, res) => {
  console.log(req.body.email)
  console.log(req.body.password)
})

app.get('/welcome', (req, res) => {
  res.render('pages/welcome')
})

app.get('/logout', (req, res) => {
  res.render('pages/logout')
})

app.get('/unautoritzed', (req, res) => {
  res.render('pages/unautoritzed')
})

app.listen(3001)
console.log('listen port 3001')
