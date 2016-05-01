var fs = require('fs');

fs.rename('file.txt', 'fileAlterado.txt', function(err, data) {
  if (err) throw err;
  console.log(data);
});
