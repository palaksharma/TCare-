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
    shell.exec("C:/Tcare/Code_Review_Latest/jb_load_naming_standard_0.1/jb_load_naming_standard/jb_load_naming_standard_run.sh &>/dev/null &");
    shell.exec("C:/Tcare/Code_Review_Latest/jb_load_best_practice_0.1/jb_load_best_practice/jb_load_best_practice_run.sh &>/dev/null &");
    connection.query(
        "select DISTINCT Job_name FROM tb_xml_data",
        (error, result, fields) => {
            if (error) {
                res.status(500).json({ status: 'error' });
            } else {
                res.status(200).json({ result });

            }

        });
});


module.exports = router;