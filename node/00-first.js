var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type': 'text/plain'});

    response.end('Hello World!');
}).listen(8883);

console.log('服务已启动');