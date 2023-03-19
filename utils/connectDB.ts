// const passport = require("passport");
const { sequelize } = require("./sequelize/models/index");

const connectDb = async () => {
  console.log("checking DB connection");
  try {
    await sequelize.authenticate();
    console.log("Database Connection established");
  } catch (e) {
    console.log("Database connection failed", e);
    process.exit(1);
  }
};
(async () => {
  await connectDb();
})();

// module.exports = connectDb;
export {};
