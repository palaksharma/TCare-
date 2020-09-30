const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authCheck');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'pentaho',
    password: 'pentaho',
    database: 'tmaster',
    port: '3999'
});
const shell = require("shelljs");
router.get('/', [bodyParser.json()], (req, res) => {
    console.log(req.query.Project_name);
    console.log(req.body.Project_name);
    console.log("C:/Tcare/Code_Review_Latest/jb_code_review_xml_db_1.0/jb_code_review_xml_db/jb_code_review_xml_db_run.sh C:/Tcare/Talend_Code_Review/Job_exports " + req.query.Project_name + " &>/dev/null &")
    shell.exec("C:/Tcare/Code_Review_Latest/jb_code_review_xml_db_1.0/jb_code_review_xml_db/jb_code_review_xml_db_run.sh C:/Tcare/Talend_Code_Review/Job_exports " + req.query.Project_name);
    connection.query(
        "INSERT INTO tb_project_detail(Project_id,Project_name,Project_desc) VALUES (?,?,?)", [req.query.Project_id, req.query.Project_name, req.query.Project_desc],
        (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error });
            } else {
                console.log(result);
                res.status(200).json({ result });

            }
        }
    );
});

module.exports = router;