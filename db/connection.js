const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localHost',
        user: 'root',
        password:'rY*Zn6BRafBI&1a%',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;