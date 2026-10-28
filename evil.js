const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  const usuario = req.query.username;
  // Vulnerabilidad: inyección de código mediante eval()
  eval("console.log('Usuario conectado: ' + " + usuario + ");");
  res.send("ok");
});

app.listen(3000);
