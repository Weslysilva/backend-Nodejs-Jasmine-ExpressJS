var express = require('express');
var router = express.Router();

//O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.
router.get('/', function(req, res, next) {
  httpRequestContext.get('foo')
  res.send('respond with a resource');
});

//O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta.
router.head('/', function(req, res, next) {
  httpRequestContext.get('foo')
  res.send('respond with a resource');
});

//O método CONNECT estabelece um túnel para o servidor identificado pelo recurso de destino.
router.connect('/', function(req, res, next) {
  httpRequestContext.get('foo')
  res.send('respond with a resource');
});


//O método OPTIONS é usado para descrever as opções de comunicação com o recurso de destino.
router.options('/', function(req, res, next) {
  httpRequestContext.get('foo')
  res.send('respond with a resource');
});

//O método TRACE executa um teste de chamada loop-back junto com o caminho para o recurso de destino.
router.trace('/', function(req, res, next) {
  httpRequestContext.get('foo')
  res.send('respond with a resource');
});



//O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.
router.post('/', function(req, res, next) {
  httpRequestContext.get('foo')
  res.send('respond with a resource');
});

//O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.
router.put('/', function(req, res, next) {
  httpRequestContext.get('foo')
  res.send('respond with a resource');
});

//O método DELETE remove um recurso específico.
router.delete('/', function(req, res, next) {
  httpRequestContext.get('foo')
  res.send('respond with a resource');
});

//O método PATCH é utilizado para aplicar modificações parciais em um recurso.
router.patch('/', function(req, res, next) {
  httpRequestContext.get('foo')
  res.send('respond with a resource');
});

module.exports = router;
