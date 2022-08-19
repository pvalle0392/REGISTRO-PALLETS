'use strict'
const getConnection = require('../database');
const querys = require('../querys');

var login = {
    validar: async function(req, res){
        let userid = req.params.id;
        try {
            const pool = await getConnection();
            const result = await pool.query(querys.login,[userid]);
            if(result == null || result == "undefined" || result.length == 0){
                res.status(200).send({
                    "type":"W",
                    "response":"usuario o contrase;a incorrectos"
                })
            }else{
                res.status(200).send({
                    "type":"S",
                    "response":"Usuario y contraseña correctos"
                })
            }
        } catch (error) {
            res.status(500).send({
                "type":"W",
                "response":error.message
            })
        }
    },
    transportes: async function(req, res){
        try {
            const pool = await getConnection();
            const result = await pool.query(querys.transportes);
            if(result == null || result == "undefined" || result.length == 0){
                res.status(200).send({
                    "type":"W",
                    "response":"Base de datos vacía"
                })
            }else{
                res.status(200).send({
                    "type":"S",
                    "response":result
                })
            }
        } catch (error) {
            res.status(500).send({
                "type":"W",
                "response":error.message
            })
        }
    },
    vehiculos: async function(req, res){
        try {
            const pool = await getConnection();
            const result = await pool.query(querys.vehiculos);
            if(result == null || result == "undefined" || result.length == 0){
                res.status(200).send({
                    "type":"W",
                    "response":"Base de datos vacía"
                })
            }else{
                res.status(200).send({
                    "type":"S",
                    "response":result
                })
            }
        } catch (error) {
            res.status(500).send({
                "type":"W",
                "response":error.message
            })
        }
    },
    conductores: async function(req, res){
        try {
            const pool = await getConnection();
            const result = await pool.query(querys.conductores);
            if(result == null || result == "undefined" || result.length == 0){
                res.status(200).send({
                    "type":"W",
                    "response":"Base de datos vacía"
                })
            }else{
                res.status(200).send({
                    "type":"S",
                    "response":result
                })
            }
        } catch (error) {
            res.status(500).send({
                "type":"W",
                "response":error.message
            })
        }
    },
    acopio: async function(req, res){
        try {
            const pool = await getConnection();
            const result = await pool.query(querys.acopio);
            if(result == null || result == "undefined" || result.length == 0){
                res.status(200).send({
                    "type":"W",
                    "response":"Base de datos vacía"
                })
            }else{
                res.status(200).send({
                    "type":"S",
                    "response":result
                })
            }
        } catch (error) {
            res.status(500).send({
                "type":"W",
                "response":error.message
            })
        }
    },
    lugarproceso: async function(req, res){
        try {
            const pool = await getConnection();
            const result = await pool.query(querys.lugarproceso);
            if(result == null || result == "undefined" || result.length == 0){
                res.status(200).send({
                    "type":"W",
                    "response":"Base de datos vacía"
                })
            }else{
                res.status(200).send({
                    "type":"S",
                    "response":result
                })
            }
        } catch (error) {
            res.status(500).send({
                "type":"W",
                "response":error.message
            })
        }
    },
    formato: async function(req, res){
        try {
            const pool = await getConnection();
            const result = await pool.query(querys.formato);
            if(result == null || result == "undefined" || result.length == 0){
                res.status(200).send({
                    "type":"W",
                    "response":"Base de datos vacía"
                })
            }else{
                res.status(200).send({
                    "type":"S",
                    "response":result
                })
            }
        } catch (error) {
            res.status(500).send({
                "type":"W",
                "response":error.message
            })
        }
    },
    modulos: async function(req, res){
        try {
            const pool = await getConnection();
            const result = await pool.query(querys.modulos);
            if(result == null || result == "undefined" || result.length == 0){
                res.status(200).send({
                    "type":"W",
                    "response":"Base de datos vacía"
                })
            }else{
                res.status(200).send({
                    "type":"S",
                    "response":result
                })
            }
        } catch (error) {
            res.status(500).send({
                "type":"W",
                "response":error.message
            })
        }
    },
    variedad: async function(req, res){
        try {
            const pool = await getConnection();
            const result = await pool.query(querys.variedad);
            if(result == null || result == "undefined" || result.length == 0){
                res.status(200).send({
                    "type":"W",
                    "response":"Base de datos vacía"
                })
            }else{
                res.status(200).send({
                    "type":"S",
                    "response":result
                })
            }
        } catch (error) {
            res.status(500).send({
                "type":"W",
                "response":error.message
            })
        }
    },
    tratamiento: async function(req, res){
        try {
            const pool = await getConnection();
            const result = await pool.query(querys.tratamiento);
            if(result == null || result == "undefined" || result.length == 0){
                res.status(200).send({
                    "type":"W",
                    "response":"Base de datos vacía"
                })
            }else{
                res.status(200).send({
                    "type":"S",
                    "response":result
                })
            }
        } catch (error) {
            res.status(500).send({
                "type":"W",
                "response":error.message
            })
        }
    },
    insertaritem: async function(req, res){
        //  const placa = req.body.placa;
        //  const modelo=req.body.modelo;
        //  const placa2=req.body.placa2;
        //  const modelo2 =req.body.modelo2;
        //  const usuario=req.body.usuario;
        //  const transporte =req.body.transporte;
        //  const licenciachofer=req.body.licenciachofer;
        //  const nombrechofer =req.body.nombrechofer;
        //  const lugarproceso=req.body.lugarproceso;
        //  const acopio=req.body.acopio;
        //  const pallet=req.body.pallet;
        //  const formato =req.body.formato;
        //  const peso=req.body.peso;
        //  const tratamiento =req.body.tratamiento;
        //  const modulo=req.body.modulo;
        //  const variedad=req.body.variedad;
        //  const cantidad=req.body.cantidad;
        //  const pesototal=req.body.pesototal;
        //  const fechareg=req.body.fechareg;
        //  const horareg=req.body.horareg;

        // console.log(placa);
        // res.status(200).send({
        //     message:"body recept"
        // })

    },
    creartablas: async function(req,res){
    
    }


}

module.exports = login;