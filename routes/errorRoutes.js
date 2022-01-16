const path = require('path');
const express = require('express');
const errorController = require('../controllers/errorController');
const router = express.Router();

router.use('/', errorController.error404);

module.exports = router;
