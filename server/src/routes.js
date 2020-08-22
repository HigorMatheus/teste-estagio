const express = require('express');
const routes = express.Router();

const UserController = require('./Controller/UserController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

module.exports = routes;