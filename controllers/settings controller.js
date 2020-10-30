const Bird = require('../models/bird');
const Food = require('../models/food');
const Medication = require('../models/medication');
const Med = require('../models/medication');

exports.get_settings = function (req, res) {
    res.render('settings/settings', { title: 'Settings' });
}

exports.get_med_settings = function (req, res) {
    res.render('settings/meds', { title: 'Medicines settings' });
}

exports.get_foods_settings = function (req, res) {
    res.render('settings/foods', { title: 'Foods settings' });
}

exports.get_meds_edit = function (req, res) {
    res.render('settings/medsedit', { title: 'Medicines Edit' });
}

exports.get_birds_edit = function (req, res) {
    res.render('settings/birdsedit', { title: 'Birds Edit' });
}

exports.get_foods_edit = function (req, res) {
    res.render('settings/foodsedit', { title: 'Foods Edit' });
}

exports.get_create_bird = function (req, res) {
    res.render('settings/birdscreate', { title: 'Create Bird' });
}

exports.get_create_food = function (req, res) {
    res.render('settings/foodscreate', { title: 'Create Food' });
}

exports.get_create_medication = function (req, res) {
    res.render('settings/medscreate', { title: 'Create Meds' });
}

exports.post_create_bird = function (req, res) {

    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    let newBird = new Bird({
        species: req.body.species,
        nickName: req.body.nickname,
        enabled: enabled
    });

    newBird.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Bird saved');
        }
    })

}

exports.post_create_food = function (req, res) {
    let newFood = new Food({
        name: req.body.nameoffood
    });

    newFood.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Food saved');
        }
    })


}

exports.post_create_med = function (req, res) {
    let newMed = new Medication({
        name: req.body.nameofmedication
    });

    newMed.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Medication saved');
        }
    })
}

exports.get_birds = function(req, res) {
    Bird.find({}, function (err, birds) {
        if (err) {
            console.error(err);
        } else {
            res.render('settings/birds', { data: birds });
        }
    })
}