'use strict'

/**
 * Si al instalar alguna libreria se presenta mensaje de error, usar
 * "npm cache clean" e intentar de nuevo
 */

//const mongoose = require('mongoose') // npm i mongoose --save
const app = require('./app');
const config = require('./config');
const insertdata = require('./Controllers/insertdata')


app.listen(config.port, () => {
    console.log(`API REST corriendo en HTTP://localhost:${config.port}`) //Se usan las comillas invertidas para que tome el valor port
    insertdata.insertdata();
})