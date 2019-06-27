var express = require('express');
var router = express.Router();
let landingPage = require('./../controllers/landing')
/* GET home page. */
router.get('/', landingPage.index);
router.post('/', landingPage.submit_lead);


module.exports = router;