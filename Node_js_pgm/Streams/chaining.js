var fs = require("fs");
var zlib = require("zlib"); //compressing and decompressing module
// fs.createReadStream("sample.txt")
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream("input.txt.gz"));
// console.log("file compressed");

fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));
console.log("file compressed");
