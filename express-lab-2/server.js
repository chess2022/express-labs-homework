const express = require("express");
const app = express();

app.get("/greeting/:name", function (req, res) {
  res.send("How are you doing today, " + req.params.name+`?`);
});

app.get("/tip/:total/:tipPercentage", function (req, res) {
  let tip = parseInt(req.params.tipPercentage) / 100 * (req.params.total)
  res.send(`Your tip should be $${tip}`)
})

app.listen(3000);
