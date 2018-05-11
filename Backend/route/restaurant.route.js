const resturantRoute = require('express').Router();
const Restaurant = require('../controller/restaurant.controller');

resturantRoute.post('/new', Restaurant.addNewRestaurant);
/*resturantRoute.post('/register', Restaurant.register);
resturantRoute.post('/login', passport.authenticate('local'), Restaurant.login);
resturantRoute.get('/logout', Restaurant.logout)*/


module.exports = resturantRoute;