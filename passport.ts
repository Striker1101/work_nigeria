import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
const JWTStrategy = Strategy;
const ExtractJWT = ExtractJwt;
const db = require("./sequelize");
import { compare } from "bcryptjs";

const User = db.user;
export const passwordVerify = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async function (email, password, cb) {
        const user = await User.findOne({ where: { email: email } });
        try {
          if (!user) {
            return cb(null, false, { message: "Incorrect username" });
          }
          compare(password, user.password, (err, res) => {
            if (res) {
              // passwords match! log user in
              // passwords match! log user in
              return cb(null, user, { message: "Logged In Successfully" });
            } else {
              // passwords do not match!
              return cb(null, false, { message: "Incorrect password" });
            }
          });
        } catch (err) {
          if (err) {
            return cb(err);
          }
        }
      }
    )
  );
};

export const jwtShare = () => {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: "your_jwt_secret",
      },
      function (jwtPayload, cb) {
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return User.findByPk(jwtPayload.id)
          .then((user) => {
            return cb(null, user);
          })
          .catch((err) => {
            return cb(err);
          });
      }
    )
  );
};
