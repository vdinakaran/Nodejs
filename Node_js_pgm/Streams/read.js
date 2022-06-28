var fs = require("fs");
var myStream = fs.createReadStream("sample.txt", "utf8"); //crs is inherit from the event emitter //utf is character encoder  // otherwise it will give the buffer
myStream.on("data", function (chunk) {
  //used to listen data or chunks which are received by crs and data ia an event
  console.log("new chunk received");
  console.log(chunk);
});
