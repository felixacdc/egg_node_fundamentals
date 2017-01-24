var http = require('http');
var heapdump = require('heapdump');

function BigData() {
    var men = Array(1000000).join('a');
}

var leak = [];

var server = http.createServer((request, response) => {
    if (request.url === '/') {
        // leak.push(new BigData);
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end("Hello World");
    }
});

server.listen(3000);