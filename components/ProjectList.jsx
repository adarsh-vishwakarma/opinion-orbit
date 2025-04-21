"use client"; // Ensure this is a client component

import React, { useState } from "react";
import Link from "next/link";
import { Eye, Trash, Loader2, Ghost } from "lucide-react";
import { Button } from "./ui/button";
import DeleteBtn from "./DeleteBtn";
import NewProjBtn from "./NewProjBtn";

const ProjectList = ({ projects, onProjectDeleted }) => {
  const [deletingProjectId, setDeletingProjectId] = useState(null); // Track project being deleted

  return (
    <main className="mx-10 max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-white">My Projects</h1>
      </div>

      <div className="p-6">
       

        {projects && projects.length !== 0 ? (
          <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
         

            {projects.map((project) => (
              <div
                key={project.projectKey}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-300 flex flex-col items-center"
              >
                {/* Project Name */}
                <div className="w-full border border-orange-400 rounded p-2 text-center font-semibold text-zinc-900 truncate">
                  {project.name}
                </div>

                {/* Description */}
                <div className="w-full border border-orange-300 rounded p-2 text-center mt-2 text-sm text-zinc-600 truncate">
                  {project.description || "No Description Available"}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-4">
                  {/* View Button - Redirects */}
                  <Link
                    href={`/projects/${project.projectKey}`}
                    className="bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600 transition"
                  >
                    <Eye className="h-5 w-5" />
                  </Link>

                  {/* Delete Button */}
                  <DeleteBtn projectId={project.projectKey} onProjectDeleted={onProjectDeleted} />
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-2">
            <Ghost className="h-8 w-8 text-zinc-800" />
            <h3 className="font-semibold text-xl">No projects found</h3>
            <p>Start by creating a new project.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectList;
