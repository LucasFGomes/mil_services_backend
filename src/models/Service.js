const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Service = new Schema({
  name: {
    type: String,
    required: true,
  },
});

mongoose.model('services', Service);