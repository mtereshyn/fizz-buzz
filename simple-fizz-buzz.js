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

let result = fizzBuzz(15);
console.log(result);
