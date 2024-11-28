const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();


http.createServer(function (req, res) {
  fs.readFile('pagina.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
console.log('guiga');
          return res.end();
  });
}).listen(3000);
