var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    if (req.url === "/home") {
      res.writeHead(200, { "Context-Type": "text/html" });
      fs.createReadStream("home.html").pipe(res);
    } else if (req.url === "/contact") {
      res.writeHead(200, { "Context-Type": "text/html" });
      fs.createReadStream("contact.html").pipe(res);
    } else {
      var myObj = [
        { name: "varshini", age: 24 },
        { name: "nithin", age: 8 },
      ];
      res.writeHead(200, { "Context-Type": "application/json" });
      res.end(JSON.stringify(myObj));
    }
  })
  .listen(3002);
