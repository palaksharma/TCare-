const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authCheck')

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
var fs = require('fs');
router.post('/', [bodyParser.json()], (req, res) => {
    let bestPractice = req.body.bestPracticeList;
    let namingConvetion = req.body.namingConvetionList;
    let theString = "'" + bestPractice.join("','") + "'";
    console.log(theString);

    fs.writeFile('C:/Tcare/Talend_Code_Review/BestPractices.txt', bestPractice.join('\n'), function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.writeFile('C:/Tcare/Talend_Code_Review/NamingConventions.txt', namingConvetion.join('\n'), function(err) {
        if (err) throw err;
        console.log('Saved!');
    });


    let testString = "SELECT * FROM tb_best_practise where job_name in ( " + theString + ")";
    console.log(testString);
    connection.query(
        "SELECT * FROM tb_best_practise where job_name in ( " + theString + ")",
        (error, result, fields) => {
            if (error) {
                res.status(500).json({ status: 'error' });
            } else {
                res.status(200).json({ result });

            }
        });
});


module.exports = router;