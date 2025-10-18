
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const contactRoutes = require("./backend/routes/contact");
const certRoutes = require("./backend/routes/certificates");
const experienceRoutes = require("./backend/routes/experienceRoutes");


const app = express();


app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*", 
  })
);


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));


app.use("/api/contact", contactRoutes);
app.use("/api/certificates", certRoutes);
app.use("/api/experience", experienceRoutes);

// Health check route (optional)
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend running fine ✅" });
});

// ------------------------------
// 🌐 Serve React Frontend (for Render Deployment)
// ------------------------------
const frontendPath = path.join(__dirname, "frontend", "build");

// Serve all static files (HTML, CSS, JS)
app.use(express.static(frontendPath));

// Handle all other routes by serving index.html (React Router fallback)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(frontendPath, "index.html"));
});

// ------------------------------
// 🚀 Start Server
// ------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running successfully on port ${PORT}`);
});
