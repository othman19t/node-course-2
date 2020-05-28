const fs = require('fs');
const tours = JSON.parse(fs.readFileSync('./data/tours.json'));
module.exports = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
};
