var EventEmitter = require('events').EventEmitter;
var util = require('util');

function User(data) {
  this.name = data.name;
  this.on('user:init', sayName);
  EventEmitter.call(this);
};

util.inherits(User, EventEmitter);

User.prototype.init = function() {
  this.emit('user:init', this.name);
};

function sayName(name) {
  console.log('Iniciando... Olá, humano! Você me deu o nome de', name);
};

var User = new User({name: 'Lucas'});
User.init();
