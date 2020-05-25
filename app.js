const fetch = require('node-fetch');
var express = require('express');
var app = express();

const port = 3000;

app.get('/', (req, res) => {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(json => {
            console.log(json);
            res.send(json);
        });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
