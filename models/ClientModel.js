// import sequelize from '@sequelize';

const { sequelize, DataTypes, Model } = require('../modules/orm/sequelize');
const CategoryModel= require('./CategoryModel');
const ServiceModel = require('./ServiceModel');
const ClientsAndCategory = require('./ClientsAndCategory');
const ClientAndServices = require('./ClientAndServices');

const ClientModel = sequelize.define('Client', {
    name: {
        type: DataTypes.STRING,
        allowNull : false,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull : true
    },
    email: {
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
    },
    documentType: {
        type: DataTypes.STRING,
        unique: true
    },
    document:{
        type: DataTypes.STRING,
        unique: true
    },
    phone: {
        type: DataTypes.STRING
    },
});

//Relationship

ClientModel.belongsToMany(CategoryModel, { through: ClientsAndCategory})
ClientModel.belongsToMany(ServiceModel, { through: ClientAndServices})


module.exports = ClientModel




