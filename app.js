const express        = require('express')

// App
let app              = express()

const path           = require('path')

// Dependencies
const favicon        = require('serve-favicon')
const logger         = require('morgan')
const cookieParser   = require('cookie-parser')
const bodyParser     = require('body-parser')

// Configs
const appConfig      = require('./config/app').config

// Register Providers
app                  = require('./app/Providers/RegisterProviders')(app)


// View engine setup
app.set('views', path.join(__dirname, appConfig('views')))
app.set('view engine', 'jade')

// Uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app
