const Tour = require('./../modles/tour');
module.exports = async (req, res) => {
  try {
    const creatNewTour = await Tour.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        tour: creatNewTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
    console.log(err);
    
  }
};
