const Bird = require('../models/bird');
const Food = require('../models/food');
const Medication = require('../models/medication');

// Main get pages

exports.get_settings = function (req, res) {
    res.render('settings/settings', { title: 'Settings' });
}

exports.get_meds_edit = function (req, res) {
    res.render('settings/meds/medsedit', { title: 'Medicines Edit' });
}

exports.get_birds_edit = function (req, res) {
    res.render('settings/birds/birdsedit', { title: 'Birds Edit' });
}

exports.get_foods_edit = function (req, res) {
    res.render('settings/foods/foodsedit', { title: 'Foods Edit' });
}

// Create get pages

exports.get_create_bird = function (req, res) {
    res.render('settings/birds/birdscreate', { title: 'Create Bird' });
}

exports.get_create_food = function (req, res) {
    res.render('settings/foods/foodscreate', { title: 'Create Food' });
}

exports.get_create_medication = function (req, res) {
    res.render('settings/meds/medscreate', { title: 'Create Meds' });
}

// Update get pages

exports.get_birds_update = function (req, res) {
    res.render('settings/birds/birdsupdate', { title: 'Update Bird' });
}
exports.get_foods_update = function (req, res) {
    res.render('settings/foods/foodsupdate', { title: 'Update Food' });
}
exports.get_meds_update = function (req, res) {
    res.render('settings/meds/medsupdate', { title: 'Update Meds' });
}

// Exports for data

exports.get_birds = function(req, res) {
    Bird.find({}, function (err, birds) {
        if (err) {
            console.error(err);
        } else {
            res.render('settings/birds/birds', { data: birds });
        }
    })
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
            res.render('settings/birds/birds', { data: birds });
        }
    })
}

exports.get_foods = function(req, res) {
    Food.find({}, function (err, foods) {
        if (err) {
            console.error(err);
        } else {
            res.render('settings/foods/foods', { data: foods });
        }
    })
}

exports.get_meds = function(req, res) {
    Medication.find({}, function (err, meds) {
        if (err) {
            console.error(err);
        } else {
            res.render('settings/meds/meds', { data: meds });
        }
    })
}