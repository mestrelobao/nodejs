const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();

app.get('/.well-known/pki-validation/1E67A9092070EBB8E4B6FB1CD5C76B45.txt', (req, res) => {
res.sendFile('/home/ubuntu/1E67A9092070EBB8E4B6FB1CD5C76B45.txt');
});

app.listen(3000);
