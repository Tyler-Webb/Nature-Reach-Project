const User = require('../models/user');

exports.get_users = function (req, res) {
    let currentUser = res.locals.user;
    if (currentUser.role === "Admin") {
        User.find({}, function (err, users) {
            if (err) {
                console.error(err);
            } else {
                res.render('settings/users/users', { data: users });
            }
        })
    } else {
        res.render('error');
        console.log('You do not have permission to this page.')
    }
}

exports.get_create_user = function (req, res) {
    let currentUser = res.locals.user;
    if (currentUser.role === "Admin") {
        res.render('settings/users/userscreate');
    } else {
        res.render('error');
        console.log('You do not have permission to this page.')
    }
}

exports.get_update_user = function (req, res) {
    let currentUser = res.locals.user;
    if (currentUser.role === "Admin") {
        User.findOne({ _id: req.query._id }, function (err, user) {

            if (err) {
                console.log(err);
            } else {
                res.render('settings/users/usersupdate', { data: user, title: 'Update User' });
            }
        });
    } else {
        res.render('error');
        console.log('You do not have permission to this page.')
    }
}

exports.post_update_user = function (req, res) {
    const user = new User();
    const updateData = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role
    };

    if (req.body.password) {
        updateData.password = user.generateHash(req.body.password);
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

exports.post_create_user = function (req, res) {

    let user = new User();

    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = user.generateHash(req.body.password);
    user.role = req.body.role;
    user.passwordIsExpired = true;

    user.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('User saved!');
            res.redirect('/settings/users');
        }
    })

}
exports.export_users = async function (req, res) {
    let csv = '';
    const users = await User.find({});


    users.forEach((user) => {
        csv += user.email + ',' +
            user.firstName + ',' +
            user.lastName + ',' +
            user.registerDate + ',' +
            user.role + '\r\n'
    });
    console.log(csv);
    res.header('Content-Type', 'text/csv');
    res.attachment('users.csv');
    return res.send(csv);
}

exports.delete_user = function (req, res) {
    User.findOneAndDelete({ _id: req.query._id }, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/settings/users')
        }
    })
}
