function generateFibonacciFizzBuzz(n) {
  const output = [];

  let a = 1,
    b = 1;

  for (let i = 1; i <= n; i++) {
    let value = "";

    if (a % 3 === 0) {
      value += "Fizz";
    }
    if (a % 5 === 0) {
      value += "Buzz";
    }
    if (value === "") {
      value = a.toString();
    }

    output.push(value);

    const amount = a + b;
    a = b;
    b = amount;
  }

  return output;
}

const n = 20;
const result = generateFibonacciFizzBuzz(n);

console.log(result);
