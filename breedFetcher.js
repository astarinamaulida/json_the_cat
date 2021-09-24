const request = require('request');
const fs = require('fs');

//const breedName = process.argv[2]; --> if using non mocha
//const domain = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
    const data = JSON.parse(body);
    const desc = data[0]['description'];

    fs.readFile(body, 'utf8', () => { //use readFile to read the data
      if (error) {
        callback(error, null);
      } if (data.length === 0) {
        callback(error, null);
      } else {
        callback(null, desc);
      }
    });
  });
};

module.exports = { fetchBreedDescription };