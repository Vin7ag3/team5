const { Sequelize, DataTypes } = require ('sequelize');
const sequelize = new Sequelize();

// define models
const Item = require('./items')(sequelize, Sequelize.DataTypes);
// import Item model and associates it - seq. instance

module.exports = {
    item,
};