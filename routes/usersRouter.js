var express = require('express');
var router = express.Router();
var UserService = require('../services/UserService')
var MidToken = require('./middlewares/midToken')
var Role = require('./middlewares/midRole')

router.get('/', MidToken, function(req, res, next) {
  
  UserService.findOne(req.body.id).then(user=>{
    
    res.send(user);

  }).catch(error=>{

    res.send('user is not found');

  })

  
  
});

router.get('/all', MidToken, Role, function(req, res, next) {

  
  UserService.findAll().then(users=>{
    
    res.send(users);

  }).catch(error=>{

    res.send('users is empty');

  })

  
});


router.post('/', function(req, res, next) {
  
  UserService.create(req.body).then(user=>{
    
    res.send(user);

  }).catch(error=>{

    res.send('user is not found');

  })
  
  
});



router.put('/', function(req, res, next) {


  UserService.update(req.body).then(user=>{
    
    res.send(user);

  }).catch(error=>{

    res.send('user is not found');

  })


});



//O método DELETE remove um recurso específico.
router.delete('/', function(req, res, next) {
  
  UserService.delete(req.body.id).then(deleted=>{


    if(deleted){
      
        res.send(true);
    
    }else{
      
      res.send('user is not found');
      
    }


  }).catch(error=>{

    res.sendStatus(500).send(error);

  })

});


module.exports = router;
