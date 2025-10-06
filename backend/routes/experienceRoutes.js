const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// ➕ Add experience
router.post('/add', async (req, res) => {
  try {
    const { organization, position, duration, description, certificateUrl } = req.body;

    if (!organization || !position || !duration) {
      return res.status(400).json({ error: "organization, position and duration are required" });
    }

    const exp = new Experience({ organization, position, duration, description, certificateUrl });
    await exp.save();

    res.json({ msg: "Experience added", exp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// 📜 Get all experiences
router.get('/', async (req, res) => {
  try {
    const exps = await Experience.find().sort({ date: -1 });
    res.json(exps);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 🔍 Get single experience
router.get('/:id', async (req, res) => {
  try {
    const exp = await Experience.findById(req.params.id);
    if (!exp) return res.status(404).json({ error: 'Not found' });
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ❌ Delete experience
router.delete('/:id', async (req, res) => {
  try {
    const exp = await Experience.findByIdAndDelete(req.params.id);
    if (!exp) return res.status(404).json({ error: 'Experience not found' });
    res.json({ msg: 'Experience deleted successfully', deletedExp: exp });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
