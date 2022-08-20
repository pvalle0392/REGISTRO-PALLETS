'use strict'
const getConnection = require('../database');
const querys = require('../querys');
// const pool = await getConnection();

var login = {
    validar: async function (req, res) {
        // let userid = req.params.id;
        // try {
        //     let pool = await getConnection();
        //     const result = await pool.query(querys.login, [userid]);
        //     if (result == null || result == "undefined" || result.length == 0) {
        //         res.status(200).send({
        //             "type": "W",
        //             "response": "usuario o contrase;a incorrectos"
        //         })
        //     } else {
        //         res.status(200).send({
        //             "type": "S",
        //             "response": "Usuario y contraseña correctos"
        //         })
        //     }
        // } catch (error) {
        //     res.status(500).send({
        //         "type": "W",
        //         "response": error.message
        //     })
        // }
    },
    transportes: async function (req, res) {
        try {
            getConnection.query(querys.transportes, function (err, rows, fields) {
                if (err) {
                    res.status(500).send({
                        status: "W",
                        response: err.message
                    })
                } else {
                    res.status(200).send({
                        status: "S",
                        response: rows
                    })
                }
            });
            getConnection.end();
            //   console.log('consulta terminada')
        } catch (error) {
            res.status(500).send({
                status: "W",
                response: error.message
            })
        }

    },
    vehiculos: async function (req, res) {
        try {
            getConnection.query(querys.vehiculos, function (err, rows, fields) {
                if (err) {
                    res.status(500).send({
                        status: "W",
                        response: err.message
                    })
                } else {
                    res.status(200).send({
                        status: "S",
                        response: rows
                    })
                }
            });
            getConnection.end();
            //   console.log('consulta terminada')
        } catch (error) {
            res.status(500).send({
                status: "W",
                response: error.message
            })
        }

    },
    conductores: async function (req, res) {
        try {
            getConnection.query(querys.conductores, function (err, rows, fields) {
                if (err) {
                    res.status(500).send({
                        status: "W",
                        response: err.message
                    })
                } else {
                    res.status(200).send({
                        status: "S",
                        response: rows
                    })
                }
            });
            getConnection.end();
            //   console.log('consulta terminada')
        } catch (error) {
            res.status(500).send({
                status: "W",
                response: error.message
            })
        }

    },
    acopio: async function (req, res) {
        try {
            getConnection.query(querys.acopio, function (err, rows, fields) {
                if (err) {
                    res.status(500).send({
                        status: "W",
                        response: err.message
                    })
                } else {
                    res.status(200).send({
                        status: "S",
                        response: rows
                    })
                }
            });
            getConnection.end();
            //   console.log('consulta terminada')
        } catch (error) {
            res.status(500).send({
                status: "W",
                response: error.message
            })
        }

    },
    lugarproceso: async function (req, res) {
        try {
            getConnection.query(querys.lugarproceso, function (err, rows, fields) {
                if (err) {
                    res.status(500).send({
                        status: "W",
                        response: err.message
                    })
                } else {
                    res.status(200).send({
                        status: "S",
                        response: rows
                    })
                }
            });
            getConnection.end();
            //   console.log('consulta terminada')
        } catch (error) {
            res.status(500).send({
                status: "W",
                response: error.message
            })
        }

    },
    formato: async function (req, res) {
        try {
            getConnection.query(querys.formato, function (err, rows, fields) {
                if (err) {
                    res.status(500).send({
                        status: "W",
                        response: err.message
                    })
                } else {
                    res.status(200).send({
                        status: "S",
                        response: rows
                    })
                }
            });
            getConnection.end();
            //   console.log('consulta terminada')
        } catch (error) {
            res.status(500).send({
                status: "W",
                response: error.message
            })
        }

    },
    modulos: async function (req, res) {
        try {
            getConnection.query(querys.modulos, function (err, rows, fields) {
                if (err) {
                    res.status(500).send({
                        status: "W",
                        response: err.message
                    })
                } else {
                    res.status(200).send({
                        status: "S",
                        response: rows
                    })
                }
            });
            getConnection.end();
            //   console.log('consulta terminada')
        } catch (error) {
            res.status(500).send({
                status: "W",
                response: error.message
            })
        }

    },
    variedad: async function (req, res) {

        try {
            getConnection.query(querys.variedad, function (err, rows, fields) {
                if (err) {
                    res.status(500).send({
                        status: "W",
                        response: err.message
                    })
                } else {
                    res.status(200).send({
                        status: "S",
                        response: rows
                    })
                }
            });
            getConnection.end();
            //   console.log('consulta terminada')
        } catch (error) {
            res.status(500).send({
                status: "W",
                response: error.message
            })
        }


        // const getConnection.getConnection(function(err,connection){
        //     if(err){
        //         console.log(err);
        //         return;
        //     }
        // })
        // connection.query
        // try {
        //     let pool = await getConnection();
        //     const result = await pool.query(querys.variedad);
        //     if (result == null || result == "undefined" || result.length == 0) {
        //         res.status(200).send({
        //             "type": "W",
        //             "response": "Base de datos vacía"
        //         })
        //     } else {
        //         res.status(200).send({
        //             "type": "S",
        //             "response": result
        //         })
        //     }
        // } catch (error) {
        //     res.status(500).send({
        //         "type": "W",
        //         "response": error.message
        //     })
        // }
    },
    tratamiento: async function (req, res) {
        try {
            getConnection.query(querys.tratamiento, function (err, rows, fields) {
                if (err) {
                    res.status(500).send({
                        status: "W",
                        response: err.message
                    })
                } else {
                    res.status(200).send({
                        status: "S",
                        response: rows
                    })
                }
            });
            getConnection.end();
            //   console.log('consulta terminada')
        } catch (error) {
            res.status(500).send({
                status: "W",
                response: error.message
            })
        }

    },
    insertaritem: async function (req, res) {
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

    },
    creartablas: async function (req, res) {
        //mensaje de prueba
    }


}

module.exports = login;