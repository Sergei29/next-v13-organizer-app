import { NextApiHandler } from "next";
import { db } from "@/lib/db";
import { createJWT, hashPassword } from "@/lib/auth";
import { serialize } from "cookie";

import { COOKIE_OPTIONS } from "@/constants";

type ReturnType = {};

const handleRegister: NextApiHandler<ReturnType> = async (req, res) => {
  if (req.method !== "POST") {
    res.status(402);
    res.end();
    return;
  }

  const user = await db.user.create({
    data: {
      email: req.body.email,
      password: await hashPassword(req.body.password),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
  });

  const jwt = await createJWT(user);
  res.setHeader(
    "Set-Cookie",
    serialize(process.env.COOKIE_NAME || "", jwt, COOKIE_OPTIONS)
  );
  res.status(201);
  res.end();
};

export default handleRegister;
