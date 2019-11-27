const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./models/Service');
const Service = mongoose.model('services');

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://api:1234lucas@cluster0-66m94.mongodb.net/db_mil_services?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
  console.log('Conectado ao mongodb...');
}).catch((erro) => {
  console.log('Erro ao conectar: ' + erro);
});

app.post('/services', (req, res) => {
  const nameService = req.body.name;

  let erros = [];

  if (!nameService) {
    erros.push({ texto: 'Nome inválido!' });
  }

  const service = { name: nameService };

  new Service(service).save().then((service) => {
    res.json(service);
  }).catch((error) => {
    res.json({ error });
  });
});


app.post('/clients', (req, res) => {

  const { name, cpf, phone, email, password, url_document, service_id } = req.body;

  res.json({ "name": "Lucas", "idade": 21 });
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}...`);
})