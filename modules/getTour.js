const fs = require('fs');
const tours = JSON.parse(fs.readFileSync('./data/tours.json'));
module.exports = (req, res) => {
  const tour = tours.find((el) => el._id === req.params.id);
  console.log(tour);
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};
