const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');

// simple seed route to add certificate (optional)
router.post('/add', async (req, res) => {
  try {
    console.log("Received body:", req.body); // 🔹 debug line

    const { title, description, fileUrl, issuedBy, date } = req.body;

    if (!title || !fileUrl) {
      return res.status(400).json({ error: "title and fileUrl are required" });
    }

    const cert = new Certificate({ title, description, fileUrl, issuedBy, date });
    await cert.save();

    res.json({ msg: "Certificate added", cert });
  } catch (err) {
    console.error(err); // 🔹 log the real error
    res.status(500).json({ error: "Server error" });
  }
});


router.get('/', async (req, res) => {
  try {
    const certs = await Certificate.find().sort({ date: -1 });
    res.json(certs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cert = await Certificate.findById(req.params.id);
    if (!cert) return res.status(404).json({ error: 'Not found' });
    res.json(cert);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const cert = await Certificate.findByIdAndDelete(req.params.id);
    if (!cert) return res.status(404).json({ error: 'Certificate not found' });

    res.json({ msg: 'Certificate deleted successfully', deletedCert: cert });
  } catch (err) {
    console.error("Error deleting certificate:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
