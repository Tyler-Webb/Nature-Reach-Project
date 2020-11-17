exports.get_index = function(req, res) {

    if (res.locals.user.passwordIsExpired) {
        res.render('reset');

    } else {
        res.render('index', {title: 'Express'});
    }
    
}