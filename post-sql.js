//curl -X POST http://ec2-3-17-190-32.us-east-2.compute.amazonaws.com:8080/post
//   -H 'Content-Type: application/json'
//   -d '{"buceta":"INSERT INTO todolist (tarefa) VALUES (\'chupar PICA\')"}'
//   -d '{"buceta":"DELETE FROM todolist WHERE tarefa = \'chupar pomba\'"}'
//   -d '{"buceta":"DELETE FROM todolist WHERE id = 6"}'
//   -d '{"buceta":"UPDATE todolist SET tarefa =\'COMPRAR PAO\' WHERE ID = 5"}'
//   -d '{"buceta":"ALTER TABLE todolist AUTO_INCREMENT = 1"}'
//   -d '{"buceta":"SELECT * FROM todolist"}'
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {

});

app.post('/post', (req, res) => {
const buceta =   req.body.buceta;
console.log(buceta);
const priquito = 'INSERT INTO todolist (tarefa) VALUES("comer bunda!")';
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "guiga"
});
con.connect(function(err) {
  if (err) throw err;
        con.query(buceta, function (err, result, fields) {
    if (err) throw err;
console.log(req.body);
res.json({result});
  });
});
});

app.post('/delete', (req, res) => {
//const id =   req.body.id;
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "guiga"
});
con.connect(function(err) {
  if (err) throw err;
        con.query("DELETE FROM todolist WHERE id = 5", function (err, result, fields) {
    if (err) throw err;
console.log(result);
return response.json({result});
  });
});
});


app.listen(8080);
