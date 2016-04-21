# Node.js - Aula 03 - Exercício
**user:** [fauker](https://github.com/fauker)

**autor:** LUCAS DA SILVA MOREIRA

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
A requisição adicional é feita porque o **Chrome** está tentando buscar
o `favicon.ico` da aplicação.

## Qual a DIFERENÇA entre o GET e o POST?
De uma forma bem simples: `GET` é utilizado para requisitar dados sem
alterá-los no servidor, enquanto `POST` é utilizado para inserir algo no
servidor. Por exemplo: uma página de pesquisa deve utilizar `GET`,
enquanto um formulário de cadastro deve utilizar `POST` para submeter as
informações ao servidor.

Comparação:

**Histórico**:
- GET: Os parâmetros são salvos no browser porque eles fazem parte da
  URL.
- POST: Os parâmetros não são salvos no browser.

**Favoritos no navegador**:
- GET: Pode ser adicionado em favoritos, no navegador.
- POST: Não pode ser adicionado em favoritos, no navegador.

**Tipos de dados suportados**:
- GET: application/x-www-form-urlencoded
- POST: multipart/form-data ou application/x-www-form-urlencoded

**Cache**:
- GET: Pode ser cacheado
- POST: Não pode ser cacheado

**Restrições no formato dos dados**:
- GET: Apenas caracteres ASCII são permitidos
- POST: Sem restrições. Arquivos binátios também são permitidos.

**Usabilidade/Visibilidade**:
- GET: Todas as informações são visíveis na URL, portanto não é
  recomendado utilizar este método para enviar informações delicadas,
  senhas etc.
- POST: As informações são enviadas junto com a requisição HTTP,
  portando nada fica visível na URL. Sendo assim, este método é o
  recomendado para o envio de informações delicadas/senhas para o
  servidor.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

**POST**

```
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'Lucas Moreira'
      , type: 'student'
      });
console.log("postData", postData);
console.log("Tamanho do postData", postData.length);
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'POST'
      , path: '/api/pokemons'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
      };

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.write(postData);
req.end();
```

**Resposta**:

```
postData name=Lucas%20Moreira&type=student
Tamanho do postData 33
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"82","etag":"W/\"52-aF+iYI+9imnEnoNvlnzrzQ\"","date":"Thu, 21 Apr 2016 13:05:28 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Lucas Moreira","type":"student","_id":"5718d018cdd40a1100cf59a1"}
```

**PUT**

```
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'fauker'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'PUT'
      , path: '/api/pokemons/5718d018cdd40a1100cf59a1'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
      };

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.write(postData);
req.end();
```

**Resposta:**

```
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-MWWv9jU4vqlcL2ixcMLOUQ\"","date":"Thu, 21 Apr 2016 13:12:31 GMT","via":"1.1 vegur"}
```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

**DELETE**

```
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
```

***Resposta***

```
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Thu, 21 Apr 2016 13:16:17 GMT","via":"1.1 vegur"}
```
## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

