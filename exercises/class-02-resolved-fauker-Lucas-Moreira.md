# Node.js - Aula 02 - Exercício
**user:** [fauker](https://github.com/fauker)

**autor:** LUCAS DA SILVA MOREIRA

## Quais são os 4 verbos que utilizamos para o CRUD?
`GET`, `POST`, `PUT`, `DELETE`

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Para padronizar o retorno do servidor.

1xx - Informational

![](https://http.cat/100)

2xx - Successful

![](https://http.cat/200)

3xx - Redirection

![](https://http.cat/301)

4xx - Bad Request

![](https://http.cat/415)

5xx - Internal Server Error

![](https://http.cat/599)

## Explique o que é cada parâmetro da função recebida no `createServer`.
**Request:** É a informação chegando no servidor através do navegador.

**Response:** É a informação chegando no navegador através do servidor.

Principais propriedades de cada um deles:

**Request:**

- Corpo do HTTP response;
- Número de Bytes enviados pelo cliente;
- Coleção de cabeçalhos;
- Porta servidor utilizada;
- Estado do servidor;
- Nome do servidor;
- Verificação de conexão SSL.

**Response:**

- Corpo do request HTTP;
- Código da página para o corpo Request;
- Versão do HTTP;
- Caminho do HTTP;
- Tamanho do Buffer;

## O que é e para que serve a Querystring?


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
