const Hotel = require('../models/hotelModel');

exports.createHotel = async (request, response, next) => {
  await Hotel.create({
    name: request.body.name,
    description: request.body.description,
    available_status: request.body.available_status,
    price: request.body.price,
    location: request.body.location,
    rating: request.body.rating,
  });
  response.status(200).json({
    status: 'success',
    message: 'new hotel created successfully!',
    data: null,
  });
};

exports.getHotel = async (request, response, next) => {
  const foundHotel = await Hotel.findById(request.params.hotelId);
  if (!foundHotel) {
    return next();
  }

  response.status(200).json({
    status: 'success',
    data: {
      foundHotel,
    },
  });
};

exports.getAllHotels = async (request, response, next) => {
  // Filter
  const queryObj = { ...request.query };
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach((element) => delete queryObj);

  // Add Operator Sign to Query
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  let query = Hotel.find(JSON.parse(queryStr));

  // Sorting
  if (request.query.sort) {
    const sortBy = request.query.sort.split(',').join(' ');
    query = query.sort(request.query.sort);
  } else {
    query = query.sort('-create_at');
  }

  // Field Limiting
  if (request.query.fields) {
    const fields = request.query.fields.split(',').join(' ');
    query = query.select(fields);
  } else {
    query = query.select('-__v');
  }

  const hotels = await query;

  response.status(200).json({
    status: 'success',
    results: hotels.length,
    data: {
      hotels,
    },
  });
};

exports.updateHotel = async (request, response, next) => {
  const foundHotel = await Hotel.findByIdAndUpdate(
    request.params.hotelId,
    request.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!foundHotel) {
    return next();
  }
  response.status(200).json({
    status: 'success',
    data: {
      foundHotel,
    },
  });
};

exports.deleteHotel = async (request, response, next) => {
  const foundHotel = await Hotel.findByIdAndDelete(request.params.hotelId);
  if (!foundHotel) {
    return next();
  }
  response.status(200).json({
    status: 'success',
    data: null,
  });
};
