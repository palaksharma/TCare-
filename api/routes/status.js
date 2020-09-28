const express = require('express');
const router = express.Router();
const shell = require("shelljs");

router.get('/', (req, res) => {
    shell.exec("C:/Tcare/Code_Review_Latest/jb_load_rulemaster_0.1/jb_load_rulemaster/jb_load_rulemaster_run.sh &>/dev/null &");
});


module.exports = router;