// includes
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// routes
const homeRoutes = require('./routes/homeRoute');
const errorController = require('./controllers/errorController');

// app
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes);
app.use(errorController.get404);

// get mongoDB connection string
const fs = require('fs');
const filePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'mongodbstring.txt'
);

fs.readFile(filePath, (err, fileContent) => {
  if (err) {
    console.log(err);
  } else {
    // start server
    mongoose.connect(fileContent.toString())
    .then(result => {
      app.listen(3000);
    })
    .catch(err => {
      console.log(err);
    });
  }
});
