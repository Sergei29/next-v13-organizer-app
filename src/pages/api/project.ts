import { NextApiHandler } from "next";
import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

type ReturnType = {};

const handleCreateProject: NextApiHandler<ReturnType> = async (req, res) => {
  const COOKIE_NAME: any = process.env.COOKIE_NAME;
  const jwt = req.cookies[COOKIE_NAME] as string;

  const user = await validateJWT(jwt);

  await db.project.create({
    data: {
      name: req.body.name,
      ownerId: user.id,
    },
  });

  res.json({ data: { message: "ok" } });
};

const handleProject: NextApiHandler<ReturnType> = async (req, res) => {
  switch (req.method) {
    case "POST":
      return handleCreateProject(req, res);

    default:
      res.status(402).json({ error: "Method not authorised" });
  }
};

export default handleProject;
