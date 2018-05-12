const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true

    },
    freeTables: {
        type: Number,
        require: true
    },

}, {
    timestamps: true
});



module.exports = mongoose.model('restaurant', restaurantSchema);