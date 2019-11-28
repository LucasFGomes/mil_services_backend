const Employee = require('../models/Employee');

module.exports = {
  async index(req, res) {
    Employee.find().then((employees) => {
      return res.json(employees);
    }).catch((error) => {
      return res.json({ error });
    })
  },

  async create(req, res) {

    const { name, cpf, phone, email, password, url_document, service_id } = req.body;

    Employee.findOne({ cpf }).then((employee) => {
      if (!employee) {
        const employee = {
          name,
          cpf,
          phone,
          email,
          password,
          url_document,
          service_id,
        };

        if (employee) {
          new Employee(employee).save().then((employee) => {
            console.log("Funcionário cadastrado com sucesso!");
            return res.json(employee);
          }).catch((error) => {
            console.log("Erro ao cadastrar o funcionário" + error);
            return res.json({ error });
          });
        }
        return;
      }
    }).catch((error) => {
      console.err("Erro: " + error);
      return res.status(500).json(error);
    });

  },

  async delete(req, res) {

    const { cpf, email, password } = req.body;

    Employee.deleteOne({ cpf, email, password }).then((result) => {
      if (result.deletedCount == 1) {
        return res.json({ message: "Deletado com sucesso" })
      }
      return res.json({ message: "Funcionário não encontrado!" })
    }).catch((error) => {
      return res.json({ error });
    });

  }
}