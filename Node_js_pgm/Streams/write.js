var fs = require("fs");
var mystream = fs.createReadStream("sample.txt");
var mywrite = fs.createWriteStream("copy.txt");
mystream.on("data", function (chunk) {
  mywrite.write(chunk);
});
