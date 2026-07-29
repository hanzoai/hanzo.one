import { Box, Button, H4, XStack } from '@/gui'

import React from "react";
import { CostItem } from "./models/project";

interface ProjectCostSectionProps {
  costs: CostItem[];
  currentCost: string;
}

const ProjectCostSection = ({ costs, currentCost }: ProjectCostSectionProps) => {
  return (
    <div>
      <XStack display="flex" justifyContent="space-between" marginBottom={16}>
        <H4 fontWeight="500">Project Cost</H4>
        <Button 
          variant="ghost" 
          size="sm"
          color="var(--foreground)" hoverStyle={{ color: "var(--foreground)", backgroundColor: "rgb(255 255 255 / 0.2)" }}
        >
          View Cost by Service
        </Button>
      </XStack>
      
      <Box rowGap={16}>
        {costs.map((cost, index) => (
          <XStack key={index} display="flex" justifyContent="space-between">
            <div>
              <Box fontWeight="500">{cost.name}</Box>
              <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">{cost.usage}</Box>
              <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">{cost.rate}</Box>
            </div>
            <Box fontWeight="500">{cost.cost}</Box>
          </XStack>
        ))}
        
        <XStack paddingTop={16} borderTopWidth={1} borderColor="var(--neutral-800)" display="flex" justifyContent="space-between">
          <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Metrics are shown as minutely accumulated values</Box>
          <Box fontWeight="700">{currentCost}</Box>
        </XStack>
      </Box>
    </div>
  );
};

export default ProjectCostSection;
