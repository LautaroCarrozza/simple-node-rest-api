const fetch = require('node-fetch');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(json => {
            console.log(json)
        });

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
