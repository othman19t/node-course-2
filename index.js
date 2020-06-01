const getUsers = require('./controlers/getUsers');
const getUser = require('./controlers/getUser');
const createUser = require('./controlers/createUser');
const updateUser = require('./controlers/updateUser');
const deleteUser = require('./controlers/deleteUser');

const getTours = require('./controlers/getTours');
const updateTour = require('./controlers/updateTour');
const createTour = require('./controlers/createTour');
const getTour = require('./controlers/getTour');
const deleteTour = require('./controlers/deleteTour');


const express = require('express');
const morgan = require('morgan');

require('./database/db.js');
const Tour = require('./modles/tour');

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(express.json()); // to be able to get access to the req.body




app.use((req, res, next) => {
  console.log(req.query);
  next();
});

app.route('/api/v1/users').get(getUsers).post(createUser);
app.route('/api/v1/user/:id').get(getUser).patch(updateUser).delete(deleteUser);
app.route('/api/v1/tours').get(getTours).post(createTour);
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
