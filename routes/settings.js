var express = require('express');
var router = express.Router();
let settingsController = require('../controllers/settings controller');
/* GET home page. */
router.get('/', settingsController.get_settings);

router.get('/birds', settingsController.get_bird_settings);

router.get('/meds', settingsController.get_med_settings);

router.get('/foods', settingsController.get_foods_settings);

// Edit routers
router.get('/birds/edit', function(req, res, next) {
  res.render('settings/birdsedit', { title: 'Birds Edit' });
});

router.get('/meds/edit', function(req, res, next) {
  res.render('settings/medsedit', { title: 'Medicines Edit' });
});

router.get('/foods/edit', function(req, res, next) {
  res.render('settings/foodsedit', { title: 'Foods Edit' });
});

module.exports = router;
