"use client";
import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";

const ProjectManager = ({ initialProjects }) => {
  const [projects, setProjects] = useState(initialProjects);

  const handleProjectDeleted = (deletedProjectId) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.projectKey !== deletedProjectId)
    );
  };

  return <ProjectList projects={projects} onProjectDeleted={handleProjectDeleted} />;
};

export default ProjectManager;
