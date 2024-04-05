// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(cookieParser());

// app.get("/", (req, res) => {
//     res.json({ message: 'Welcome to the server' });
// });

// app.use('/api', require('./routes/authRouter'));

// const URI = process.env.MONGODB_URL;
// mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(3000, () => console.log("Server ready on port 3000."));
// })
// .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); // Exit the process if unable to connect to MongoDB
// });

// module.exports = app;

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;