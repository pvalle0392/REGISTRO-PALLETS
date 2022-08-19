'use strict'
const express = require('express');
const loginControllers = require('../controllers/login');
const { login } = require('../querys');

// const pool = require('../database');

var router = express.Router();

router.get('/login/:id', loginControllers.validar);
router.get('/transportes', loginControllers.transportes);
router.get('/vehiculos', loginControllers.vehiculos);
router.get('/conductores', loginControllers.conductores);
router.get('/acopio', loginControllers.acopio);
router.get('/lugarproceso', loginControllers.lugarproceso);
router.get('/formato', loginControllers.formato);
router.get('/modulos', loginControllers.modulos);
router.get('/variedad', loginControllers.variedad);
router.get('/tratamiento', loginControllers.tratamiento);
router.post('/agregaritem', loginControllers.insertaritem);
router.get('/creartablas', loginControllers.creartablas)

module.exports = router;