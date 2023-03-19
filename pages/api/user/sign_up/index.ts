const db = require("@/sequelize");
const bcrypt = require("bcryptjs");
import validate from "next-api-validation";
// import { v4 as uuidv4 } from "uuid";
import { userValidationRules, validateRequest } from "@/validator/sign_up";

const User = db.user;
export default validate({
  post: async (req, res) => {
    await userValidationRules().map((validation) => validation.run(req));
    await validateRequest(req, res, async () => {
      const { password, email, firstName, lastName } = req.body;
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(password, salt);
      // otherwise, store hashedPassword in DB

      //sucess
      //save data to postgres
      const user = await User.create({
        email,
        password: hash,
        role: "subscriber",
        firstName,
        lastName,
        imageUrl: "data.url",
        publicId: "data.public_id",
      });

      res.status(200).json({ message: "success" });
    });
  },
});
