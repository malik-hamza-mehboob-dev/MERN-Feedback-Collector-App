const express = require('express');
require('./services/passport');

const app = express();
require('./routes/authRouutes')(app);

// Dynamic Port to listen to for Heroku || localhost:5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);