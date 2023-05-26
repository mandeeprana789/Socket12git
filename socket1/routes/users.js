var express = require('express');
var router = express.Router();
var AUTHcontroller = require("../controller/AuthController")

/* GET users listing. */

router.get('/user',AUTHcontroller.user );

module.exports = router;
