const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const maintenanceSchema = new Schema({
    model: { type: String, required: true },
    oilChang: {type: Boolean},
    tireRotaion: {type: Boolean},
    fluidCheck: {type: Boolean},
    tirePresure: {type: Boolean},
    description: { type: String, required: true }, 
    date: { type: Date, required: true },
  }, {
    timestamps: true,
  });