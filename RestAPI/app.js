const express = require('express');
const app = express();

app.use(express.json());

const HotelRouter = require('./routes/hotelsRoute');

app.use('/api/v1/hotels', HotelRouter);

module.exports = app;
