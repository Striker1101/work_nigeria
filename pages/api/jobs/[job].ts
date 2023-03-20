const db = require("@/sequelize");
import validate from "next-api-validation";

// image Upload
const multer = require("multer");
const path = require("path");

const User = db.user;
export default validate({
  post: async (req, res) => {},
  get: async (req, res) => {},
  delete: async (req, res) => {},
  put: async (req, res) => {},
});
