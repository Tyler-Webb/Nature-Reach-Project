
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