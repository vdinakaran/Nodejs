var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    var asyn = fs.appendFile(
      "sample.txt",
      "This is appended line",
      function (err) {
        if (err) {
          return console.log.error(err);
        }
        res.write("append a line successfully");
        res.end();
      }
    );
  })
  .listen(8003);
