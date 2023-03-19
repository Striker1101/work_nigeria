const db = require("@/sequelize");
import validate from "next-api-validation";

const User = db.user;
export default validate({
  post: async (req, res) => {}
})