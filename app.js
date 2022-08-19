'use strict'

var express = require('express');
var bodyParser = require('body-parser');

const  morgan = require('morgan');

var app = express();

// cargar archivo de rutas
const loginRoutes = require('./routes/login');

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());// Para poder trabajar con archivos json

//cors

//rutas
app.use('/api/login', loginRoutes);

//exportar 
module.exports = app; 