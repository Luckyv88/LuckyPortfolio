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
// since we will use __dirname and relative path navigation below.

app.use(express.json());
// Configure CORS to allow access from any origin ('*') for the API.
// Note: This needs to be broad because the frontend is served by this same server in production.
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


// =========================================================================
// !!! CRITICAL LOGIC FOR FULL-STACK DEPLOYMENT !!!
// This block serves the built React app when NODE_ENV is 'production'.
// =========================================================================
if (process.env.NODE_ENV === 'production') {
    // 1. Calculate the robust absolute path to the 'frontend/build' folder.
    // __dirname points to '.../backend'. We navigate up ('..') to the root, then down.
    const frontendPath = path.join(__dirname, '..', 'frontend', 'build');
    
    // 2. Serve static frontend build files (JS, CSS, images)
    app.use(express.static(frontendPath));

    // 3. Catch-all route: Serve index.html for all other GET requests.
    // This is required for client-side routing (React Router).
    app.get('*', (req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
} else {
    // Default route (API health check) for non-production environments
    app.get('/', (req, res) => {
      res.send({ status: 'ok', msg: 'Portfolio backend running successfully' });
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
