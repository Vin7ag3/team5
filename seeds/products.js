const sequelize = require('../config/connection');
const Product = require('../models/product');

// array of productData
const productData = [
    {
        name: "Noir",
        description: 'Bushwick Brooklyn DIY',
        price: 120.84,
        imageUrl: '/img/1.jpg',
    },
    {
        name: "Neo",
        description: 'Truffaut tousled',
        price: 58.33,
        imageUrl: '/img/2.jpg',
    },
    {
        name: "Ark",
        description: 'cold-pressed gorpcore',
        price: 589.64,
        imageUrl: '/img/3.jpg',
    },
    {
        name: "Cafetype",
        description: 'chillwave gluten-free',
        price: 28.22,
        imageUrl: '/img/4.jpg',
    },
    {
        name: "Dean",
        description: 'biodiesel tousled',
        price: 89.96,
        imageUrl: '/img/5.jpg',
    },
    {
        name: "Far East",
        description: 'adaptogen vaporware',
        price: 448.44,
        imageUrl: '/img/6.jpg',
    },
    {
        name: "Gotham",
        description: 'kogi fashion',
        price: 26.94,
        imageUrl: '/img/7.jpg',
    },
    {
        name: "Vogue",
        description: 'High Society',
        price: 43.87,
        imageUrl: '/img/8.jpg',
    },
    {
        name: "Soleil",
        description: 'Shoreditch 90',
        price: 65.22,
        imageUrl: '/img/9.jpg',
    },
];
// function to seed products to database
const seedProducts = async () => {
    await Product.bulkCreate(productData);
    console.log('Products seeded successfully');
  };
module.exports = productData;
module.exports = seedProducts;


