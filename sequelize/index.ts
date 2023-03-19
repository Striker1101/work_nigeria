import { Sequelize, DataTypes } from "sequelize";
import config from "./config/config.js";

interface Config {
  development: any;
  test: any;
  production: any;
}

const configs: Config = config;
let sequelize;
if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(configs.production);
} else if (process.env.NODE_ENV === "test") {
  sequelize = new Sequelize(configs.test);
} else {
  sequelize = new Sequelize(configs.development);
}

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./models/user")(sequelize, DataTypes);
db.job = require("./models/job")(sequelize, DataTypes);
db.additionalQuestion = require("./models/additionalQuestion")(
  sequelize,
  DataTypes
);
db.genre = require("./models/genre")(sequelize, DataTypes);
db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

// 1 to Many Relation

db.job.hasMany(db.additionalQuestion, {
  foreignKey: "job_id",
  as: "additionalQuestion",
});

db.additionalQuestion.belongsTo(db.job, {
  foreignKey: "job_id",
  as: "job",
});

module.exports = db;
