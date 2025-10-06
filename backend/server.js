const path = require("path");
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const contactRoutes = require('./routes/contact');
const certRoutes = require('./routes/certificates');
const experienceRoutes = require('./routes/experienceRoutes');

const app = express();
// The _dirname variable and path.resolve() are no longer needed 
// since we removed the static file serving logic.

app.use(express.json());
// Configure CORS to allow access from any origin ('*') for the API, 
// which is standard when deploying an API separately from the client.
app.use(cors({
  origin: process.env.FRONTEND_URL || "*" 
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

// API routes - These are the primary functions of your deployed backend
app.use('/api/contact', contactRoutes);
app.use('/api/certificates', certRoutes);
app.use('/api/experience', experienceRoutes);


// Default route (API health check)
// This route now catches any request that didn't match an API route above.
// It confirms that the backend server is running and accessible.
app.get('/', (req, res) => {
  res.send({ status: 'ok', msg: 'Portfolio backend running successfully' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
