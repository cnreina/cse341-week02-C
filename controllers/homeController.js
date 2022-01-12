const Item = require('../models/itemClass');

let errorsArray = []
let itemTagsArray = []

exports.getIndex = (req, res, next) => {
  Item.getItems(items => {
    res.render('home/indexView', {
      items: items,
      pageTitle: 'Home',
      path: '/',
      errorsArray: errorsArray,
      errorsArrayCount : errorsArray.length,
      itemTagsArray: itemTagsArray,
      itemTagsArrayCount : itemTagsArray.length
    });
  });
};

exports.getAllItems = (req, res, next) => {
  Item.getItems(items => {
    res.render('home/item-listView', {
      items: items,
      pageTitle: 'All Items',
      path: '/item-list',
      errorsArray : errorsArray,
      errorsArrayCount : errorsArray.length,
      itemTagsArray: itemTagsArray,
      itemTagsArrayCount : itemTagsArray.length
    });
  });
};

exports.filterItemsByTag = (req, res, next) => {
  itemTagsArray = req.body.itemTag;
  if (itemTagsArray[0] === '') {
    itemTagsArray.length = 0
  };

  res.redirect('/item-list');
};
