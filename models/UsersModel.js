// import sequelize from '@sequelize';

const { sequelize, DataTypes, Model } = require('../modules/orm/sequelize')


const UserModel = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull : false,
    },
    password: {
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
});

module.exports = { UserModel }




