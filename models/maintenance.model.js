const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const maintenanceSchema = new Schema({
    model: { type: String, required: true },
    date: { type: Date, required: true },
    oil: {type: Boolean,},
    fluid: {type: Boolean,},
    tireRoation: {type: Boolean,},
    price: {type: Number,},
    description: { type: String, required: true },
  }, {
    timestamps: true,
  });  