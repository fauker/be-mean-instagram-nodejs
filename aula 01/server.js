// server.js
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: '1.0'
      , name: 'Be MEAN'
      , returned_at: date
      }
    , ERROR = {
        message: "Não encontrado!"
      }
    ;

http.createServer(function(request, response){
  if (request.url === '/api/v1') {
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(JSON.stringify(SUCCESS));
      
  } else {
      response.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
      response.write(JSON.stringify(ERROR));
  }
  response.end();      
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});

