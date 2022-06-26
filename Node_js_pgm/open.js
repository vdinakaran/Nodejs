var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    fs.open("newfile.txt", "w+", function (err) {
      if (err) return console.log.console.error(err);
      res.write("file opened successfully");
      res.end();
    });
  })
  .listen(8006);
