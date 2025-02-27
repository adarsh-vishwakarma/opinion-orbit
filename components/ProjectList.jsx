import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import DeleteBtn from "./DeleteBtn";
const ProjectList = ({ projects, onProjectDeleted }) => {
 
  return (
    <ul className="flex flex-wrap justify-center gap-4 m-5 p-4">
      {projects.map((project) => (
        <li key={project.projectKey} className="border rounded-lg shadow-md p-4 bg-white w-full sm:w-80 md:w-64 flex flex-col min-h-64">
          <div className="text-lg font-semibold truncate">{project.name}</div>
          <hr className="border-t border-gray-300 my-2" />
          <div className="text-gray-600 flex-grow max-w-52 text-ellipsis overflow-hidden whitespace-nowrap">
            <p>{project.description ? project.description : "No Description Available"}</p>
          </div>
          <div className="mt-auto flex flex-wrap justify-end gap-2">
            <Link href={`/projects/${project.projectKey}`} className="bg-gray-800 text-white px-4 py-2 rounded-md hover:black w-full sm:w-auto text-center">
              View
            </Link>
            <DeleteBtn projectId={project.projectKey} onProjectDeleted={onProjectDeleted} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
