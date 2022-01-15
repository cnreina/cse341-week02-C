/*	Carlos N Reina
  cnreina@gmail.com
  cnreina.com
*/

/* Heroku with mongoDB
  Every Heroku app has its own Heroku-hosted Git repo.
  Deploy new versions by pushing code changes to this repo.
  Local Git repo needs to know the URL of the Heroku-hosted repo.

  Heroku's architecture requires the use of config vars.
  Express calls .listen(PORT), which makes use of the Heroku config var.
  Using || to initialize PORT's value to the first defined variable.
  When app is run on Heroku, process.env.PORT is defined and passed to .listen().
  Running locally, the config var is undefined and the localhost port is passed to .listen().

  Commands:
  sudo npm install -g heroku
  heroku plugins:install heroku-repo
  heroku login
  heroku git:remote -a cse341nodejsapp
  git push heroku master:main
  heroku ps:scale web=1

  heroku logs --tail
  heroku repo:reset --app appname

  https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
  https://devcenter.heroku.com/articles/heroku-cli#download-and-install
  https://devcenter.heroku.com/articles/git#tracking-your-app-in-git
  https://devcenter.heroku.com/articles/deploying-nodejs

*/

// includes
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const cors = require('cors')

const LOCAL_PORT = 3000;
const HEROKU_APP_URL = "https://cse341nodejsapp.herokuapp.com/";
const corsOptions = { origin: HEROKU_APP_URL, optionsSuccessStatus: 200 };

// routes
const homeRoutes = require('./routes/homeRoute');
const errorController = require('./controllers/errorController');

// app
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes);
app.use(errorController.get404);
app.use(cors(corsOptions));

// prepare mongoDB connection
const filePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'mongodbstring.txt'
);
fs.readFile(filePath, (err, fileContent) => {
  if (err) {
    console.log(err);
  } else {
    // START SERVER
    const mongoDbOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      family: 4
    };
    // Use || to initialize PORT's value to the first defined variable.
    // When app is run on Heroku, process.env.PORT is defined and passed to .listen().
    const MONGODB_URL = process.env.MONGODB_URL || fileContent.toString();
    const PORT = process.env.PORT || LOCAL_PORT;
    mongoose.connect(MONGODB_URL, mongoDbOptions)
    .then(result => {
      app.listen(PORT);
    })
    .catch(err => {
      console.log(err);
    });
  }
});
