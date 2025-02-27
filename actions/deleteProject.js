"use server";
import { prisma } from "@/lib/prisma";

export async function deleteProject(projectId) {
  try {
    const result = await prisma.project.delete({
      where: { projectKey: projectId },
    });

    if (result.count > 0) {
      return { success: true, message: "Project deleted successfully" };
    } else {
      return { success: false, message: "Project not found" };
    }
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, message: "Failed to delete project" };
  }
}
