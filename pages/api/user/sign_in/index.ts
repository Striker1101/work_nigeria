const db = require("@/sequelize");
const bcrypt = require("bcryptjs");
import validate from "next-api-validation";
const passport = require("passport");
const jwt = require("jsonwebtoken");
import "@/passports";

const User = db.user;
export default validate({
  post: async (req, res) => {
    "/login",
      passport.authenticate("local", { session: false }, (err, user, info) => {
        if (err || !user) {
          return res.status(400).json({
            message: "Something is not right",
            user: user,
            info,
          });
        }
        req.login(user, { session: false }, (err) => {
          if (err) {
            res.send(err);
          }

          // generate a signed son web token with the contents of user object and return it in the response
          const opts = {};
          opts.expiresIn = 120;
          //add opts to token to add a experiation time
          const token = jwt.sign({ user }, "your_jwt_secret");
          return res.json({ user, token });
        });
      })(req, res);
  },
});
