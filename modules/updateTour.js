const fs = require('fs');
const tours = JSON.parse(fs.readFileSync('./data/tours.json'));
module.exports = (req, res) => {
  res.status(200).send('updating Tour!!');
};
