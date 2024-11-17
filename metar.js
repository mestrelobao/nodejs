async function myfunction() {
const fetch = require('node-fetch');
let data = new Date();
let ano_num = data.getFullYear();
let ano = ano_num.toString();
let mes_num = (data.getMonth()+1);
let mes = mes_num.toString();
let dia_num = data.getDate();
let dia = dia_num.toString();
let hora = data.getHours();
  console.log("ano = " + ano);
  console.log("mes = " + mes);
  console.log("dia = " + dia);
  console.log("hora = " + hora);
  let myObject = await fetch("https://redemet.decea.gov.br//api/consulta_automatica/index.php?local=sbjp&msg=metar&data_ini="+ano+mes+dia+hora+"&data_fim="+ano+mes+dia+hora);
 myText = await myObject.text();
console.log(myText);
const http = require('http');
  http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body><h1 style="text-align:center;">METAR de Jo&#227;o Pessoa.</h1><h2 style="text-align:center; color:red;">'+ myText + '</h2></body></html>');
}).listen(8080);
}
myfunction();
