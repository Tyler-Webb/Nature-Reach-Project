var express = require('express');
var router = express.Router();
const feedingsController = require('../controllers/feedings controller');
/* GET home page. */
router.get('/', feedingsController.get_feedings);
router.get('/create', feedingsController.get_feedings_create);
router.post('/create', feedingsController.post_feedings_create);
router.get('/update', feedingsController.get_feedings_update);
router.post('/update', feedingsController.post_feedings_update);
router.get('/delete', feedingsController.delete_feedings);

module.exports = router;