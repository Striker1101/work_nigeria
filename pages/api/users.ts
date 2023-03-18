// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../sequelize/models/user";
type User = {};

export default async function userAuth(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const method = req.method;
  switch (method) {
    case "POST":
      return res.status(200).json({ user: [{ name: "John Doe" }] });
    case "GET":
      try {
        const users = await User.findAll({
          attributes: ["firstName", "lastName"],
          limit: 100,
        });
        res.status(200).json({ users });
      } catch (e: any) {
        res.status(400).json({
          error_code: "get_users",
          message: e.message,
        });
      }
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method" ${method}`);
  }
}

export {};
