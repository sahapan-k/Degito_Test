const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 5000;

const database = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(database).then(() => {
  console.log('Database connections successfully!');
});

const server = app.listen(port, () => {
  console.log(`SERVER STARTED`);
  console.log(`SERVER RUN at port 5000 ....`);
});

process.on('unhandledRejection', (error) => {
  console.log(error);
  console.log(error.message);
  console.log('UNHANDLED REJECTION !! 💣💣💣 Server Shutting down ....');
  server.close(() => {
    process.exit(1);
  });
});
