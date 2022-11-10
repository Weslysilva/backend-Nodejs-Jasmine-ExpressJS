var express = require('express');
var router = express.Router();
const midToken = require('./middlewares/midToken');
const ServiceService = require('../services/ServiceService');

/* GET services listing. */
router.get('/', midToken, function (req, res, next) {

  ServiceService.findOne(req.body).then(service=>{

      if(service==null){
        res.send('service is not found');
        return;
      }

      res.send(service);

  }).catch(error=>{

    res.status(500).send();

  });

});


router.get('/all', midToken, function (req, res, next) {

  ServiceService.findAll().then(services=>{
    
    res.send(services);

  }).catch(error=>{

    res.send('Service is empty');

  });

});


router.post('/', midToken, function (req, res, next) {

  ServiceService.create(req.body).then(service=>{
    
    res.send(service);

  }).catch(error=>{

    res.send('service is not found');

  })

});


router.put('/', midToken, function (req, res, next) {

  ServiceService.update(req.body).then(service=>{
    
    res.send(service);

  }).catch(error=>{

    res.send('service is not found');

  })

});

router.delete('/', midToken, function (req, res, next) {

  ServiceService.delete(req.body).then(deleted=>{


    if(deleted){
      
        res.send(true);
    
    }else{
      
      res.send('service is not found');
      
    }


  }).catch(error=>{

    res.sendStatus(500).send(error);

  })

});

module.exports = router;
