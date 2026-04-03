const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1/travlr';

// Connect to MongoDB (no extra options needed for newer versions)
mongoose.connect(dbURI);

// CONNECTION EVENTS
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Bring in your schema
require('./travlr');

// Export mongoose so other files (like seed.js) can use it
module.exports = mongoose;