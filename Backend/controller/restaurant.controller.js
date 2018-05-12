const restaurant = require('../models/restaurant');

module.exports = {
    addNewRestaurant: (req, res) => {
        restaurant.create(req.body, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    },

    getRestaurants: (req, res) => {
        restaurant.find({}, (err, restaurant) => {
            if (err) {
                res.send(err)
            }
            res.json(restaurant)
        })
    },

    addNewBooking: (req, res) => {
        restaurant.findByIdAndUpdate(req.params.id, req.body, (err, restaurant) => {
            if (err) {
                res.send(err)
            }
            res.json(restaurant)
        })
    },

};