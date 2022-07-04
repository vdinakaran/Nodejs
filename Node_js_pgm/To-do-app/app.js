var express = require("express");
var app = express();
var todoController = require("./controllers/todoController");
//set up template engine
app.set("view engine", "ejs");
//static files
app.use(express.static("./public"));
//fire controllers
todoController(app);
app.listen(3999);
console.log("you are listening to port 3999");
