const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/rental-system')
  .then(() => {
    console.log('connected to database successfully');
  })
  .catch(e => {
    console.log(e.message);
  });

module.exports = mongoose;
