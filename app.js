
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/errorController');

const cors = require('cors')
const corsOptions = {
  origin: "https://cse341nodejsapp.herokuapp.com/",
  optionsSuccessStatus: 200
};

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://cnreina:mPass_3762@cluster0.gcajw.mongodb.net/shop?retryWrites=true&w=majority";

// app
const app = express();
app.use(cors(corsOptions));
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
