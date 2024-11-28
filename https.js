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
const httpsServer = https.createServer(cred, app);
httpsServer.listen(8081);
