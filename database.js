const mysql = require('promise-mysql');
const { database } = require('./keys');

const connection = mysql.createConnection({
    host: database.host,
    database:database.database,
    user:database.user,
    password:database.password
})

const getConnection = () => {
    return connection;
};

module.exports =  getConnection;