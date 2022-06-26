var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    fs.unlink("rename.txt", function (err) {
      if (err) {
        return console.log.error(err);
      }
      res.write("deleted successfully");
      res.end();
    });
  })
  .listen(8005);
