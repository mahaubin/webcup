const express = require("express");
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const app = express();

// recuperer les contenus de notre body
app.use(express.json());

//connection à la base de données
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose")
});


module.exports= app;