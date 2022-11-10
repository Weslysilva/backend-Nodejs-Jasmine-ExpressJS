// import sequelize from '@sequelize';

const { sequelize, DataTypes, Model } = require('../modules/orm/sequelize')

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    description: {
        type: DataTypes.STRING
    }
});


module.exports = Category




