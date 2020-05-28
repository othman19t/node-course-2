const tours = require('./getData');
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
