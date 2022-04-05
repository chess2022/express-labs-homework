const express = require("express");
const app = express();

app.get("/", function (req, res) {
    let number = 99
  res.send(`<h1>99 Bottles of Beer on the Wall</h1><br>
    <a href="http://localhost:3000/${number-1}">take one down, pass it around...</a>`);
});


app.get("/:number_of_bottles", function (req, res) {
    let number = parseInt(req.params.number_of_bottles)
    if (number > 0) {
        res.send(
          `<h2>${number} bottles of beer on the wall.</h2>` +
            `<br>` + number + " bottles of beer on the wall, " +
            `<br>` + number + " bottles of beer," +
            `<br>` + `<a href="http://localhost:3000/${number-1}">take one down, pass it around...</a>`
        );
    } else {
        if (number === 0) {
            res.send("There are no more bottles of beer left on the wall." + " " + `<a href = http://localhost:3000/>Start Over!</a>`)
        }
    }
})

app.listen(3000);


