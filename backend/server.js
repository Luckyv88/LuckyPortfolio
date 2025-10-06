const path = require("path");
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const contactRoutes = require('./routes/contact');
const certRoutes = require('./routes/certificates');
const experienceRoutes = require('./routes/experienceRoutes');

const app = express();
const _dirname = path.resolve();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000"
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err.message);
});

// API routes
app.use('/api/contact', contactRoutes);
app.use('/api/certificates', certRoutes);
app.use('/api/experience', experienceRoutes);

// Serve React frontend build
app.use(express.static(path.join(_dirname, "frontend", "build")));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
});


// Default route
app.get('/', (req, res) => {
  res.send({ status: 'ok', msg: 'Portfolio backend running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
