var fs = require("fs");
var r = fs.createReadStream("sample.txt");
var w = fs.createWriteStream("output.txt");
r.pipe(w);
console.log("Program ended");
