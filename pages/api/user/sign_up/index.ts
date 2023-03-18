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

module.exports.sign_up = [
  body("email", "username must be specified")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("password", "password must be more than 4 words")
    .isLength({ min: 4 })
    .escape(),

  async function (req: NextApiRequest, res: NextApiResponse<User>) {
    if (req.method === "POST") {
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(req.body.password, salt);
      // otherwise, store hashedPassword in DB
      // const data = await uploadToCloudinary(req.file.path, "club_house");
      const user = new User({
        email: req.body.email,
        password: hash,
        role: "subscriber",
        // imageUrl: data.url,
        // publicId: data.public_id,
      });
      // Extract the validation errors from a request.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({
          user: user,
          errors: errors.array(),
        });
        return;
      }
      //sucess
      //save data to postgres
    }
  },
];

export {};
