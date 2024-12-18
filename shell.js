const exec = require ('child_process').exec;
exec('pm2 list', (e, stdout, stderr) => {
if (e instanceof Error) {
        console.error(e);
        throw e;
}
console.log(stdout);
});
