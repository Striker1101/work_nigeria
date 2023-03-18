import { body, validationResult } from "express-validator";

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: Array<never> = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

export const userValidationRules = () => {
  return [
    body("email", "Please enter a valid email")
      .isEmail()
      .trim()
      .isLength({ min: 1 })
      .escape(),
    body("password", "Please enter a password with 6 or more characters")
      .isLength({ min: 6 })
      .escape(),
  ];
};
