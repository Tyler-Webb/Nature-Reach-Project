
exports.get_feedings = function(req, res) {
    res.render('feedings', {title: 'Feedings'});
}

exports.get_feedings_edit = function(req, res) {
    res.render('feedingsedit', {title: 'Feedings Edit'});
}