const sequelize = require('../config/connection'); 
const seedItems = require('./items'); 

const seedAll = async () => {
  await sequelize.sync({ force: true }); 
  await seedItems(); // seed items
  process.exit(0); // exit process
};
//call seedAll function to start the seeding process
seedAll(); 
