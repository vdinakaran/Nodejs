var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

// It is important to note that res.render() will look in a views folder for the view.
// So you only have to define pages/index since the full path is views/pages/index.

app.listen(9000);
console.log("Server is listening on port 9000");
