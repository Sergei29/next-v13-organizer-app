import { NextApiHandler } from "next";
import { serialize } from "cookie";

import { COOKIE_OPTIONS } from "@/constants";

type ReturnType = {};

const handleSignOut: NextApiHandler<ReturnType> = async (req, res) => {
  res.setHeader(
    "Set-Cookie",
    serialize(process.env.COOKIE_NAME || "", "", {
      ...COOKIE_OPTIONS,
      maxAge: 0,
    })
  );

  res.status(201).json({ message: "ok" });
};

export default handleSignOut;
