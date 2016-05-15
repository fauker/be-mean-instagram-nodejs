# be-mean-instagram-nodejs 
Guia de referência do conteúdo ministrado no módulo **Nodejs** do curso gratuíto [*Construa seu Instagram com MEAN*](http://dagora.net/be-mean/) da [Webschool.io](https://github.com/Webschool-io/)

#### Apresentação (Slides)
[Link para slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.ge8762dc44_0_0)

# Aula 01 

## Definição de Nodejs

**Nodejs** é um interpretador de JavaScript que funciona no servidor em cima do V8, que é o motor de JavaScript do Google, e foi criado em 2009 por Ryan Dahl. 

Sim... o Nodejs foi feito em cima do V8. Mas o que é V8 especificamente? Ele nada mais é que um interpretador de **JavaScript**, tipo uma Máquina Virtual, desenvolvido pelo Google e utilizado no Chrome, feito em C++ e open source. :metal: O trabalho dele é compilar o código JavaScript para o código nativo de máquina para então executá-lo. Ele levou velocidade dos códigos compilados para o JavaScript. Uma analogia: **JVM**.

## Single Thread

O Nodejs trabalha *apenas* com uma thread, mas outras podem ser criadas. Isso economiza muita memória e CPU. Para conseguir gerenciar tudo com apenas uma Thread, existe uma fila infinita que recebe todos os eventos emitidos pelo Nodejs e os executa assincronamente. Esse processo é chamado de **Event Loop**.

## I/O Async

Qualquer função do Nodejs, por padrão, é assíncrona. 

O termo I/O Async quer dizer que qualquer leitura ou escrita de dados não espera seu processo finalizar para continuar o script. Os processos ocorrem "paralelamente" à execução.

## API do Nodejs

```
- tem como base o Unix
- extensivamente modularizada
- extensivamente assíncrona
```

##### Links da Aula
- [Vídeo da Aula](https://www.youtube.com/watch?v=OgfO37F6mdg)
- [Exercício Solicitado](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-01.md)
- [Exercício Resolvido](https://github.com/fauker/be-mean-instagram-nodejs/blob/master/exercises/class-01-resolved-fauker-lucas-moreira.md)

# Aula 02

## HTTP

Verbos/métodos mais utilizados: `GET`, `POST`, `PUT`, `DELETE`

## Status Codes

São códigos de retorno HTTP padrão retornados pelo servidor.

1xx - Informational

2xx - Successful

3xx - Redirection

4xx - Client Error

5xx - Internal Server Error

## Função CreateServer

`http.createServer(function(request, response) {});`

Essa função recebe dois parâmetros: request e response.

Request: dados enviados do navegador para o servidor

Response: dados enviados do servidor para o navegador. É a resposta do
servidor.

## QueryString

A **QueryString** é um modelo clássico de manutenção do estado da página. Elas são nada mais do que conjuntos de pares/valores anexados a URL, em diversos sites hoje em dia vemos o uso delas.

Seu uso é simples, após a URL de determinada página, adicionamos o primeiro valor usando a seguinte sintaxe: **?Chave=Valor**. Para passarmos mais de um conjunto, os mesmos devem ser concatenados usando o caractere coringa &.


##### Links da Aula

- [Vídeo da Aula](https://www.youtube.com/watch?v=mDtNcosGgiU)
- [Exercício Solicitado](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-02.md)
- [Exercício Resolvido](https://github.com/fauker/be-mean-instagram-nodejs/blob/master/exercises/class-02-resolved-fauker-Lucas-Moreira.md)

# Aula 03

Um pouco de prática com o módulo **http**.

##### Links da Aula

- [Vídeo da Aula](https://www.youtube.com/watch?v=TpNofR3Axsk)
- [Exercício Solicitado](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-03.md)
- [Exercício Resolvido](https://github.com/fauker/be-mean-instagram-nodejs/blob/master/exercises/class-03-resolved-fauker-Lucas-Moreira.md)

# Aula 04

## Callbacks

Nas aulas de **callback** pude conhecer o estilo **continuation-passing
style** de programação**, em que passamos por parâmetro para nossa
função uma função de continuação, que é chamada de callback.

## FileSystem

É um módulo nativo do **Node.js**. Ele manipula os diretórios estaticos
do servidor.

Métodos:

- **writeFile**: escreve em um arquivo. Se o arquivo já existe, ele
  apenas escreve no arquivo existente. Caso o arquivo não exista, ele
  irá criar.

```
//forma síncrona

var write = fs.writeFileSync('./file.txt', 'oi');

//forma assíncrona

fs.writeFile('./file.txt', 'Oie', function(err, result) {
  if (err) throw err;
  console.log(result);
})
```

- **mkdir**: Manipular diretórios.

```
//cria um diretório
//assync
fs.mkdir('./euFuiCriadoComONode', function(err, result) {
  if (err) throw err;
  console.log(result);
});

//sync
fs.mkdir('./euFuiCriadoDeFormaAssincronaComONode');
```

- **open**:

```
// r -> flag de apenas leitura
fs.open('./hello.text', 'r', function(err, data) {})
```

- **readdir**: Lista os arquivos de um diretório.

```
fs.readdir('/.meusARquivos', function(err, files){});
```

- **readFile**: função para ler arquivos

```
fs.readFile('./arquivo', 'utf-8', function(err, data){});
```

- **rename**: renomeia um arquivo

```
fs.rename('./arquivo', './renomeado', function(err, data){});
```

##### Links da Aula

- [Vídeo da Aula](https://www.youtube.com/watch?v=f9SE7Y0qYEg)
- [Exercício Solicitado](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-04.md)
- [Exercício Resolvido](https://github.com/fauker/be-mean-instagram-nodejs/blob/master/exercises/class-04-resolved-fauker-Lucas-Moreira.md)

# Aula 05

## NPM

Gerenciador de pacotes do Node.js. O **NPM** trabalha através do arquivo
**package.json**, que contém várias informações e dependências do projeto.

- `npm init`: criará o arquivo **package.json**.

- `npm install`: instala as dependências listadas no package.json
  - `npm install -g ou -global *nome_do_modulo*`: instala globalmente
  - `npm install --save ou -S`: instala o módulo localmente e insere o
    mesmo no **package.json**
  - `npm i --save modulo@versao`: instala uma versão em específico
  - `npm i --production`: instala somente as dependências de produção
  - `npm i --save-dev`: instala dependências que serão usadas apenas em
    desenvolvimento
  - `npm i --dev`: instala somente as dependências que serão usadas no
    desenvolvimento
  - `npm i --save-optional`: instala dependências que não interferem no
    script do projeto

- `npm run`: irá executar scripts

## Objetos Globais

Podem ser chamados de qualquer módulo do Nodejs sem uma prévia
importação `require`.

Obs: o `nodejs` não possui variáveis globais. Uma variável criada dentro
de um arquivo só poderá ser acessada dentro deste arquivo.

Voltando aos **objetos globais**, estes são alguns exemplos:

`__dirname`, `__filename`, `new Buffer('teste')`, `setTimeout(function())`,

##### Links da Aula

- [Vídeo da Aula parte 01](https://www.youtube.com/watch?v=Kg4RovUQWeg)
- [Vídeo da Aula parte 02](https://www.youtube.com/watch?v=DD1XKyaq9NE)
- [Exercício Solicitado](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-05.md)
- [Exercício Resolvido](https://github.com/fauker/be-mean-instagram-nodejs/blob/master/exercises/class-05-resolved-fauker-Lucas-Moreira.md)

# Aula 06

## Mongoose

É um dos projetos mais utilizados quando trabalhamos
com o MongoDb, pois ele nos dá uma funcionalidade
que não possuímos nativamente, que são os **Schemas**.

### Schema

Como criar um Schema:

```
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/be-mean-instagram');
var Schema = mongoose.Schema;
// Criação do Schema
const pokemonSchema = new Schema({
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number
});
```

Após fazer a conexão com o MongoDB, através do função **connect**, são
disponibilizados os seguintes eventos:

```
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});
```

E para finalizar finalizar a conexão com o banco quando o processo do
Nodejs for finalizado:

```
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
```

### Default

Valor padrão que determinado atrituto da collection sempre terá.

### Tipos de Dados

Tipos de dados suportados pelo **mongoose**.

```
- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
```

### Validação

Antes de entrarmos em suas especificidades, vamos conhecer algumas regras:

- Validação é definida no tipo do campo, no Schema;
- Validação é uma peça interna do Middleware;
- Validação ocorre quando um documento tenta ser salvo, após ter sido definido com seu padrão;
- Validadores não são executados em valores indefinidos. A única exceção é a validação required;
- Validação é assincronamente recursiva, quando você chamar a função `save` do *Model*, a validação dos sub-documentos é executado também. Se ocorrer um erro ele será enviado para o *callback* da função `save`;
- Validação suporta a personalização completa.

#### Validação Padrão

Como já vimos anteriormente o Mongoose possui validações padrão para alguns tipos de campos, além disso todos os tipos também possui a validação de required. Porém alguns tipos possuem validadores mais específicos como:

- Number: possui os validadores de max e min
- String: possui os validadores de enum, match, maxlength e minlength

**Obs.: Na aula 08 a parte de validações personalizadas será abordada
melhor**

### Model

O Model é a implementação do Schema, sendo o objeto com o qual trabalhamos.

var Model = mongoose.model('Model', schema);

#### Save

```
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);
const dataModel = { name: 'Suissamon' };
const Suissamon = new PokemonModel(dataModel);

Suissamon.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu:', data);
})
```

Iremos sempre separar o JSON com os dados 
do Model(dataModel) da sua criação 
new PokemonModel(dataModel) para depois executar a função save, passando como parâmetro uma função de callback que irá sempre receber 2 parâmetros nessa ordem: erro(err) e retorno(data).

#### Retrieve

```
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);
const query = {name: 'Pikachu', attack: {$gt: 90}};

PokemonModel.find(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
});
```

Caso você queira limitar quais campos devem ser retornados basta passar como JSON 
no segundo parâmetro.

```
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: 'Pikachu', attack: {$gt: 90}};
const fields = {name: 1};

PokemonModel.find(query, fields, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
})
```

#### findOne

```
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {};

PokemonModel.findOne(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
})
```

#### findById

```
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const id = '564220f0613f89ac53a7b5d0';

PokemonModel.findById(id, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
})
```

#### update

```
const _schema = {
      name:  String,
      description: String,
      type:   String,
      attack:   Number,
      defense:   Number,
      height:   Number
    };
const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const query = {name: /pikachu/i};
const mod = {attack: 666};

Pokemon.update(query, mod, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Alterou:', data);
});
```

#### delete

```
const Schema = mongoose.Schema;
const _schema = {
      name:  String,
      description: String,
      type:   String,
      attack:   Number,
      defense:   Number,
      height:   Number
    };
const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const query = {_id: '569b27ebfdafdac00914d495'};

Pokemon.remove(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Deletou:', data);
});

Obs: o remove do mongoose é `multi: true`, ou seja, ele remove mais de
um documento. O ideal ao utilizá-lo é sempre passando o id da coleção
que se deseja remover.
```

##### Links da Aula

- [Vídeo da Aula parte 01](https://www.youtube.com/watch?v=O8odFa3dl-k)
- [Vídeo da Aula parte 02](https://www.youtube.com/watch?v=02a_lo_KLwU)
- [Vídeo da Aula parte 03](https://www.youtube.com/watch?v=XeLRYhrcKJo)
- [Exercício Solicitado](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-06.md)
- [Exercício Resolvido](https://github.com/fauker/be-mean-instagram-nodejs/blob/master/exercises/class-06-resolved-fauker-Lucas-Moreira.md)

# Aula 07

## Eventos

Muitos objetos do Node.js são capazes de emitir eventos, ou seja, eles são “Eventemiters”.

Eventos podem ser nominados de acordo com a necessidade de cada função, contudo eles seguem um padrão para emissão (emit) e escuta (listener) de eventos.

```
obj.emit(“event:name”, value)
obj.on(“event:name”, action(value){})
```

Para emitirmos eventos em módulos criados por nós, devemos herdar o
**EventEmitter** da seguinte forma:

```
'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function User() {
      EventEmitter.call(this);
}

util.inherits(User, EventEmitter);
```

### Eventos no Mongoose

Todo model do Mongoose é um EventEmitter.

Um model pode executar tarefas antes e/ou quando for executar alguma função, como: save, create, find ou ou  qualquer função interna. Para isso, deve-se escutar os eventos **pre** e **post** do Mongoose.

## Promises

É uma abstração para trabalhar com código assíncrono de forma elegante, organizada e simplificada. 

É composta por três estados básicos:

- pendente: quando ainda está executando.

- realizada / fulfilled: quando ela termina e tem um resultado de sucesso.

- rejeitada / reject: quando termina e tem algum erro;

##### Links da Aula

- [Vídeo da Aula](https://www.youtube.com/watch?v=i6h1A-l11-k)
- [Exercício Solicitado](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/classes/nodejs/exercises/class-07.md)
- [Exercício Resolvido](https://github.com/fauker/be-mean-instagram-nodejs/blob/master/exercises/class-07-resolved-fauker-Lucas-Moreira.md)

# Aula 08 

## Mongoose e Arquitetura Atômica

A Arquitetura Atômica no Mongoose a forma em que separamos seus arquivos/contextos como:

- validação;
- campo;
- schema;
- model;

A fim de facilitar seu re-uso e manutenção.

### Validação Customizada

Para criar uma validação customizada é bem simples, basta passar um objeto para o atributo validate do seu campo, no Schema:

```
age: {
  type: Number,
  validate: {
    validator: function(v) {
      return v >= 18;
    },
    message: 'Sua idade({VALUE}) não é permitida!'
  }
}
```

Validadores sempre recebem o valor para validar como seu primeiro argumento e devem 
retornar um valor booleano. Retornando false significa que a validação falhou.

Para fazer a validação basta chamar a função validateSync(), do campo a ser validado.

### Setters

Setters permitem que você transforme os dados originais antes que cheguem ao documento.

```
function toLower (v) {
  return v.toLowerCase();
}

const UserSchema = new Schema({
  email: { type: String, set: toLower } 
});
```

irá jogar o e-mail informado para minúsculo antes de salvar no MongoDB.

### Getters

Getters permitem que você transforme a representação dos dados, uma vez que é transformado a partir do documento para o valor que você vê.

```
function apenasMaiusculas (v) {
  return v.toUpperCase();
}

const BlogPostSchema = new Schema({
  title: { type: String, get: apenasMaiusculas }
, body: String
, comments: [CommentsSchema]
});
```

irá trazer o campo título todo em maiúsculo, SEM ALTERAR O VALOR ORIGINAL.

### Virtuals

São campos virtuais que não são salvos no MongoDB. Por exemplo:

```
PersonSchema
.virtual('name.full')
.get(function () {
  return this.name.first + ' ' + this.name.last;
});

Person.findById('569e513f7672012c28da89f1', (err, data) => {
  if (err) return console.log('Erro:', err);
  return console.log('Nome completo: ', data.name.full);
});
```

Retornando:

Nome completo: Jean Suissa

### Embedded Documents

Documentos incorporados(embedded) desfrutam dos mesmos recursos que os Models. Sempre que ocorrer um erro ele irá para o callback do save().

Adicionando Embedded Documents:

```
const CommentsSchema = new Schema({
  title: String,
  body: String,
  date: Date
});

const BlogPostSchema = new Schema({
  title: String,
  body: String,
  comments: [CommentsSchema]
});

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);

const post = {
  title: 'Primeiro POST'
, body: 'Post inicial do blog UEBAAA'
, date: Date.now()
}
const comment = {
  title: 'Comentei aqui'
, body: 'Tá comentando meu fiiiii!'
, date: Date.now()
};
const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);

BlogPost.comments.push(comment);
BlogPost.save(function (err, data) {
  if (err) return console.log('Erro:', err);
  return console.log('Sucesso:', data);
});
```

Para remover:

```
const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);
const id = '569e300ad1455a8326c9aa91';

BlogPostModel.findById(id, function (err, post) {

  if (err) return console.log('Erro:', err);
  console.log('post.comments', post.comments)
  post.comments[0].remove();
  post.save(function (err, data) {
    if (err) return console.log('Erro interno:', err);
    return console.log('Sucesso:', data);
  });
});
```

Buscando o Embedded Document por id:

```
const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);
const id = '569e300ad1455a8326c9aa91';

BlogPostModel.findById(id, function (err, post) {

  if (err) return console.log('Erro:', err);
  console.log('post.comments', post.comments)
  post.comments[0].remove();
  post.save(function (err, data) {
    if (err) return console.log('Erro interno:', err);
    return console.log('Sucesso:', data);
  });
});
```

### Mongoose Plugins

Os Schemas no Mongoose são passíveis do uso de Plugins para adicionarmos campos aos schemas/models de uma forma flexível.

Criando um plugin:

```
'use strict';

function timestemp (schema, options) {
  schema.add({created_at : {type : Date, default  : Date.now()}});
  schema.add({update_at  : {type : Date, default : Date.now()}});
}

module.exports = timestemp;
```

Anexando ao Schema:

```
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    timestemp = require('../plugins/timestemp');

var bloogPost = new Schema({
  id    : Schema.ObjectId,
  title : {type : String, required : true},
  body  : {type : String, required : true}
});
bloogPost.plugin(timestemp);
module.exports = mongoose.model('Post', bloogPost);
```

### Indexes

Formas de se definir indexes:

```
const userSchema = new Schema({
  name: String,
  email: String,
  created_at: { type: String, , default: Date.now, index: true }
});
```

ou

```
userSchema.index({ name: 1, type: -1 });
```
Ordem: 

1: ascendente
-1: descentente

### Methods

Podemos definir métodos para o nosso **Schema** da seguinte forma:

```
const _schema = {
  name:  String, description: String, type: String, attack: Number, defense: Number, height: Number
};
const PokemonSchema = new Schema(_schema);

PokemonSchema.methods.findSimilarType = function (cb) {
  return this.model('Pokemon').find({ type: this.type }, cb);
};
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const poke = new Pokemon({ name: 'Teste', type: 'inseto' });

poke.findSimilarType(function (err, data) {
  if (err) return console.log('Erro:', err);
  return data.forEach((pokemon) => console.log('pokemon: ', pokemon));
})
```

```
Como retornamos o find, que é uma instância de *Query*, na função findSimilarType podemos escrever a busca dessa forma:

poke
.findSimilarType()
.where('defense').gt(50)
.limit(2)
.exec(function (err, data) {
  if (err) return console.log('Erro:', err);
  return data.forEach((pokemon) => console.log('pokemon: ', pokemon));
});
```

### Statics

São métodos que sempre estarão disponíveis em nosso Model, sem que seja preciso o instanciamos.

Ex:

```
const PokemonSchema = new Schema(_schema);

PokemonSchema.statics.search = function (name, cb) {
  return this.where('name', new RegExp(name, 'i')).exec(cb);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

Pokemon.search('caterpie', function (err, data) {
  if (err) return console.log('Erro:', err);
  return data.forEach((pokemon) => console.log('pokemon: ', pokemon));
});
```

### Mongoose Middlewares

Middleware são conhecido por usarem as funções e pre e post , elas são chamada de forma assíncrona durante a execução de um model, eles trabalhão a nível de schema e são muito ótimos para serem usados com plugins, como visto na aula de plugins.

