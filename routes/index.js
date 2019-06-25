var express = require('express');
var router = express.Router();
let welcome = require('./../controllers/index')
/* GET home page. */
router.get('/', welcome.index);


module.exports = router;