// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../../sequelize/models/user";
const { body, validationResult } = require("express-validator");
import "../../../../passports";
const bcrypt = require("bcryptjs");
const passport = require("passport");
// const { uploadToCloudinary, removeFromCloudinary } = require("./cloudinary");
//jwt stuff
const jwt = require("jsonwebtoken");

type User = {};

module.exports.sign_in =
  ("/login",
  function (req: NextApiRequest, res: NextApiResponse<User>) {
    if (req.method === "POST") {
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
    }
  });

export {};
