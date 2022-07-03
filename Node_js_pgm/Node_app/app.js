var express = require("express");
var app = express();
const port = 5000;
app.set("view engine", "ejs");

const user = {
  firstName: "Varshini",
  lastName: "Dinakaran",
  admin: true,
};

const movie = [
  { title: "vikram", hero: "kamal" },
  { title: "cobra", hero: "vikram" },
  { title: "beast", hero: "vijay" },
  { title: "sooraipotru", hero: "suriya" },
  { title: "kaithi", hero: "karthi" },
];

app.get("/", function (req, res) {
  res.render("pages/index", {
    user: user,
  });
});

app.get("/movie", function (req, res) {
  res.render("pages/movie", {
    movie: movie,
  });
});
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
