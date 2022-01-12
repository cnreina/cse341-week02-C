const path = require('path');
const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

router.get('/', homeController.getIndex);

router.get('/item-list', homeController.getAllItems);

router.post('/filter-by-tag', homeController.filterItemsByTag);

module.exports = router;
