const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
var cookieSession = require('cookie-session')
const moment = require('moment')
var fs = require('fs')
const app = express()

const routesUsers = require('./routes/Users/')
const routesUser = require('./routes/User/')

app.set('view engine', 'pug')
app.locals.moment = moment

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieSession({
  name: 'authExpressDemoCookie',
  keys: ['superSecrettglWwSUbo']
}))

app.use(routesUsers)
app.use(routesUser)

app.listen(3001)
console.log('listen port 3001')
