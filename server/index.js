require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../toa-spa/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    )
});

app.use('/api', require('./routes/authRouter'));

const URI = process.env.MONGODB_URL;

if (!URI) {
    console.log('Error: MONGODB_URI is not set');
    process.exit(1);
}

// Attempt to connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Start Express server after successful database connection
    app.listen(process.env.PORT || 3000, () => console.log("Server ready on port 3000."));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });


module.exports = app;

