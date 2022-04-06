const express = require("express");
const app = express();
const fs = require("fs");

"use strict";

let rawdata = fs.readFileSync("sightings.json");
let sightings = JSON.parse(rawdata);
// console.log(sightings);

// let state = sightings.state

// let filterByState = sightings.filter(sightings => sightings.state === state)
// console.log(filterByState)

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const args = require("minimist")(process.argv.slice(2));
args["name"];







// app.get("/state/:state", function (req, res) {
//   let 
//   res.send();
// });




app.listen(3000);
