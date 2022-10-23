// import sequelize from '@sequelize';

const { sequelize, DataTypes, Model } = require('../modules/orm/sequelize');


const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    documentTypoe: DataTypes.STRING,
    document: DataTypes.STRING,
    phone: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});


module.exports = Client




