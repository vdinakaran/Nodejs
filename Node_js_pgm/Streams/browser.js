var http = require("http");
var fs = require("fs");
var mystream = fs.createReadStream("index.html");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    mystream.pipe(res);
  })
  .listen(3000);
