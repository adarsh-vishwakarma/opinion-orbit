"use client";
import { deleteProject } from "@/actions/deleteProject";
import React, { useState } from "react";
import { Trash, Loader2 } from "lucide-react";
import { Button } from "./ui/button"; // Import Button from UI

const DeleteBtn = ({ projectId, onProjectDeleted }) => {
  const [isDeleting, setIsDeleting] = useState(false); // Track deletion state

  const handleDeleteProject = async () => {
    setIsDeleting(true);
    const result = await deleteProject(projectId);

    if (result) {
      onProjectDeleted(projectId); // Update UI
    }

    setIsDeleting(false);
  };

  return (
    <Button
      onClick={handleDeleteProject}
      variant="destructive" // Assuming your UI has a 'destructive' variant for red buttons
      className="p-3 rounded-full"
      disabled={isDeleting}
    >
      {isDeleting ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <Trash className="h-5 w-5" />
      )}
    </Button>
  );
};

export default DeleteBtn;
