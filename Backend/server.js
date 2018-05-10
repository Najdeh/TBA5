const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const fs = require('fs')
const path = require('path');
const rfs = require('rotating-file-stream');
const helmet = require('helmet');
const cors = require('cors')

const userRouter = require('./route/user.route');
const User = require('./models/user')

const logDirectory = path.join(__dirname, 'log')
const db = require('./config/database.js');
const port = process.env.PORT || 8080;
const app = express();


//én részem

///--- engedélyezés az angularra
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


//eddig
//connect to MongoDb
mongoose.connect(db.uri, db.options,
    () => {
        console.log('MongoDB connected');
    },
    err => {
        console.log('MongoDB error:' + err);
    }
)



// Logging
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
let accessLogStream = rfs('acces.log', {
    interval: '1d',
    path: logDirectory
})

app.use(morgan('combined', {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode < 400
}))

//Security
app.use(helmet());

//enable CORS
app.use(cors({
    origin: 'http://localhost:4200'
}));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

//Cookie handling
app.use(cookieParser());

//Session handling
app.use(session({
    secret: 'YOUR_SECRET_KEY',
    resave: true,
    saveUninitialized: true
}));

//Passport Auth
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//User User router
app.use('/', userRouter)

//start server
app.listen(port);
console.log('The magic happens at port ' + port);