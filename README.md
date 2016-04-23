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
