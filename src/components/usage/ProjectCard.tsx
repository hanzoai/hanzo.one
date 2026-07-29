import { Box, Grid, MotionBox, Text, XStack, createAnimationVariant, curves } from '@/gui'

import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "./models/project";
import ResourceUsageSection from "./ResourceUsageSection";
import ProjectCostSection from "./ProjectCostSection";

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

interface ProjectCardProps {
  project: Project;
  onToggleExpand: (projectId: string) => void;
}

const ProjectCard = ({ project, onToggleExpand }: ProjectCardProps) => {
  return (
    <MotionBox 
      variants={cardAnimation}
      borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(255 255 255 / 0.2)" overflow="hidden"
    >
      <XStack 
        padding={16} display="flex" alignItems="center" justifyContent="space-between" cursor="pointer" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
        onClick={() => onToggleExpand(project.id)}
      >
        <XStack display="flex" alignItems="center" gap={16}>
          {project.expanded ? (
            <ChevronUp size={20} color="var(--neutral-400)" />
          ) : (
            <ChevronDown size={20} color="var(--neutral-400)" />
          )}
          <Text fontWeight="500">{project.name}</Text>
        </XStack>
        <XStack display="flex" alignItems="center" gap={32}>
          <div>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Current Cost</Box>
            <Box fontWeight="500">{project.currentCost}</Box>
          </div>
          <div>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Estimated</Box>
            <Box fontWeight="500">{project.estimatedCost}</Box>
          </div>
        </XStack>
      </XStack>
      
      {project.expanded && (
        <Box padding={24} borderTopWidth={1} borderColor="var(--neutral-800)">
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginBottom={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <ResourceUsageSection resources={project.resources} />
            <ProjectCostSection costs={project.costs} currentCost={project.currentCost} />
          </Grid>
        </Box>
      )}
    </MotionBox>
  );
};

export default ProjectCard;
