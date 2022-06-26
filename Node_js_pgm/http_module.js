var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/plain" }); //send a response header to the request status code ,header
    res.write("this is http module ");
    res.write("\n");
    res.end("Thank you");
  })
  .listen(8000);
