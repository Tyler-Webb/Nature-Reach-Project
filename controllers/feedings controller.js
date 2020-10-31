
exports.get_feedings = function(req, res) {
    res.render('feedings/feedings', {title: 'Feedings'});
}

exports.get_feedings_update = function (req, res) {
    res.render('feedings/feedingsupdate', { title: 'Update Feedings' });
}

exports.get_feedings_create = function (req, res) {
    res.render('feedings/feedingscreate', { title: 'Create Feedings' });
}