// import seq connection
const sequelize = require('../config/connection');
const { Item } = require('../models');

// import datatypes from seq
const { DataTypes } = require('sequelize');

// the data for items to be seeded
const itemsData = [
  { name: 'Item 1' },
  { name: 'Item 2' },
];

// seedItems function
const seedItems = async () => {

// sync item model with the database force to recreate table
  await Item.sync({ force: true });

// bulk create the items in itemsData
  await Item.bulkCreate(itemsData);
};

// export the seedItems function
module.exports = seedItems;
