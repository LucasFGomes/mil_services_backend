const Client = require('../models/Client');
const Address = require('../models/Address');

module.exports = {

  async index(req, res) {
    Client.find().then((clients) => {
      return res.json(clients);
    }).catch((error) => {
      console.log("Erro ao listar os clientes!")
      return res.json(error);
    });
  },

  async create(req, res) {
    const { name, cpf, phone, email, password, url_document, service_id, address } = req.body;

    if (address) {
      const newAddress = await new Address(address).save().then((address) => {
        return address;
      }).catch((error) => {
        return res.json({ error });
      });

      Client.findOne({ cpf }).then((client) => {
        if (!client) {
          const client = {
            name,
            cpf,
            phone,
            email,
            password,
            url_document,
            service_id,
            address_id: newAddress._id,
          };

          if (client) {
            new Client(client).save().then((client) => {
              console.log("Cliente cadastrado com sucesso!");
              return res.json(client);
            }).catch((error) => {
              console.log("Erro ao cadastrar o cliente" + error);
              return res.json({ error });
            });
          }
          return;
        }
        return res.status(400).send("Cliente já está cadastrado no sistema!");
      }).catch((error) => {
        console.err("Erro: " + error);
        return res.status(500).json(error);
      });
    }
  },

  async delete(req, res) {

    const { cpf, email, password } = req.body;

    Client.deleteOne({ cpf, email, password }).then((result) => {
      if (result.deletedCount == 1) {
        return res.json({ message: "Deletado com sucesso" })
      }
      return res.json({ message: "Cliente não encontrado!" })
    }).catch((error) => {
      return res.json({ error });
    });

  }
}