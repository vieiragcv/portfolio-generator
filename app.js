const fs = require('fs');
const generatePage = require('./src/page-template.js');
const http = require('http');
const url = require('url'); 

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name1, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name1, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
