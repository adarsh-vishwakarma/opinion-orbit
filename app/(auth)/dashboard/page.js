import ProjectList from "@/components/ProjectList";
import { NEXT_AUTH } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import React from "react";


const page = async () => {
  const session = await getServerSession(NEXT_AUTH);
  if (!session) return <div>Loading...</div>;

  const userProjects = await prisma.project.findMany({
    where: { userId:  session.user.id },
  });




 
  return (
    <div className={`container mx-auto px-4`}>
     
        <h1 className="text-4xl font-bold mb-6 text-gray-800 tracking-tight">
          Dashboard 📄
        </h1>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <section className="text-center">

        <ProjectList projects={userProjects}/>
        </section>
   
    </div>
  );
};

export default page;
// {JSON.stringify(session)}{" "}
