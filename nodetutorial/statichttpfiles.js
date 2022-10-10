const http = require('http');
const fs = require('fs');


// Takes documents from static folder and then displays them on server
http.createServer((req, res)=>{
    const readStream = fs.createReadStream('./static/example.png');
    // Content type is important. text/html and application/json and image/png
    res.writeHead(200,{'Content-type':'image/png'});
    readStream.pipe(res);
}).listen(3000);