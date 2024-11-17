var veronica = "";
var normando = "";
function email(){

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mestrelobaoguilherme@gmail.com',
    pass: 'sua chave vai aqui'
  }
});
var mailOptions = {
  from: 'mestrelobaoguilherme@gmail.com',
  to: 'mestrelobaoguiga@gmail.com',
  subject: 'Sending Email using Node.js',
  text: normando
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado com sucesso!');
  }
});
}
const fetch = require('node-fetch');

  function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
async function myfunction() {
let data = new Date();
let ano_num = data.getFullYear();
let ano = ano_num.toString();
let mes_num = (data.getMonth()+1);
mes_num = pad (mes_num);
let mes = mes_num.toString();
let dia_num = data.getDate();
dia_num = pad (dia_num);
let dia = dia_num.toString();
let hora = data.getHours()+3;
hora = pad (hora);
  console.log("ano = " + ano);
  console.log("mes = " + mes);
  console.log("dia = " + dia);
  console.log("hora = "+hora);
let myObject = await fetch("https://api-redemet.decea.mil.br/mensagens/aviso/sbjp?api_key={suachavevaiaqui}&data_ini="+ano+mes+dia+hora+"&data_fim="+ano+mes+dia+hora);
let myText = await myObject.text();
const guiga = JSON.parse(myText);
console.log(myText);
console.log(guiga);
console.log(guiga.data.data[0]);
if (guiga.data.data[0] === undefined){
console.log("Nenhum Aviso de Aeródromo por enquanto...");
veronica = "Nenhum Aviso de Aeródromo por enquanto...";
} else {
console.log(guiga.data.data[0]["mens"]);
veronica = guiga.data.data[0]["mens"];
}
setTimeout(minhafuncao, 60000*1);
}
async function minhafuncao(){
let data = new Date();
let ano_num = data.getFullYear();
let ano = ano_num.toString();
let mes_num = (data.getMonth()+1);
mes_num = pad (mes_num);
let mes = mes_num.toString();
let dia_num = data.getDate();
dia_num = pad (dia_num);
let dia = dia_num.toString();
let hora = data.getHours()+3;
hora = pad (hora);
console.log("ano = " + ano);
console.log("mes = " + mes);
console.log("dia = " + dia);
console.log("hora = "+hora);
let myObject = await fetch("https://api-redemet.decea.mil.br/mensagens/aviso/sbjp?api_key={suachavevaiaqui}&data_ini="+ano+mes+dia+hora+"&data_fim="+ano+mes+dia+hora);
let myText = await myObject.text();
const guiga = JSON.parse(myText);
console.log(myText);
console.log(guiga);
console.log(guiga.data.data[0]);
if (guiga.data.data[0] === undefined){
console.log("Nenhum Aviso de Aeródromo por enquanto...");
normando = "Nenhum Aviso de Aeródromo por enquanto...";
} else {
console.log(guiga.data.data[0]["mens"]);
normando = guiga.data.data[0]["mens"];
}
console.log("eu gosto de buceta ");
console.log(veronica);
console.log(normando);
console.log("eu tambem...");
  if(veronica === normando){
    console.log("iguais então não vai e-mail");
  } else if (guiga.data.data[0] === undefined){
console.log("diferentes mas não vai e-mail");
  }else{
email();
  }
    veronica = normando;
    normando = "";
    setTimeout(minhafuncao, 60000*1);
  }
myfunction();
