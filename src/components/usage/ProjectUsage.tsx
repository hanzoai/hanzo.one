import { Box } from '@/gui'

import React from "react";
import ProjectCard from "./ProjectCard";
import { useProjects } from "./hooks/useProjects";

const ProjectUsage = () => {
  const { projects, toggleExpand } = useProjects();

  return (
    <Box rowGap={16}>
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onToggleExpand={toggleExpand} 
        />
      ))}
    </Box>
  );
};

export default ProjectUsage;
