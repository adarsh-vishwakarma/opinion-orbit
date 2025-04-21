import { NEXT_AUTH } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import ProjectManager from "@/components/ProjectManager";
import React from "react";
import Loading from "@/components/Loading";

const Page = async () => {
  const session = await getServerSession(NEXT_AUTH);
  if (!session) return <Loading />;

  const userProjects = await prisma.project.findMany({
    where: { userId: session.user.id },
  });

  return (
    <div className="container mx-auto px-6 py-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-orange-400 tracking-tight">
        Dashboard 📄
      </h1>
      <div className="w-full h-[1px] bg-gray-700 mb-6"></div>
      <section className="text-center">
        <ProjectManager initialProjects={userProjects} />
      </section>
    </div>
  );
};

export default Page;
