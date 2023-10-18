module.exports = function (sequelize, DataTypes) {
    const Item = sequelize.define('Item', {
        name: DataTypes.STRING,        
});

// exports item
    return Item;
};