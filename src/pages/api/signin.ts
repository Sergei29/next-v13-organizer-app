import { NextApiHandler } from "next";
import { db } from "@/lib/db";
import { comparePasswords, createJWT } from "@/lib/auth";
import { serialize } from "cookie";

import { COOKIE_OPTIONS } from "@/constants";

type ReturnType = {};

const handleSignin: NextApiHandler<ReturnType> = async (req, res) => {
  if (req.method !== "POST") {
    res.status(402);
    res.end();
    return;
  }

  const user = await db.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    res.status(401);
    res.json({ error: "Invalid login" });
    return;
  }

  const isUser = await comparePasswords(req.body.password, user.password);

  if (isUser) {
    const jwt = await createJWT(user);
    res.setHeader(
      "Set-Cookie",
      serialize(process.env.COOKIE_NAME || "", jwt, COOKIE_OPTIONS)
    );
    res.status(201);
    res.end();
  } else {
    res.status(401);
    res.json({ error: "Invalid login" });
  }
};

export default handleSignin;
