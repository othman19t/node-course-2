const Tour = require('./../modles/tour');
module.exports = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
