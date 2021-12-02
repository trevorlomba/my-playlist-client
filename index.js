// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// javascript entry point
require('./app/app.js')

// styles
require('./app/styles/index.scss')

// const mongoose = require('mongoose')
// const express = require('express')
// const app = express()

// mongoose.connect('mongodb://localhost/playlists', { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.on('open', (console.log('Connected to Database')))

// app.listen(3000, () => console.log('server live'))
