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

router.get('/', (req, res) => {
    shell.exec('jb_code_review_xml_db_run.sh');
    connection.query(
        "INSERT INTO tb_project_detail(Project_id,Project_name,Project_desc) VALUES (?,?,?)", [req.query.Project_id, req.query.Project_name, req.query.Project_desc],
        (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: 'error' });
            } else {
                res.status(200).json({ status: 'ok' });

            }
        }
    );
});

module.exports = router;