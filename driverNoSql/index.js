const mongoose = require('mongoose');
const config = require('../config');
const database = config.db;


function mongoConnection(database) {
  return mongoose.connect(config.db)
      .then(() => {
          console.log('Connected to MongoDB at ', databaseUri);
          return Mongoose.connection;
      })
      .catch(err => debug(`Database connection error: ${err.message}`));
}



function mongoClose() {
  mongoose.connection.close();
}
module.exports = {
  //connectDatabase,
  mongoConnection,
  mongoClose
};