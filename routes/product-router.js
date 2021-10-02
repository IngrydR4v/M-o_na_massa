const express = require('express');

const routes = express.Router();

const productController = require('../controllers/product-controller');

routes.route('/')
    .get(productController.index)       //Retorna todos os registro
    .post(productController.create);    //Insere um registro

routes.route('/:id')
    .get(productController.show)        //Retorna registro com o ID do parâmetro
    .put(productController.update)      //Altera o registro com o ID do parâmetro
    .delete(productController.delete);   //Exclui o registro com o ID do parâmetro

module.exports = routes;