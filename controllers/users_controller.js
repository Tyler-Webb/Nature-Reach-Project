const User = require('../models/user');

exports.get_users = function(req, res) {
    User.find({}, function (err, users) {
        if (err) {
            console.error(err);
        } else {
            res.render('settings/users/users', { data: users });
        }
    })
}

exports.get_create_user = function(req,res) {
    res.render('settings/users/userscreate');
}

exports.post_create_user = function(req, res) {
    
    let user = new User();

    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = user.generateHash(req.body.password);
    user.role = req.body.role;

    user.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('User saved!');
            res.redirect('/settings/users');
        }
    })

}
