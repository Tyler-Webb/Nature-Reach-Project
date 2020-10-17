var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('settings/settings', { title: 'Settings' });
});

router.get('/birds', function(req, res, next) {
  res.render('settings/birds', { title: 'Birds settings' });
});

router.get('/meds', function(req, res, next) {
  res.render('settings/meds', { title: 'Medicines settings' });
});
router.get('/foods', function(req, res, next) {
  res.render('settings/foods', { title: 'Foods settings' });
});

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
