const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Product = require('./product');
const Item = require('./items');

Product.hasMany(Item, {
    foreignKey: 'product_id',
});

Item.belongsTo(Product, {
    foreignKey: 'product_id',
});

module.exports = {
    Item,
    Product,
};
