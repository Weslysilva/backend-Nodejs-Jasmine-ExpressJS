var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/auth', function(req, res, next) {
  httpRequestContext.get('foo')
  res.render('index', { title: 'Express' });
});

module.exports = router;
