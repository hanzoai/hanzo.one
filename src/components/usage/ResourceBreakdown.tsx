import { Box, Grid, MotionBox, XStack, createAnimationVariant, curves } from '@/gui'

import React from "react";
import { Cpu, HardDrive, Globe, CircuitBoard } from "lucide-react";
import { motion } from "framer-motion";

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

const ResourceBreakdown = () => {
  const resources = [
    {
      name: "Compute (CPU)",
      icon: <Cpu size={20} />,
      description: "CPU cost across all services",
      cost: "$0.0021 per vCPU/hour",
      percentage: 35
    },
    {
      name: "Memory (RAM)",
      icon: <CircuitBoard size={20} />,
      description: "Memory cost across all services",
      cost: "$0.0015 per GB/hour",
      percentage: 45
    },
    {
      name: "Storage",
      icon: <HardDrive size={20} />,
      description: "Persistent volume storage",
      cost: "$0.00015 per GB/hour",
      percentage: 15
    },
    {
      name: "Network Egress",
      icon: <Globe size={20} />,
      description: "Outbound data transfer",
      cost: "$0.10 per GB",
      percentage: 5
    }
  ];

  return (
    <MotionBox 
      variants={cardAnimation}
      borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(255 255 255 / 0.2)" overflow="hidden" padding={24}
    >
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
        {resources.map((resource, index) => (
          <Box 
            key={index} 
            backgroundColor="rgb(0 0 0 / 0.3)" borderRadius="var(--radius-xl)" padding={20} borderWidth={1} borderColor="var(--neutral-800)"
          >
            <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
              <Box color="var(--neutral-400)">
                {resource.icon}
              </Box>
              <Box fontWeight="500">{resource.name}</Box>
            </XStack>
            
            <Box marginBottom={16}>
              <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={4}>{resource.description}</Box>
              <Box fontWeight="500">{resource.cost}</Box>
            </Box>
            
            <Box width="100%" backgroundColor="var(--neutral-800)" borderRadius="var(--radius-full)" height={10}>
              <Box 
                backgroundColor="var(--neutral-500)" height={10} borderRadius="var(--radius-full)" 
                style={{ width: `${resource.percentage}%` }}
              ></Box>
            </Box>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={4}>
              {resource.percentage}% of total cost
            </Box>
          </Box>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default ResourceBreakdown;
