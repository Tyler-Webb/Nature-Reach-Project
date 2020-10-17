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

module.exports = router;
