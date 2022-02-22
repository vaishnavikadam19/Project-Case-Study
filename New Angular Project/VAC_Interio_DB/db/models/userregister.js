'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRegister extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserRegister.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Address: DataTypes.STRING,
    Email: DataTypes.STRING,
    Gender: DataTypes.STRING,
    Password: DataTypes.STRING,
    Confirm_password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserRegister',
  });
  return UserRegister;
};