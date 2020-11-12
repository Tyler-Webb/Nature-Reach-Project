var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index controller');
const authMiddleware = require('../middleware/ensureAuthenticate');

/* GET home page. */
router.get('/', authMiddleware.ensureAuthenticated, indexController.get_index);

module.exports = router;
