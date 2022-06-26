var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    var asyn = fs.writeFile(
      "sample.txt",
      "This is second line",
      function (err) {
        if (err) {
          return console.log.error(err);
        }
        res.write("write successfully");
        res.end();
      }
    );
  })
  .listen(8002);
