var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    var asyn = fs.rename("sample.txt", "rename.txt", function (err) {
      if (err) {
        return console.log.error(err);
      }
      res.write("renamed successfully");
      res.end();
    });
  })
  .listen(8004);
