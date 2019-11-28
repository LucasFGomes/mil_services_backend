const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://api:1234lucas@cluster0-66m94.mongodb.net/db_mil_services?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
  console.log('Conectado ao mongodb...');
}).catch((erro) => {
  console.log('Erro ao conectar: ' + erro);
});

app.use(cors());
app.use(routes);

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}...`);
})