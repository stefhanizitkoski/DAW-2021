const express = require('express');

const routes = express.Router();

const groupController = require('../controllers/estado-controller');

routes.route('/')
    .get(groupController.index)       
    .post(groupController.create);   

routes.route('/:id')
    .get(groupController.show)        
    .put(groupController.update)     
    .delete(groupController.delete);  

module.exports = routes;