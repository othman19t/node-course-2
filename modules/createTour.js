const tours = require('./getData');
module.exports = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile('./data/tours.json', JSON.stringify(tours), (err) => {
    res.status(201).send({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  });
};
