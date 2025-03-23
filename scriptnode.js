var http = require('http');
let fs = require('fs');
function gotoHomePage(){
        location.replace("index.html");
    }
http.createServer(function (req, res) {
        fs.readFile('./index.html')
  
        res.writeHead(200, {'Content-Type': 'text/html'});
  
}).listen(8080);