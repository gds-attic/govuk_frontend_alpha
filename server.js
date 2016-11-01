var path = require('path')
var express = require('express')
var app = express()
var nunjucks = require('nunjucks')
var routes = require('./app/routes.js')

var appViews = [
  path.join(__dirname, '/app/views/'),
  path.join(__dirname, '/app/templates/')
]

// Configure Nunjucks
nunjucks.configure(appViews, {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true
})

// Set views engine
app.set('view engine', 'html')

// Middleware to serve static assets
app.use('/public', express.static(path.join(__dirname, '/public')))

// send assetPath to all views
app.use(function (req, res, next) {
  res.locals.asset_path = '/public/'
  next()
})

app.use('/', routes)

app.listen(3000)
console.log('App is running...')
