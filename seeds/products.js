const sequelize = require('../config/connection');
const Product = require('../models/product');

// array of productData
const productData = [
    {
        name: "Post 1",
        description: 'Description 1',
        price: 9.84,
        imageUrl: 'http://via.placeholder.com/350x350',
    },
    {
        name: "Post 2",
        description: 'Description 2',
        price: 9.84,
        imageUrl: 'http://via.placeholder.com/350x350',
    },
    {
        name: "Post 3",
        description: 'Description 3',
        price: 9.84,
        imageUrl: 'http://via.placeholder.com/350x350',
    },
    {
        name: "Post 4",
        description: 'Description 4',
        price: 9.84,
        imageUrl: 'http://via.placeholder.com/350x350',
    },
    {
        name: "Post 5",
        description: 'Description 5',
        price: 9.84,
        imageUrl: 'http://via.placeholder.com/350x350',
    },
    {
        name: "Post 6",
        description: 'Description 6',
        price: 9.84,
        imageUrl: 'http://via.placeholder.com/350x350',
    },
    {
        name: "Post 7",
        description: 'Description 7',
        price: 9.84,
        imageUrl: 'http://via.placeholder.com/350x350',
    },
    {
        name: "Post 8",
        description: 'Description 8',
        price: 9.84,
        imageUrl: 'http://via.placeholder.com/350x350',
    },
    {
        name: "Post 9",
        description: 'Description 9',
        price: 9.84,
        imageUrl: 'http://via.placeholder.com/350x350',
    },
];
// function to seed products to database
const seedProducts = async () => {
    await Product.bulkCreate(productData);
    console.log('Products seeded successfully');
  };
  
module.exports = seedProducts;


