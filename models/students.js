'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Students.init({
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        // value error megase
        msg: "Email Already"
      },
      validate: {
        isEmail: {
          msh: "Please enter valid email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 100],
          msg: 'minimal password length is 6'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};