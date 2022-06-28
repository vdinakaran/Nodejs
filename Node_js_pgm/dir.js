var fs=require("fs")
fs.mkdirSync('stuff')
fs.rmdirSync("stuff")
fs.mkdir('stuff',function(){
    fs.readFile('sample.txt',function(err,data))
})