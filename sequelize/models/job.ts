"use strict";
import { Model } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Job.init(
    {
      companyName: DataTypes.STRING,
      address: DataTypes.STRING,
      position: DataTypes.STRING,
      email: DataTypes.STRING,
      description: DataTypes.STRING,
      skills: DataTypes.ARRAY(DataTypes.STRING),
      poster_id: DataTypes.INTEGER,
      chapter: DataTypes.INTEGER,
      deadLine: DataTypes.DATE,
      location: DataTypes.STRING,
      responsibility: DataTypes.ARRAY(DataTypes.STRING),
      genre_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Job",
      tableName: "job",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
  return Job;
};
