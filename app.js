'use strict'

/**
 * Si al instalar alguna libreria se presenta mensaje de error, usar
 * "npm cache clean" e intentar de nuevo
 */
const express = require('express') //npm i express --save
const bodyParser = require('body-parser')  // npm i body-parser --save
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())  

app.use('/api', api);

module.exports = app