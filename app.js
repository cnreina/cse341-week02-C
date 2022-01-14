// includes
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const cors = require('cors')


// routes
const homeRoutes = require('./routes/homeRoute');
const errorController = require('./controllers/errorController');

const corsOptions = {
  origin: "https://cse341nodejsapp.herokuapp.com/",
  optionsSuccessStatus: 200
};


// app
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes);
app.use(errorController.get404);
app.use(cors(corsOptions));


// connect mongoDB
const filePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'mongodbstring.txt'
);
fs.readFile(filePath, (err, fileContent) => {
  if (err) {
    console.log(err);
  } else {
    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      family: 4
    };

    // Heroku's architecture requires the use of config vars.
    // Express calls .listen(PORT), which makes use of the Heroku config var
    // Using || to initialize PORT's value to the first defined variable.
    // When app is run on Heroku, process.env.PORT is defined and passed to .listen().
    // Running locally, the config var is undefined and the localhost port is passed to .listen().
    const MONGODB_URL = process.env.MONGODB_URL || fileContent.toString();
    const PORT = process.env.PORT || 3000;

    // start server
    mongoose.connect(MONGODB_URL, options)
    .then(result => {
      app.listen(PORT);
    })
    .catch(err => {
      console.log(err);
    });
  }
});
