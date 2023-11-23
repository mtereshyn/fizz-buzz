const express = require("express");

const app = express();
app.use(express.json());

const n = 15;

function fizzBuzz(n) {
  let output = [];

  for (let i = 1; i <= n; i++) {
    let value = "";

    if (i % 3 === 0) {
      value += "Fizz";
    }

    if (i % 5 === 0) {
      value += "Buzz";
    }

    output.push(value || i.toString());
  }
  return output;
}

const solutions = fizzBuzz(n);

app.get("/fizz-buz-server/run", (request, response) => {
  response.json(solutions);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
