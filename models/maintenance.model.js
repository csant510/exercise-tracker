const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const maintenanceSchema = new Schema({
    model: String,
    date: Date,
    oil: Boolean,
    fluid: Boolean,
    tireRoation: Boolean,
    price: Number,
    description: String,
  }, {
    timestamps: true,
  });  