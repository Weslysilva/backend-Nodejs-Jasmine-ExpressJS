var express = require('express');
const auth = require('../../modules/auth');
var router = express.Router();

const authService = require('../../services/authServices')

//TODO Verificar se o usuario esta autenticado
const middlewareVerifyToken = router.use(function(req, res, next) {
   
    let token = req.cookies.tk;

    if(!token){
      res.status(401).json({
        message: "Token is missing"
      });
      return;
    }
    
       
    authService.authenticatedUser(token).then(tokenIsValid=>{

        if(tokenIsValid){
          res.cookie('tk',tokenIsValid)
          next();
        }


      }).catch(error=>{

        res.status(401).json({
          message: "Token or RefreshToken Invalid or Expiried"
        });
        return;

      })
        
  });


module.exports = middlewareVerifyToken