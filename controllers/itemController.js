// instantiate Item
const Item = require('../models/itemSchema');

let errorsArray = []
let itemTagsArray = []

exports.getIndex = (req, res, next) => {
  errorsArray.length = 0;
  Item.find()
    .then(items => {
      res.render('home/indexView', {
        items: items,
        pageTitle: 'Home',
        path: '/',
        errorsArray: errorsArray,
        errorsArrayCount : errorsArray.length,
        itemTagsArray: itemTagsArray,
        itemTagsArrayCount : itemTagsArray.length
      });
    })
    .catch(err => {
      console.log(err);
      errorsArray.push(err);
    });
};

exports.getAllItems = (req, res, next) => {
  errorsArray.length = 0;
  Item.find()
    .then(items => {
      res.render('home/itemsView', {
        items: items,
        pageTitle: 'All items',
        path: '/item-list',
        errorsArray : errorsArray,
        errorsArrayCount : errorsArray.length,
        itemTagsArray: itemTagsArray,
        itemTagsArrayCount : itemTagsArray.length
      });
    })
    .catch(err => {
      console.log(err);
      errorsArray.push(err);
    });
};

exports.filterItemsByTag = (req, res, next) => {
  errorsArray.length = 0;
  itemTagsArray = req.body.itemTag;
  if (itemTagsArray[0] === '') {
    itemTagsArray.length = 0
  };

  res.redirect('/item-list');
};
