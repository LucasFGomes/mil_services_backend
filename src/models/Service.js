const { Schema, model } = require('mongoose');

const Service = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model('services', Service);