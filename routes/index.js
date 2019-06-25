var express = require('express');
var router = express.Router();
let landingPage = require('./../controllers/landing')
/* GET home page. */
router.get('/', landingPage.index);


module.exports = router;