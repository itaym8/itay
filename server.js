const http = require('http');
const fs = require('fs');
const port = 8080;
var directory = "./barbur.webp";
var app = http.createServer((req,res) => {
    res.writeHead(200);
    res.end(fs.readFileSync(directory));
});

app.listen(port);