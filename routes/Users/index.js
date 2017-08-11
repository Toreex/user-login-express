const express = require('express')
const router = express.Router()
var fs = require('fs')

var filename = 'data/users.txt'
var data = fs.readFileSync(filename, 'utf8').split('\n')
console.log(data)

router.get('/', (req, res) => {
  if (!req.session.userLogged) res.render('pages/login')
  else {
    res.render('pages/welcome', {

    })
  }
})

router.get('/register', (req, res) => {
  res.render('pages/register')
})

router.post('/register', (req, res) => {
  console.log(req.body)
  var regEmail = req.body.email
  var regPassword = req.body.password
  var regUser = '\n' + regEmail + ':' + regPassword
  console.log(regUser)
  fs.appendFileSync('data/users.txt', regUser, 'utf8')
  res.redirect('/')
})

router.post('/login', (req, res) => {
  var email = req.body.email
  var password = req.body.password
  var mach = email + ':' + password
  console.log(mach)
  var exist = data.some(function (e) {
    return e === mach
  })
  if (exist) {
    req.session.userLogged = true
    res.redirect('/welcome')
  } else {
    res.redirect('/unautoritzed')
  }
})

router.get('/welcome', (req, res) => {
  if (!req.session.userLogged) res.redirect('/')
  else {
    res.render('pages/welcome', {

    })
  }
})

router.get('/logout', (req, res) => {
  req.session.userLogged = null
  res.render('pages/logout')
})

router.get('/unautoritzed', (req, res) => {
  res.render('pages/unautoritzed')
})

module.exports = router
