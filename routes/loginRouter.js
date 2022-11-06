var express = require('express');
var router = express.Router();


const authService = require('../services/authServices')

//TODO Rota post para criar o token

router.post('/', async function(req, res, next) {
  
  const {email=null, password=null} = req.body

  if(!email || !password){
    res.sendStatus(400).send();
   return;
  }

    let token = await authService.checkCredential(email, password);

    token ?
      res.cookie('tk',token).send() : res.sendStatus(401).sendJson({
         message: 'Authentication Error'
      })
  
})




//TODO Rota put para atualizar o refresh token
router.put('/', function(req, res, next) {
   
    res.send('respond with a resource');

});






module.exports = router;

