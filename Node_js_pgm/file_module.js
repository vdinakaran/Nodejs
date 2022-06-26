var fs = require("fs");
//Synchronous
// var syn = fs.readFileSync("sample.txt");
// console.log("synchronous:" + syn.toString());

// //Asynchronous
// var asyn = fs.readFile("sample.txt", function (err, data) {
//   if (err) {
//     return console.log.error(err);
//   }
//   console.log("Asynchronous :" + data.toString());
// });

var http = require("http");
http
  .createServer(function (req, res) {
    var asyn = fs.readFile("sample.txt", function (err, data) {
      if (err) {
        return console.log.error(err);
      }
      console.log("Asynchronous :" + data.toString());
      res.write(data);
      res.end();
    });
  })
  .listen(8001);
