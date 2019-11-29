const Client = require('../models/Client');
const Employee = require('../models/Employee');

module.exports = {
  async authenticate(req, res) {
    const { email, password, type_user } = req.body;

    if (type_user && type_user.toLowerCase() === "client") {
      Client.findOne({ email, password }).then((client) => {
        if (client) {
          return res.json(client);
        }
        return res.json(client);
      });
    } else if (type_user && type_user.toLowerCase() === "employee") {
      Employee.findOne({ email, password }).then((employee) => {
        if (employee) {
          return res.json(employee);
        }
        return res.json(employee);
      });
    }
  }
}