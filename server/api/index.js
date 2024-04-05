require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({ message: 'Welcome to the server' });
});

// Temporarily comment out the auth router usage
// app.use('/api', require('./routes/authRouter'));

module.exports = app;