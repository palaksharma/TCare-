const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'pentaho',
    password: 'pentaho',
    database: 'tmaster',
    port: '3999'
});
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json())

router.post('/', [bodyParser.json()], (req, res) => {
    let jobNameList = req.body.job_name;
    console.log(jobNameList);
    connection.query(
        "SELECT * FROM tb_xml_connections WHERE job_name in ('" + jobNameList + "')",
        (error, result) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json({ result });
                console.log(result);
            }

        });

});



module.exports = router;