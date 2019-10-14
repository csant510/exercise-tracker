const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: { type: String, },

  }, {
    timestamps: true,

});



const Car = mongoose.model('Car', carSchema);

module.exports = Car;