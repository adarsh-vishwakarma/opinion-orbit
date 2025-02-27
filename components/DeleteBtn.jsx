"use client";
import { deleteProject } from "@/actions/deleteProject";
import React from "react";

const DeleteBtn = ({ projectId, onProjectDeleted }) => {
  const handleDeleteProject = async () => {
    const result = await deleteProject(projectId);

    if (result) {
      onProjectDeleted(projectId); // Update the UI after successful deletion
    }
  };

  return (
    <button
      onClick={handleDeleteProject}
      className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-900 w-full sm:w-auto"
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
