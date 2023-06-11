'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Account.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gmail: {unique:true, type: DataTypes.STRING},
    password: DataTypes.STRING,
    phone: {unique:true ,type: DataTypes.STRING(10)},
    gender: {defaultValue:true ,type: DataTypes.BOOLEAN},
    birthday:{defaultValue:new Date(), type: DataTypes.DATE},
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};