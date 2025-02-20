import Link from "next/link";
import { Globe, ChevronLeft, Code } from "lucide-react";
import { prisma } from "@/lib/prisma";
import Table from "@/components/Table";

const page = async ({ params }) => {
  const result = await params;
  const projectId = await result.projectId;
  const projects = await prisma.project.findMany({
    where: {
      projectKey: projectId,
    },
  });
  const project = projects[0];
  const feedbacks = await prisma.feedback.findMany({
    where: {projectId: projectId}
  })



  return (
    <div className="p-4 sm:p-6">
    {/* Back Button */}
    <div>
      <Link href="/dashboard" className="flex items-center text-indigo-700 mb-5 w-fit">
        <ChevronLeft className="h-5 w-5 mr-1" />
        <span className="text-lg">Back to projects</span>
      </Link>
    </div>

    {/* Project Details */}
    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{project.name}</h1>
        <h2 className="text-gray-600 text-lg sm:text-xl">{project.description}</h2>
      </div>
      <div className="flex flex-col gap-2">
        {project.url && (
          <Link href={project.url} className="underline text-indigo-700 flex items-center">
            <Globe className="h-5 w-5 mr-1" />
            <span className="text-base sm:text-lg">Visit site</span>
          </Link>
        )}
        <Link
          href={`/projects/${projectId}/instructions`}
          className="underline text-indigo-700 flex items-center"
        >
          <Code className="h-5 w-5 mr-1" />
          <span className="text-base sm:text-lg">Embed Code</span>
        </Link>
      </div>
    </div>

    {/* Feedback Table - Scrollable on Small Screens */}
    <div className="mt-6 overflow-x-auto">
  <div className="min-w-full">
    <Table feedbacks={feedbacks} />
  </div>
</div>
  </div>
  );
};

export default page;
