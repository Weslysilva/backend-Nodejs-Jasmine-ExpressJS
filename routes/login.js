var express = require('express');
var router = express.Router();


const authService = require('../services/authServices')

//TODO Rota post para criar o token

router.post('/', function(req, res, next) {
  
  
  authService.authenticatedUser(req.body)
  res.send();


});



//TODO Rota put para atualizar o refresh token
router.put('/', function(req, res, next) {
   
    res.send('respond with a resource');

});






module.exports = router;

