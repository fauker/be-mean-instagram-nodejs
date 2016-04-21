'use strict';

const http = require('http');
const querystring = require('querystring');
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'delete'
      , path: '/api/pokemons/5718d018cdd40a1100cf59a1'
      , headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      };

function callback(res) {
  console.log('status: ' + res.statuscode);
  console.log('headers: ' + json.stringify(res.headers));

  let data = '';

  res.setencoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('erroooo: ' + e.message);
});
req.end();
