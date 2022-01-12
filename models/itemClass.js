const fs = require('fs');
const path = require('path');
const filePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'items.json'
);

module.exports = class ItemClass {
  constructor(id, tags, imageUrl, price, name, description) {
    this.id = id;
    this.tags = tags;
    this.imageUrl = imageUrl;
    this.price = price;
    this.name = name;
    this.description = description;
  }

  static getItems(callBack) {
    getItemsFromFile(callBack);
  }

  static getItemsByTag(tags, callBack) {
    getItemsFromFile(items => {
      const item = items.find(currentItem => currentItem.tags === tags);
      callBack(item);
    });
  }

};

const getItemsFromFile = callBack => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      callBack([]);
    } else {
      this.id = Math.random().toString();
      callBack(JSON.parse(fileContent));
    }
  });
};
