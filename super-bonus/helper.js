const express = require("express");
const app = express();
const fs = require("fs");

"use strict";

let rawdata = fs.readFileSync("sightings.json");
let sightings = JSON.parse(rawdata);
// console.log(sightings);

// let stateCode = sightings.json[state, ""]

let filterByState = sightings.filter(sightings => sightings.state === "AZ")
console.log(filterByState)







// app.get("/state/:state", function (req, res) {
//   let number = 99;
//   res.send();
// });




app.listen(3000);
