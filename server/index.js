const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);
const app = express();
require('./routes/authRouutes')(app);

// Dynamic Port to listen to for Heroku || localhost:5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);