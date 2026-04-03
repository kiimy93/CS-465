console.log("SEED SCRIPT RUNNING...");

const mongoose = require('./db');
const fs = require('fs');

const Trip = mongoose.model('trips');

const trips = JSON.parse(
  fs.readFileSync('./app_server/data/trips.json', 'utf8')
);

const seedDB = async () => {
  console.log("Deleting old data...");
  await Trip.deleteMany({});

  console.log("Inserting new data...");
  await Trip.insertMany(trips);

  console.log("DONE SEEDING!");
};

seedDB()
  .then(async () => {
    await mongoose.connection.close();
    process.exit();
  })
  .catch(async (err) => {
    console.log(err);
    await mongoose.connection.close();
    process.exit(1);
  });