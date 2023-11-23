function fizzBuzz(n) {
  let output = [];

  for (let i = 1; i <= n; i++) {
    let value = "";
    if ((i % 3 === 0) & (i % 5 === 0)) {
      value += "FizzBuzz";
    }
    output.push(value || i.toString());
  }
  return output;
}

let result = fizzBuzz(15);
console.log(result);
