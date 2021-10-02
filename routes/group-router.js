const express = require('express');

const routes = express.Router();

const groupController = require('../controllers/group-controller');

routes.route('/')
    .get(groupController.index)       //Retorna todos os registro
    .post(groupController.create);    //Insere um registro

routes.route('/:id')
    .get(groupController.show)        //Retorna registro com o ID do parâmetro
    .put(groupController.update)      //Altera o registro com o ID do parâmetro
    .delete(groupController.delete);   //Exclui o registro com o ID do parâmetro

module.exports = routes;