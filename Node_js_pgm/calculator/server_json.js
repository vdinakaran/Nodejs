var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    var myobj = {
      name: "varshini",
      age: 20,
    };
    res.write(JSON.stringify(myobj)); //this func can't take obj it accept only string with json format
    res.end("json data printed");
  })
  .listen(3001);
