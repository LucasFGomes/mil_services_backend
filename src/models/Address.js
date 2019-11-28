const { Schema, model } = require('mongoose');

const Address = new Schema({
  zip_code: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  complement: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

module.exports = model('addresses', Address);