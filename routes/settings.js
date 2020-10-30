var express = require('express');
var router = express.Router();
const settingsController = require('../controllers/settings controller');
/* GET home page. */
router.get('/', settingsController.get_settings);

router.get('/birds', settingsController.get_birds);

router.get('/meds', settingsController.get_med_settings);

router.get('/foods', settingsController.get_foods_settings);

// Edit routers

router.get('/birds/edit', settingsController.get_birds_edit);

router.get('/meds/edit', settingsController.get_meds_edit);

router.get('/foods/edit', settingsController.get_foods_edit);

// Create routers

router.get('/birds/create', settingsController.get_create_bird);
router.post('/birds/create', settingsController.post_create_bird);
router.get('/foods/create', settingsController.get_create_food);
router.post('/foods/create', settingsController.post_create_food);
router.get('/meds/create', settingsController.get_create_medication);
router.post('/meds/create', settingsController.post_create_med);
module.exports = router;
