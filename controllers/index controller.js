exports.get_index = function(req, res) {
    res.render('index', {title: 'Express'});
}