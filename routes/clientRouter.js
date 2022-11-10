var express = require('express');
var router = express.Router();
const midToken = require('./middlewares/midToken')
const ClientService = require('../services/ClientService')

/* GET clients listing. */
router.get('/', midToken, function (req, res, next) {

  ClientService.findOne(req.body.id).then(client=>{
    
    res.send(client);

  }).catch(error=>{

    res.send('client is not found');

  });

});


router.get('/all', midToken, function (req, res, next) {

  ClientService.findAll().then(clients=>{
    
    res.send(clients);

  }).catch(error=>{

    res.send('Client is empty');

  });

});


router.post('/', midToken, function (req, res, next) {

  ClientService.create(req.body).then(client=>{
    
    res.send(client);

  }).catch(error=>{

    res.send('client is not found');

  })

});


router.put('/', midToken, function (req, res, next) {

  ClientService.update(req.body).then(client=>{
    
    res.send(client);

  }).catch(error=>{

    res.send('client is not found');

  })

});

router.delete('/', midToken, function (req, res, next) {

  ClientService.delete(req.body.id).then(deleted=>{


    if(deleted){
      
        res.send(true);
    
    }else{
      
      res.send('client is not found');
      
    }


  }).catch(error=>{

    res.sendStatus(500).send(error);

  })

});

module.exports = router;
