var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
      user     : 'root',
     password : '123456',
      database : 'guiga'
});
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
