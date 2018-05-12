const resturantRoute = require('express').Router();
const Restaurant = require('../controller/restaurant.controller');

resturantRoute.post('/new', Restaurant.addNewRestaurant);
/*resturantRoute.post('/register', Restaurant.register);*/
resturantRoute.put('/book/', Restaurant.addNewBooking);
resturantRoute.get('/', Restaurant.getRestaurants)


module.exports = resturantRoute;