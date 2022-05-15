const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    // Your MySQL username
    user: 'root',
    // Your MYSQL password
    password: 'Bbqsauce123#',
    database: 'company'
});

module.exports = db;