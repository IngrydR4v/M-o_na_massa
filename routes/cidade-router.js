const express = require('express');

const routes = express.Router();

const cidadeController = require('../controllers/cidade-controller');

routes.route('/')
    .get(cidadeController.index)       //Retorna todos os registro
    .post(cidadeController.create);    //Insere um registro

routes.route('/:id')
    .get(cidadeController.show)        //Retorna registro com o ID do parâmetro
    .put(cidadeController.update)      //Altera o registro com o ID do parâmetro
    .delete(cidadeController.delete);   //Exclui o registro com o ID do parâmetro

module.exports = routes;