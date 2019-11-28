const Service = require('../models/Service');

module.exports = {
  async index(req, res) {
    Service.find().then((services) => {
      return res.json(services);
    }).catch((error) => {
      return res.json({ error });
    })
  },

  async create(req, res) {
    const nameService = req.body.name;
    const service = { name: nameService };

    new Service(service).save().then((service) => {
      return res.json(service);
    }).catch((error) => {
      return res.json(error);
    });
  }
}