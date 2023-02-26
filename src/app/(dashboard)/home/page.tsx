import { Suspense } from "react";
import { cookies } from "next/headers";
import Link from "next/link";

import { delay, db } from "@/lib";
import { getUserFromCookie } from "@/lib/auth";
import Greetings, { GreetingsSkeleton } from "@/components/Greetings";
import ProjectCard from "@/components/ProjectCard";

const getData = async () => {
  await delay(2000);
  const user = await getUserFromCookie(cookies());
  const projects = await db.project.findMany({
    where: {
      ownerId: user?.id,
    },
    include: {
      tasks: true,
    },
  });

  return { projects };
};

const DashboardHomePage = async () => {
  const { projects } = await getData();

  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <Suspense fallback={<GreetingsSkeleton />}>
            {/* @ts-ignore Server Component */}
            <Greetings />
          </Suspense>
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          {projects.map((project) => (
            <Link
              href={`/project/${project.id}`}
              className="w-1/3 p-3"
              key={project.id}
            >
              <ProjectCard project={project} />
            </Link>
          ))}

          <div className="w-1/3 p-3">{/* new project here */}</div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">{/* tasks here */}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
