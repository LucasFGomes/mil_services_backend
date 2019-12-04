const { Schema, model } = require('mongoose');

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
  },
  address_id: {
    type: Schema.Types.ObjectId,
    ref: 'addresses',
    required: true,
  },
});

module.exports = model('clients', Client);
