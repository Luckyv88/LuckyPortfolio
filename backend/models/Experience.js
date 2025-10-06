const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  organization: { type: String, required: true },
  position: { type: String, required: true },
  duration: { type: String, required: true }, // e.g. "Jan 2024 - May 2024"
  description: String,
  certificateUrl: String, // optional certificate image/pdf
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Experience', ExperienceSchema);
