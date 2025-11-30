require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const serverless = require('serverless-http');

const connectDB = require('./config/db');
const swaggerDocs = require('./swagger');

// Initialize
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (works on local + Vercel)
connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes (ONLY workout)
app.use('/api/v1/workout', require('./routes/workoutRoutes'));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Fitness Tracker API!');
});

// Run only in LOCAL mode
// ===============================
// Add this in your .env if needed:
// LOCAL=true
// ===============================
if (process.env.LOCAL === "true") {
  app.listen(PORT, () => {
    console.log(`🚀 Local server running at http://localhost:${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
