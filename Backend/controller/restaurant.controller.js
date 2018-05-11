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
    /*
        login: (req, res) => {
            res.redirect('/');
        },
        logout: (req, res) => {
            req.logout();
            res.redirect('/')
        }
    }
    */

    login: (req, res) => res.json({
        success: 'Sikeres belépés',
    }),

    logout: (req, res) => {
        req.logout();
        res.json({
            success: 'Sikeres kilépés',
        });
    },
};