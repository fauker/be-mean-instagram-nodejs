# be-mean-instagram-nodejs 
Guia de referência do conteúdo ministrado no módulo **Nodejs** do curso gratuíto [*Construa seu Instagram com MEAN*](http://dagora.net/be-mean/) da [Webschool.io](https://github.com/Webschool-io/)

#### Apresentação (Slides)
[Link para slides](https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit#slide=id.ge8762dc44_0_0)

# Aula 01 

## Definição de Nodejs

**Nodejs** é um interpretador de JavaScript que funciona no servidor em cima do V8, que é o motor de JavaScript do Google, e foi criado em 2009 por Ryan Dahl. 

Sim... o Nodejs foi feito em cima do V8. Mas o que é V8 especificamente? Ele nada mais é que um interpretador de **JavaScript**, tipo uma Máquina Virtual, desenvolvido pelo Google e utilizado no Chrome, feito em C++ e open source. :metal: O trabalho dele é compilar o código JavaScript para o código nativo de máquina para então executá-lo. Ele levou velocidade dos códigos compilados para o JavaScript. Uma analogia: **JVM**.

## Single Thread

O Nodejs trabalha *apenas* com uma thread, mas outras podem ser criadas. Isso economiza muita memória e CPU. Para conseguir gerenciar tudo co mapenas uma Thread, existe fila infinita que recebe todos os eventos emitidos pelo Nodejs e os executa assincronamente. Esse processo é chamado de **Event Loop*.

## I/O Async

Qualquer função do Nodejs, por padrão, é assíncrona. 

O termo I/O Async quer dizer que qualquer leitura ou escrita de dados não espera seu processo finalizar para continuar o scrit. Os processos ocorrem "paralelamente" à execução.

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










