const mongoose = require('mongoose');
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  available_status: {
    type: Number,
    enum: {
      values: [0, 1],
      message: 'Available status can only be 0(false) or 1(true)',
    },
  },
  price: {
    type: Number,
    min: [0, 'Price could not be negative'],
  },
  location: {
    type: String,
  },
  rating: {
    type: Number,
    min: [0, 'Rating could not be negative'],
    max: [5, 'Rating could not exceeds average of 5'],
  },
  create_at: {
    type: Date,
    default: Date.now(),
  },
});

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;
