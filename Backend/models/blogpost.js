const mongoose = require('mongoose');

const blogpostSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },

}, {
    timestamps: true
});



module.exports = mongoose.model('Blogpost', blogpostSchema);