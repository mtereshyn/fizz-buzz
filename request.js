const axios = require("axios");

axios
  .get("http://localhost:3000/fizz-buz-server/run")
  .then((response) => {
    const solutions = response.data;
    console.log(solutions);
  })
  .catch((error) => {
    console.error(error);
  });
