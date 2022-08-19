module.exports = {
    // Login
    login:'SELECT * FROM usuarios where us_id = ?;',
    //listar empresa de transportes
    transportes:'SELECT * FROM TRANSPORTES',
    //listar  vehiculos
    vehiculos:'SELECT * FROM VEHICULOS',
    //listar conductores
    conductores:'SELECT * FROM CONDUCTORES',
    //listar acopio
    acopio:'SELECT * FROM ACOPIO',
    //listar proceso
    lugarproceso:'SELECT * FROM LUGARPROCESO',
    //listar formato
    formato:'SELECT * FROM FORMATO',
    //listar modulos
    modulos:'SELECT * FROM MODULOS',
    //listar variedad,
    variedad:'SELECT * FROM VARIEDAD',
    //listar tratamiento
    tratamiento:'SELECT * FROM TRATAMIENTO',
    //insertar item
    insertaritem:'INSERT INTO registro(RP_VT_PLACA, RP_VT_MODELO, RP_VT_PLACA_2, RP_VT_MODELO_2, RP_US_ID, RP_ET_NOMBRE, RP_CO_ID, RP_CO_NOMAP, RP_LP_NOM, RP_AC_NUM, RP_PLLT, RP_FO_ID, RP_FO_PESO, RP_TA_DESC, RP_MO_NUM, RP_VA_DESC, RP_CANT, RP_RPESO, RP_FECHA_REG, RP_HORA_REG)'+
    'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
    //consultas
    
}  