const express = require('express');
const app = express();
app.use(express.json());
app.get('/list',(request,response)=>{

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "guiga"
});
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Persons", function (err, result, fields) {
    if (err) throw err;
   console.log(result);
          return response.json({result});

  });
});
});

app.get('/insert',(request,response)=>{
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "guiga"
});
con.connect(function(err) {
  if (err) throw err;
        con.query("INSERT INTO Persons (LastName, FirstName) VALUES ('Silva', 'Anderson')", function (err, result, fields) {
    if (err) throw err;
   console.log(result);
return response.json({result});

  });
});
});

app.get('/delete',(request,response)=>{
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "guiga"
});
con.connect(function(err) {
  if (err) throw err;
        con.query("DELETE FROM Persons WHERE PersonID = 9;", function (err, result, fields) {
    if (err) throw err;
   console.log(result);
return response.json({result});

  });
});
});

app.get('/replace',(request,response)=>{
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "guiga"
});
con.connect(function(err) {
  if (err) throw err;
        con.query("REPLACE INTO Persons (PersonID,LastName,FirstName) VALUES (2, 'Kaushik','Kota')", function (err, result, fields) {
    if (err) throw err;
   console.log(result);
return response.json({result});

  });
});
});



app.listen(8080);
