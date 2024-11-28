const fs = require('fs');
const https = require('https');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const key = fs.readFileSync('./private.key');
const cert = fs.readFileSync('./certificate.crt');
const cred = {
key,
        cert
}

app.post('/post', (req, res) => {
const data =   req.body.data;
//console.log(data);

let dados = fs.readFileSync('mare.json');
let json_dados = JSON.parse(dados);
const resultado = json_dados[data];
console.log("tudo ok!");
res.send(resultado);
});

const httpsServer = https.createServer(cred, app);
httpsServer.listen(8081);
