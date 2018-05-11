const passport = require('passport');
const userRoute = require('express').Router();
const User = require('../controller/user.controller');

userRoute.get('/', User.getUser);
userRoute.post('/register', User.register);
userRoute.post('/login', passport.authenticate('local'), User.login);
userRoute.get('/logout', User.logout)


module.exports = userRoute;