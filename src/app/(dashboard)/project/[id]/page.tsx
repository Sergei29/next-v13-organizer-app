import React from "react";
import { cookies } from "next/headers";

import { db } from "@/lib";
import { getUserFromCookie } from "@/lib/auth";
import TaskCard from "@/components/TaskCard";

const getData = async (id: string) => {
  const user = await getUserFromCookie(cookies());
  const project = await db.project.findFirst({
    where: { id, ownerId: user?.id },
    include: {
      tasks: true,
    },
  });

  return project;
};

type PageProps = {
  params: { id: string };
};

const ProjectDetailsPage = async ({ params }: PageProps) => {
  const project = await getData(params.id);

  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      {/* @ts-ignore Server Component */}
      <TaskCard tasks={project?.tasks} title={project?.name} />
    </div>
  );
};

export default ProjectDetailsPage;
