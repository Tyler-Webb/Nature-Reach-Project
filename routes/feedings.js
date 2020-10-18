var express = require('express');
var router = express.Router();
let feedingsController = require('../controllers/feedings controller');
/* GET home page. */
router.get('/', feedingsController.get_feedings);


module.exports = router;