var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.send("this is home page");
});

app.get("/profile/:name", function (req, res) {
  res.render("profile", { name: req.params.name });
});

app.get("/details", (req, res) => {
  var data = {
    name: "Anu",
    age: 25,
    job: "Doctor",
    hobbies: ["playing football", "playing chess", "cycling"],
  };

  res.render("details", { person: req.params.name, data: data });
});
app.listen(2000);
