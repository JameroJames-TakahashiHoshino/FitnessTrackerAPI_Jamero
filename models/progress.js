const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  weight: { type: Number, required: true },
  bodyFat: { type: Number },
  muscleMass: { type: Number },
  recordedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
