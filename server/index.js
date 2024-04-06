require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(express.static(buildPath));

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../toa-spa/build/index.html"),
    function (err) {   
        if (err) {
            res.status(500).send(err)
        }
    }
  );
});

app.use('/api', require('./routes/authRouter'));

const URI = process.env.MONGODB_URI;

if (!URI) {
    console.log('Error: MONGODB_URI is not set');
    process.exit(1);
}


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });

module.exports = app;