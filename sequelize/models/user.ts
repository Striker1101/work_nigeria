"use strict";
import { Model, DataTypes } from "sequelize";
import connection from "../connecton";
const initUser = (sequelize: any, DataTypes: any) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
  return User;
};
export default initUser(connection, DataTypes);
