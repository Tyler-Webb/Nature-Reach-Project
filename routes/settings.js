var express = require('express');
var router = express.Router();
const settingsController = require('../controllers/settings controller');
/* GET home page. */
router.get('/', settingsController.get_settings);

router.get('/birds', settingsController.get_birds);

router.get('/meds', settingsController.get_meds);

router.get('/foods', settingsController.get_foods);

// Create routers

router.get('/birds/create', settingsController.get_create_bird);
router.post('/birds/create', settingsController.post_create_bird);
router.get('/foods/create', settingsController.get_create_food);
router.post('/foods/create', settingsController.post_create_food);
router.get('/meds/create', settingsController.get_create_medication);
router.post('/meds/create', settingsController.post_create_med);

// Update routers
//router.post('/birds/update', settingsController);

// Delete routers
router.get('/birds/delete', settingsController.delete_bird);
module.exports = router;
