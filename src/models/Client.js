const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const Client = new Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  url_document: {
    type: String,
  },
  service_id: {
    type: Schema.Types.ObjectId,
    ref: 'services',
    required: true,
  },
});

mongoose.model('clients', Client);
