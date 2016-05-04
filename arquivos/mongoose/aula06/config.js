var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/be-mean-instagram');

mongoose.connection.on('connected', function (dbURI) {
  console.log('Mongoose default connection open to ' + dbURI);
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

