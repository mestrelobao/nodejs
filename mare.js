//http://ec2-3-17-190-32.us-east-2.compute.amazonaws.com:8080/?local=joaopessoa&data=dezembro2
const express = require('express');
const fs = require('fs');
const app = express();
app.get('/', function(req, res) {
  const local = req.query.local;
  const data = req.query.data;
let dados = fs.readFileSync('mare.json');
let json_dados = JSON.parse(dados);
const resultado = json_dados[data];
console.log("tudo ok!");
res.send(resultado);
});
app.listen(8080);
