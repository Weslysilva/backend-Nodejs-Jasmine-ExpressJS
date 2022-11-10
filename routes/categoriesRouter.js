var express = require('express');
var router = express.Router();
const midToken = require('./middlewares/midToken');
const CategoryService = require('../services/CategoriesService');

/* GET services listing. */
router.get('/', midToken, function (req, res, next) {

  CategoryService.findOne(req.body).then(category=>{

      if(category==null){
        res.send('category is not found');
        return;
      }

      res.send(category);

  }).catch(error=>{

    res.status(500).send();

  });

});


router.get('/all', midToken, function (req, res, next) {

  CategoryService.findAll().then(categories=>{
    
    res.send(categories);

  }).catch(error=>{

    res.send('category is empty');

  });

});


router.post('/', midToken, function (req, res, next) {

  CategoryService.create(req.body).then(category=>{
    
    res.send(category);

  }).catch(error=>{

    res.send('category is not found');

  })

});


router.put('/', midToken, function (req, res, next) {

  CategoryService.update(req.body).then(category=>{
    
    res.send(category);

  }).catch(error=>{

    res.send('category is not found');

  })

});

router.delete('/', midToken, function (req, res, next) {

  CategoryService.delete(req.body).then(deleted=>{


    if(deleted){
      
        res.send(true);
    
    }else{
      
        res.send('category is not found');
      
    }


  }).catch(error=>{

    res.sendStatus(500).send(error);

  })

});

module.exports = router;
