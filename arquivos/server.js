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
  switch (request.url) {
    case '/api/v1/pokemons/create':
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(JSON.stringify(SUCCESS));
      break;
    case '/api/v1/pokemons/read':
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(JSON.stringify(SUCCESS));
      break;
    case '/api/v1/pokemons/update':
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(JSON.stringify(SUCCESS));
      break;
    case '/api/v1/pokemons/delete':
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(JSON.stringify(SUCCESS));
      break;
    default:
      response.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
      response.write(JSON.stringify(ERROR));

    response.end();
  }
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});

