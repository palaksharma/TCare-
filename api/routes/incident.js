const express = require('express');

const router = express.Router();
const shell = require("shelljs");
var mysql = require('mysql');

const bodyParser = require("body-parser");
const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'pentaho',
    password: 'pentaho',
    database: 'tmaster',
    port: '3999'
});
var fs = require('fs');

router.get('/', [bodyParser.json()], (req, res) => {
    connection.query(
        "select DISTINCT job_name FROM tb_xml_data",
        (error, result, fields) => {
            if (error) {
                res.status(500).json({ status: 'error' });
            } else {
                res.status(200).json({ result });

            }

        });
});


module.exports = router;