// Import dotenv to read .env file variables
require('dotenv').config();

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

// Create an instance of an Express application
const app = express();

// Middlewares
app.use(express.json()); // To parse JSON data from requests
app.use(cors()); // Enable CORS on server
app.use(cookieParser()); // Enable cookie parser

// Define static files path
const buildPath = path.resolve(__dirname, '../toa-spa/build');
app.use(express.static(buildPath));

// Serving up the build folder to all routes
app.get('*', (req, res) => {
  res.sendFile(
    // Updated the path
    path.resolve(__dirname, '../toa-spa/build/index.html'),
    function (err) {   
      if (err) {
        res.status(500).send(err)
      }
    }
  );
});

// Use the authentication routes for the /api endpoint
app.use('/api', require('./routes/authRouter'));

// Get DB Connection string from environment variables
const URI = process.env.MONGODB_URI;
if (!URI) {
    console.log('Error: MONGODB_URI is not set');
    process.exit(1);
}


// Start server and listen for requests on specific port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

// Connect to MongoDB using Mongoose
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    // Log success message on successful connection
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    // Log error if unable to connect to MongoDB
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });

module.exports = app; // Export app for importing in other files/modules