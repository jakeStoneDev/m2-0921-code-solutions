const takeAChance = require('./take-a-chance');
takeAChance('Jake')
  .then(value => {
    console.log(value);
    // expected output: "Success!"
  })
  .catch(error => {
    console.log(error.message);
  });
