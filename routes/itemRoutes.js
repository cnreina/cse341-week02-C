const path = require('path');
const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();

router.get('/', itemController.getIndex);
router.get('/item-list', itemController.getAllItems);
router.post('/filter-by-tag', itemController.filterItemsByTag);

module.exports = router;
