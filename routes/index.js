'use strict'

const cancerArticulosCTRL = require('../Controllers/cancerArticulos');
const express = require('express');
const api = express.Router()

//RUTAS PARA ACCEDER
api.get('/articulos', cancerArticulosCTRL.getArticulos); // Tipo get para traer todos los articulos
module.exports = api