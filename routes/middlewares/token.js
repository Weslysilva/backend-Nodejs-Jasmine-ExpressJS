var express = require('express');
var router = express.Router();



//TODO Verificar se o usuario esta autenticado
router.use('/', function(req, res, next) {
   
    res.send('respond with a resource');

  });


//TODO Verificar se o usuario tem permissão
router.use('/', function(req, res, next) {
  
  res.send('respond with a resource');

});

module.exports = router;