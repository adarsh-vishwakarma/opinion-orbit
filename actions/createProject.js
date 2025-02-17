"use server";
import { NEXT_AUTH } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from "uuid";

export async function createProject(formData) {
  const session = await getServerSession(NEXT_AUTH);
  if (!session) throw new Error("Unauthorized");

  const projectData = {
    name: formData.name,
    description: formData.description,
    url: formData.url,
    userId: session?.user?.id,
    projectKey: uuidv4(),
  };

  const newProject = await prisma.project.create({
    data: projectData,
    select: { id: true, projectKey: true },
  });

  return newProject;
}
