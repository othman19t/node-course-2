const fs = require('fs');
const tours = JSON.parse(fs.readFileSync('./data/tours.json'));
module.exports = tours;