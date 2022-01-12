
const path = require('path');

// express
const express = require('express');
const bodyParser = require('body-parser');
// controller
const errorController = require('./controllers/errorController');
// app
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
// routes
const homeRoutes = require('./routes/homeRoute');
app.use(bodyParser.urlencoded({ extended: false }));
// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes);
app.use(errorController.get404);

// start server
app.listen(3000);
