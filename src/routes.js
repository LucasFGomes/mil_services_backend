const express = require('express');
const routes = express.Router();

const AuthController = require('./controllers/AuthController');
const ServiceController = require('./controllers/ServiceController');
const ClientController = require('./controllers/ClientController');
const EmployeeController = require('./controllers/EmployeeController');

routes.get('/auth', AuthController.authenticate);

routes.get('/services', ServiceController.index);
routes.post('/services', ServiceController.create);

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.create);
routes.delete('/clients', ClientController.delete);

routes.get('/employees', EmployeeController.index);
routes.post('/employees', EmployeeController.create);
routes.delete('/employees', EmployeeController.delete);

module.exports = routes;

