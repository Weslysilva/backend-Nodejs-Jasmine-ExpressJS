// import sequelize from '@sequelize';

const { sequelize, DataTypes, Model } = require('../modules/orm/sequelize')

const TokensModel = sequelize.define('User', {
    
    token: {
        type: DataTypes.STRING,
        allowNull : false,
    },
    validity: {
        type: DataTypes.STRING,
        allowNull : false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
    },

});

module.exports = { TokensModel }




