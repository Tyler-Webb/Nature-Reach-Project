const feedings = require('../models/feeding');

exports.get_feedings = function(req, res) {
    feedings.find({}, function (err, feedings) {
        if (err) {
            console.error(err);
        } else {
            res.render('feedings/feedings', { data: feedings, title: 'Feedings'});
        }
    })
}

exports.get_feedings_update = function (req, res) {
    feedings.findOne({ _id: req.query._id }, function (err, feeding) {

        if (err) {
            console.log(err);
        } else {
            res.render('feedings/feedingsupdate', { data: feeding, title: 'Update Feeding' });
        }
    });
}

exports.get_feedings_create = function (req, res) {
    res.render('feedings/feedingscreate', { title: 'Create Feedings' });
}

exports.post_feedings_create = function (req, res) {
// dateFormat npm package is used here -- https://www.npmjs.com/package/dateformat
var dateFormat = require('dateformat');
var today=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
    let newFeedings = new feedings({
        Date: today,
        Bird: req.body.Bird,
        Food: req.body.Food,
        AmountFed:  req.body.AmountFed,
        LeftoverFood: req.body.LeftoverFood,
        Medicine: req.body.Medicine,
        GoalWeight: req.body.GoalWeight,
        ActualWeight: req.body.ActualWeight,
        WeatherConditions: req.body.WeatherConditions,
        Feeder: req.body.Feeder,
        Comments: req.body.Comments,   
    });
console.log(newFeedings)
    newFeedings.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Feeding saved');
            res.redirect('/feedings');
        }
    })
}

exports.post_feedings_update = function (req, res) {
    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    newFeedings.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Feedings saved');
            res.redirect('/feedings');
        }
    })
}

exports.delete_feedings = function(req, res) {
    feedings.findOneAndDelete({_id: req.query._id}, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/feedings')
        }
    })
}

exports.post_feedings_update = function (req, res) {
    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    const updateData = {
        Bird: req.body.Bird,
        Food: req.body.Food,
        Amountfed:  req.body.AmountFed,
        LeftoverFood: req.body.LeftoverFood,
        Medicine: req.body.Medicine,
        GoalWeight: req.body.GoalWeight,
        ActualWeight: req.body.ActualWeight,
        WeatherConditions: req.body.WeatherConditions,
        Feeder: req.body.Feeder,
        Comments: req.body.Comments,   
    };
    console.log(updateData);
    feedings.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/feedings');
        }
    });
};
