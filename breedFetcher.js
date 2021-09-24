const request = require('request');
const fs = require('fs');

const breedName = process.argv[2];
const domain = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(domain, (error, response, body) => {
  const data = JSON.parse(body);
  
  fs.readFile(body, 'utf8', () => { //use readFile to read the data
    if (error) {
      console.log('breed is not found!'); // If error
    } if (data.length === 0) {
      console.log('breed is not found!'); // If no breed means no data
    } else {
      console.log(data[0]['description']); // if there is breed
    }
  }
  );
});