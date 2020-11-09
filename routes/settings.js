var express = require('express');
var router = express.Router();
const settingsController = require('../controllers/settings controller');
const usersController = require('../controllers/users_controller');
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

// Users routes
router.get('/users', usersController.get_users);
router.get('/users/create', usersController.get_create_user);
router.post('/users/create', usersController.post_create_user);


// Update routers
router.get('/birds/update', settingsController.get_birds_update);
router.get('/foods/update', settingsController.get_foods_update);
router.get('/meds/update', settingsController.get_meds_update);
router.post('/birds/update', settingsController.post_birds_update);
router.post('/foods/update', settingsController.post_foods_update);
router.post('/meds/update', settingsController.post_meds_update);

// Delete routers
router.get('/birds/delete', settingsController.delete_bird);
router.get('/foods/delete', settingsController.delete_food);
router.get('/meds/delete', settingsController.delete_med);
module.exports = router;
