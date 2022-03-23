const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

router.route('/').get(hotelController.getAllHotels);

router.post('/createHotel', hotelController.createHotel);

router
  .route('/:hotelId')
  .get(hotelController.getHotel)
  .patch(hotelController.updateHotel)
  .delete(hotelController.deleteHotel);

module.exports = router;
