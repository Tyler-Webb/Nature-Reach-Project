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

exports.get_update_user = function(req,res) {
    User.findOne({ _id: req.query._id }, function (err, user) {

        if (err) {
            console.log(err);
        } else {
            res.render('settings/users/usersupdate', { data: user, title: 'Update User' });
        }
    });
}

exports.post_update_user = function(req,res) {
    const user = new User();
    const updateData = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role
    };
    
    if (req.body.password) {
        updateDate.password = user.generateHash(req.body.password);
        updateData.passwordIsExpired = true
    }

    console.log(updateData);
    User.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/settings/users');
        }
    });
}

exports.post_create_user = function(req, res) {
    
    let user = new User();

    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = user.generateHash(req.body.password);
    user.role = req.body.role;
    user.passwordIsExpired = true;

    user.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('User saved!');
            res.redirect('/settings/users');
        }
    })

}

exports.delete_user = function(req,res) {
    User.findOneAndDelete({ _id: req.query._id }, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/settings/users')
        }
    })
}
