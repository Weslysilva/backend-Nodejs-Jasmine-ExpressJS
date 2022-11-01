var express = require('express');
var router = express.Router();


//TODO Verificar se o usuario esta autenticado
const middlewareRolePermission = router.use(function(req, res, next) {
   
    let user = req.user

    
    console.log(user)
      
        
    
  });


module.exports = middlewareRolePermission