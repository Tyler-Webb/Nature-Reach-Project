var express = require('express');
var router = express.Router();
let feedingsController = require('../controllers/feedings controller');
/* GET home page. */
router.get('/', feedingsController.get_feedings);
router.get('/create',feedingsController.get_feedings_create)
router.get('/update',feedingsController.get_feedings_update)

module.exports = router;