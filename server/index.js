const express = require('express');
const app = express();

// Route Handler
app.get('/',(req,res)=>{
    res.send({hi:'there are you !'});
});

// Dynamic Port to listen to for Heroku || localhost:5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);