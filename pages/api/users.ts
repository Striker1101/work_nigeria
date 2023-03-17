// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
require("../../connectDB");
type User = {};

export default async function userAuth(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const method = req.method;
  switch (method) {
    case "POST":
      return res.status(200).json({ user: [{ name: "John Doe" }] });
      break;
    case "GET":
      return res.status(200).json({ user: [{ name: "John Doe" }] });
  }
}

export {};
