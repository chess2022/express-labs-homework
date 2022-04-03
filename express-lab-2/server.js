const express = require("express");
const app = express();

app.get("/greeting/:name", function (req, res) {
  res.send("How are you doing today, " + req.params.name+`?`);
});

app.get("/tip/:total/:tipPercentage", function (req, res) {
  let tip = parseInt(req.params.tipPercentage) / 100 * (req.params.total)
  res.send(`Your tip should be $${tip}`)
})

app.get("/magic/:question", function (req, res) {
  let answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  let answer = answers[Math.floor(Math.random() * answers.length)]

  res.send(
    `You asked "${req.params.question}," The Magic 8 Ball says, "${answer}"`
  );

})

app.listen(3000);
