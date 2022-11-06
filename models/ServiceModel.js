// import sequelize from '@sequelize';

const { sequelize, DataTypes, Model } = require('../modules/orm/sequelize')

const ServiceModel = sequelize.define('Service', {
    name: {
        type: DataTypes.STRING,
        allowNull : false,
    },
    description: {
        type: DataTypes.STRING
    },
    valor: {
        type: DataTypes.DOUBLE,
        allowNull : true,
        defaultValue: 0.00
    },

});


module.exports = ServiceModel




