"use strict";
import { Model } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
  class AdditionalQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  AdditionalQuestion.init(
    {
      question: DataTypes.JSON,
      job_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AdditionalQuestion",
      tableName: "additionalQuestion",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
  return AdditionalQuestion;
};
