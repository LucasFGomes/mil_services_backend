const mongoose = require('mongoose');
const Schema = mongoose.Schema();

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

mongoose.model('addresses', Address);