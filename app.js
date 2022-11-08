const express = require("express");
const app = express();
const port = 8080;

//Servir contenido estatico

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Home Page");
});

app.get("/hola-mundo", function (req, res) {
  res.send("Hola mundo en su respectiva ruta");
});

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/generic", function (req, res) {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", function (req, res) {
  res.sendFile(__dirname + "/public/elements.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
