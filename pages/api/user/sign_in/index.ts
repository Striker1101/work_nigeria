const db = require("@/sequelize");
const bcrypt = require("bcryptjs");
import validate from "next-api-validation";
const passport = require("passport");
const jwt = require("jsonwebtoken");
import { passwordVerify, jwtShare } from "@/utils/passport";

const User = db.user;
export default validate({
  post: async (req: any, res) => {
    await passwordVerify();
    await jwtShare();
    passport.authenticate(
      "local",
      { session: false },
      (err: any, user: any, info: any) => {
        if (err || !user) {
          return res.status(400).json({
            info: info.message,
            user: {
              email: req.body.email,
              password: req.body.password,
            },
          });
        }
        req.login(user, { session: false }, (err: any) => {
          if (err) {
            res.send(err);
          }

          // generate a signed son web token with the contents of user object and return it in the response
          const opts: any = {};
          opts.expiresIn = 120;
          //add opts to token to add a experiation time
          const token = jwt.sign({ user }, "your_jwt_secret");
          return res.json({
            message: `successfully signed in ${user.firstName}`,
            token,
          });
        });
      }
    )(req, res);
  },
});
