const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  fileUrl: { type: String, required: true },
  issuedBy: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Certificate', CertificateSchema);
