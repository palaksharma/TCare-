const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authCheck')

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'pentaho',
    password: 'pentaho',
    database: 'tmaster',
    port: '3999'
});

router.get('/', (req, res, next) => {
    connection.query(
        "SELECT * FROM tb_best_practise",
        (error, result, fields) => {
            if (error) {
                res.status(500).json({ status: 'error' });
            } else {
                res.status(200).json({ result });

            }
        });
});


module.exports = router;