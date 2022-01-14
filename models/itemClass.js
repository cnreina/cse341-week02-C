const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Item', itemSchema);
