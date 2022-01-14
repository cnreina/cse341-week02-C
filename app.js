const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/errorController');

// app
const app = express();

// app.use(cors(corsOptions));

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
mongoose.connect('mongodb+srv://cnreina:mPass_3762@cluster0.gcajw.mongodb.net/shop?retryWrites=true&w=majority')
.then(result => {
  app.listen(3000);
})
.catch(err => {
  console.log(err);
});
