const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    blogposts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blogpost'
    },
}, {
    timestamps: true
});

userSchema.plugin(passportLocalMongoose, {
    maxAttemps: 5,
    hashField: 'password'
});

module.exports = mongoose.model('User', userSchema);