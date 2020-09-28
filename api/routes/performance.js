const express = require('express');
const router = express.Router();

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