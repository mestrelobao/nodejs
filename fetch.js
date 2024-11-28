async function getapi(){
const fetch = require('node-fetch');
const response = await fetch('https://api.github.com/users/github');
const data = await response.json();
console.log(data);
}
getapi();
