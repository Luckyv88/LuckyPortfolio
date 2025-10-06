const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST save contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = new Contact({ name, email, phone, message });
    await contact.save();
    res.status(201).json({ msg: 'Contact saved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET all contacts (protected in real app; here for admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
