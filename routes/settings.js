var express = require('express');
var router = express.Router();
let settingsController = require('../controllers/settings controller');
/* GET home page. */
router.get('/', settingsController.get_settings);

router.get('/birds', settingsController.get_bird_settings);

router.get('/meds', settingsController.get_med_settings);

router.get('/foods', settingsController.get_foods_settings);

// Edit routers
/*
router.get('/edit', settingsController.get_birds_edit);

router.get('/meds/edit', settingsController.get_meds_edit);

router.get('/foods/edit', settingsController.get_foods_edit);
*/
module.exports = router;
