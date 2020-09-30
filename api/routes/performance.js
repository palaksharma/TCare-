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
    shell.exec("C:/Tcare/Code_Review_Latest/jb_load_naming_standard_0.1/jb_load_naming_standard/jb_load_naming_standard_run.sh &>/dev/null &");
    shell.exec("C:/Tcare/Code_Review_Latest/jb_load_best_practice_0.1/jb_load_best_practice/jb_load_best_practice_run.sh &>/dev/null &");
    // let bestPractice = req.body.bestPracticeList;
    let namingConvetion = req.body.namingConvetionList;
    let theString = "'" + namingConvetion.join("','") + "'";
    console.log(theString);

    let testString = "SELECT * FROM tb_naming_standard where job_name in ( " + theString + ")";
    console.log(testString);

    connection.query(
        "SELECT * FROM tb_naming_standard where job_name in ( " + theString + ")",
        (error, result) => {
            if (error) {
                res.status(500).json({ status: 'error' });
            } else {
                res.status(200).json({ result });

            }
        });
});


module.exports = router;