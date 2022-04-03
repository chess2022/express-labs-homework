const express = require("express");
const app = express();

app.get("/greeting/:name", function (req, res) {
  res.send("How are you doing today, " + req.params.name+`?`);
});

app.listen(3000);
