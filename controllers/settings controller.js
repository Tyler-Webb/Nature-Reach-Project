
exports.get_settings = function(req, res) {
    res.render('settings/settings', { title: 'Settings' });
}

exports.get_bird_settings = function(req, res) {
    res.render('settings/birds', { title: 'Birds settings' });
}

exports.get_med_settings = function(req, res) {
    res.render('settings/meds', { title: 'Medicines settings' });
}

exports.get_foods_settings = function(req, res) {
    res.render('settings/foods', { title: 'Foods settings' });
}

exports.get_meds_edit = function(req, res) {
    res.render('settings/medsedit', { title: 'Medicines Edit' });
}

exports.get_birds_edit = function(req, res) {
    res.render('settings/birdsedit', { title: 'Birds Edit' });
}

exports.get_foods_edit = function(req, res) {
    res.render('settings/foodsedit', { title: 'Foods Edit' });
}

exports.get_create_bird = function(req, res) {
    res.render('settings/birdscreate', { title: 'Create Bird' });
}