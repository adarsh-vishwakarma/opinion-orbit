import Link from "next/link";
import { Globe, ChevronLeft, Code } from "lucide-react";
import { prisma } from "@/lib/prisma";

const page = async ({ params }) => {
  const result = await params;
  const projectId = await result.projectId;
  const projects = await prisma.project.findMany({
    where: {
      projectKey: projectId,
    },
  });
  const project = projects[0];

  return (
    <div>
      <div>
        <Link
          href="/dashboard"
          className="flex items-center text-indigo-700 mb-5 w-fit"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="text-lg">Back to projects</span>
        </Link>
      </div>
      <div className="flex justify-between items-start">
        <div className="">
          <h1 className="text-3xl font-bold mb-3">{project.name}</h1>
          <h2 className="text-primary-background text-xl mb-2">
            {project.description}
          </h2>
        </div>
        <div className="flex flex-col">
          {project.url ? (
            <Link
              href={project.url}
              className="underline text-indigo-700 flex items-center"
            >
              <Globe className="h-5 w-5 mr-1" />
              <span className="text-lg">Visit site</span>
            </Link>
          ) : null}
          <Link
            href={`/projects/${projectId}/instructions`}
            className="underline text-indigo-700 flex items-center mt-2"
          >
            <Code className="h-5 w-5 mr-1" />
            <span className="text-lg">Embed Code</span>
          </Link>
        </div>
      </div>
      <div>
        {/* <Table data={project.feedbacks} /> */}
      </div>
    </div>
  );
};

export default page;
