const Bird = require('../models/bird');
const Food = require('../models/food');
const Medication = require('../models/medication');
const User = require('../models/user');

// Main get pages


exports.get_settings = function (req, res) {
    if (locals.user.role === "Admin") { 
    res.render('settings/settings', { title: 'Settings' });
    } 
}

// Create get pages

exports.get_create_bird = function (req, res) {
    if (locals.user.role === "Admin") { 
    res.render('settings/birds/birdscreate', { title: 'Create Bird' });
    }
}

exports.get_create_food = function (req, res) {
    if (locals.user.role === "Admin") { 
    res.render('settings/foods/foodscreate', { title: 'Create Food' });
    }
}

exports.get_create_medication = function (req, res) {
    if (locals.user.role === "Admin") { 
    res.render('settings/meds/medscreate', { title: 'Create Meds' });
    }
}

// Update get pages

exports.get_birds_update = function (req, res) {
    if (locals.user.role === "Admin") { 
    Bird.findOne({ _id: req.query._id }, function (err, bird) {

        if (err) {
            console.log(err);
        } else {
            res.render('settings/birds/birdsupdate', { data: bird, title: 'Update Bird' });
        }
    });
}
}

exports.get_foods_update = function (req, res) {
    if (locals.user.role === "Admin") { 
    Food.findOne({ _id: req.query._id }, function (err, food) {

        if (err) {
            console.log(err);
        } else {
            res.render('settings/foods/foodsupdate', { data: food, title: 'Update Food' });
        }
    });
    }
}

exports.get_meds_update = function (req, res) {
    if (locals.user.role === "Admin") { 
    Medication.findOne({ _id: req.query._id }, function (err, med) {

        if (err) {
            console.log(err);
        } else {
            res.render('settings/meds/medsupdate', { data: med, title: 'Update Medication' });
        }
    });
    }
}

//Update post pages
exports.post_birds_update = function (req, res) {
    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    const updateData = {
        species: req.body.species,
        nickName: req.body.nickname,
        enabled: enabled
    };
    console.log(updateData);
    Bird.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/settings/birds');
        }
    });
};

exports.post_foods_update = function (req, res) {

    const updateData = {
        name: req.body.name
    };
    console.log(updateData);
    Food.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/settings/foods');
        }
    });
};

exports.post_meds_update = function (req, res) {
    
    const updateData = {
        name: req.body.name
    };
    console.log(updateData);
    Medication.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/settings/meds');
        }
    });
};

// Exports for data

exports.get_birds = function (req, res) {
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
            res.redirect('/settings/birds');
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
            res.redirect('/settings/foods');
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
            res.redirect('/settings/meds');
        }
    })
}

exports.get_birds = function (req, res) {
    if (locals.user.role === "Admin") { 
    Bird.find({}, function (err, birds) {
        if (err) {
            console.error(err);
        } else {
            res.render('settings/birds/birds', { data: birds });
        }
    })
    }
}

exports.get_foods = function (req, res) {
    if (locals.user.role === "Admin") { 
    Food.find({}, function (err, foods) {
        if (err) {
            console.error(err);
        } else {
            res.render('settings/foods/foods', { data: foods });
        }
    })
    }
}

exports.get_meds = function (req, res) {
    if (locals.user.role === "Admin") { 
    Medication.find({}, function (err, meds) {
        if (err) {
            console.error(err);
        } else {
            res.render('settings/meds/meds', { data: meds });
        }
    })
    }
}

exports.delete_bird = function (req, res) {
    Bird.findOneAndDelete({ _id: req.query._id }, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/settings/birds')
        }
    })
}

exports.delete_food = function (req, res) {
    Food.findOneAndDelete({ _id: req.query._id }, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/settings/foods')
        }
    })
}

exports.delete_med = function (req, res) {
    Medication.findOneAndDelete({ _id: req.query._id }, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/settings/meds')
        }
    })
}

exports.export_birds = async function (req, res) {
    let csv = '';
    const birds = await Bird.find({});
    console.log(birds);

    birds.forEach((bird) => {
        csv += bird.species + ',' +
            bird.nickName + ',' +
            bird.nickName + '\r\n'
    });
    console.log(csv);

    res.header('Content-Type', 'text/csv');
    res.attachment('birds.csv');
    return res.send(csv);
}

exports.export_meds = async function (req, res) {
    let csv = '';
    const meds = await Medication.find({});


    meds.forEach((med) => {
        csv += med.name + '\r\n'
    });
    console.log(csv);
    res.header('Content-Type', 'text/csv');
    res.attachment('meds.csv');
    return res.send(csv);
}

exports.export_foods = async function (req, res) {
    let csv = '';
    const foods = await Food.find({});


    foods.forEach((food) => {
        csv += food.name + '\r\n'
    });
    console.log(csv);
    res.header('Content-Type', 'text/csv');
    res.attachment('foods.csv');
    return res.send(csv);
}