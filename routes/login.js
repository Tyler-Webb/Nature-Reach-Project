var express = require('express');
var router = express.Router();
let loginController = require('../controllers/login_controller');
/* GET home page. */
router.get('/', loginController.get_login);


module.exports = router;