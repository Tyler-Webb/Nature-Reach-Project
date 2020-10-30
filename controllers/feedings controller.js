
exports.get_feedings = function(req, res) {
    res.render('feedings/feedings', {title: 'Feedings'});
}

exports.get_feedings_edit = function(req, res) {
    res.render('feedings/feedingsedit', {title: 'Feedings Edit'});
}