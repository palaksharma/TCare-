const express = require('express');
const router = express.Router();
const shell = require("shelljs");
const bodyParser = require("body-parser");
const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json());

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'pentaho',
    password: 'pentaho',
    database: 'tmaster',
    port: '3999'
});

router.post('/', [bodyParser.json()], (req, res) => {
    let job_name = req.body.parameterValue;
    let context_environment = [req.body.context_Env_Parameter]
    console.log("ab", context_environment);
    connection.query(
        "SELECT * FROM tb_xml_context where job_name in ( '" + job_name + "') AND context_environment in ('" + context_environment + "' )",
        (error, result) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json({ result });

            }
        });
});


module.exports = router;