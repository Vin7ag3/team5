const sequelize = require('../config/connection');
const seedItems = require('./items');
const seedProducts = require('./products'); 

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedItems(); // seed Items
  await seedProducts(); // seed Products
  process.exit(0); // exit process
};

seedAll();
