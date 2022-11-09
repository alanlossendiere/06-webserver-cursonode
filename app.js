require('dotenv').config()

const express = require("express");
const app = express();
const port = process.env.PORT;
const hbs = require("hbs");

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Alan",
    titulo: "curso node",
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Elements",
    titulo: "Aluson - elements",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "generic",
    titulo: "Aluson - generic",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
