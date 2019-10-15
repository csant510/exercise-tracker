const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: String,
    model: String,
    year: Number,

  }, {
    timestamps: true,

});



const Car = mongoose.model('Car', carSchema);

module.exports = Car;