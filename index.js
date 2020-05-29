const getTours = require('./modules/getTours');
const updateTour = require('./modules/updateTour');
const createTour = require('./modules/createTour');
const getTour = require('./modules/getTour');
const deleteTour = require('./modules/deleteTour');
const morgan = require('morgan');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use(morgan('dev'));
app.use(express.json()); // to be able to get access to the req.body
app.use((req, res, next) => {
  console.log('hello from middleware');
  next();
});

app.route('/api/v1/tours').get(getTours).post(createTour);
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);

app.patch('/api/v1/tours/:id', (req, res) => {});
app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
