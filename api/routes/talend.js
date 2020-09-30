const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'pentaho',
    password: 'pentaho',
    database: 'tmaster',
    port: '3999'
});
router.get('/', (req, res, next) => {
    let jobNameString = req.query.Job_name;
    let theString = "'" + jobNameString + "'";
    console.log(theString);
    connection.query(
        "SELECT unique_name, component_group,category,VALUE FROM tb_xml_data WHERE component_group IN  ('Input','Transformation','Output') AND job_name IN (" + theString + ")  AND category IN ('LABEL','FILENAME','FIELDSEPARATOR','TRIMALL','HOST','PORT','TABLE','QUERY','DBNAME','SQL_QUERY','HIVE_DATABASE_NAME','HIVE_TABLE_NAME', 'ENCODING', 'FILE_ACTION', 'FOLDER', 'MERGE_PATH', 'REPLACE_FILE', 'ADVANCED_COND', 'CONDITIONS', 'LOGICAL_OP', 'REPLICATED_JOIN' +'CLASSPATH_SEPARATOR', 'CONNECTION', 'GOOGLE_CLUSTER_ID', 'GOOGLE_JARS_BUCKET', 'GOOGLE_PROJECT_ID', 'GOOGLE_REGION', +'KEYTAB_PATH', 'HADOOP_LOGIN', 'TYPEFILE', 'DATA_ACTION', 'JDBC_URL', 'TABLESCHEMA', 'TABLE_ACTION', 'TRIM_CHAR', 'CODE', 'COMMIT_EVERY') AND component_name IN('tHiveInput', 'tOracleInput', 'tOracleOutput', 'tHDFSOutput', 'tFileOutputDelimited', 'tJavaRow', 'tJava', 'tOracleRow','tMap','tFilterRow','tAggregateRow') ORDER BY component_group, job_name, unique_name ",
        (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: 'error' });
            } else {
                res.status(200).json({ result });

            }
        }
    );
});





module.exports = router;