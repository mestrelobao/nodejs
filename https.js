//sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000
//sudo iptables -t nat -I PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 8081

const express = require('express');
var http = require('http');
const fs = require('fs');
const https = require('https');

const app = express();
const key = fs.readFileSync('./private.key');
const cert = fs.readFileSync('./certificate.crt');

const cred = {
key,
        cert
}

app.get('/', (req, res) => {
        res.send({
                nome: 'guiga'
        });
});
//app.get('/.well-known/pki-validation/ECBA50B842CED36FB16B806135A0CA09.txt', (req, res) => {
//res.sendFile('/home/ubuntu/ECBA50B842CED36FB16B806135A0CA09.txt');
//});
const httpsServer = https.createServer(cred, app);
httpsServer.listen(8081);
//app.listen(3000);
//http.createServer(function (req, res) {
//  fs.readFile('pagina.html', function(err, data) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.write(data);
//console.log('guiga');
//        return res.end();
//  });
//}).listen(8080);
