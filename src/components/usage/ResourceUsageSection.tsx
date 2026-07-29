import { Box, H4, Progress, Text, XStack } from '@/gui'

import React from "react";
import { Server, CircuitBoard, HardDrive, Globe } from "lucide-react";
import { ProjectResources } from "./models/project";

interface ResourceUsageSectionProps {
  resources: ProjectResources;
}

const ResourceUsageSection = ({ resources }: ResourceUsageSectionProps) => {
  return (
    <div>
      <H4 fontWeight="500" marginBottom={16}>Resource Usage</H4>
      
      <Box rowGap={24}>
        <div>
          <XStack display="flex" justifyContent="space-between" marginBottom={4}>
            <XStack display="flex" alignItems="center" gap={8}>
              <Server size={16} color="var(--neutral-400)" />
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">CPU</Text>
            </XStack>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{resources.cpu.value}</Text>
          </XStack>
          <Progress value={resources.cpu.usage} height={8} />
        </div>
        
        <div>
          <XStack display="flex" justifyContent="space-between" marginBottom={4}>
            <XStack display="flex" alignItems="center" gap={8}>
              <CircuitBoard size={16} color="var(--neutral-400)" />
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">RAM</Text>
            </XStack>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{resources.memory.value}</Text>
          </XStack>
          <Progress value={resources.memory.usage} height={8} />
        </div>
        
        <div>
          <XStack display="flex" justifyContent="space-between" marginBottom={4}>
            <XStack display="flex" alignItems="center" gap={8}>
              <Globe size={16} color="var(--neutral-400)" />
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Network Egress</Text>
            </XStack>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{resources.network.value}</Text>
          </XStack>
          <Progress value={resources.network.usage} height={8} />
        </div>
        
        <div>
          <XStack display="flex" justifyContent="space-between" marginBottom={4}>
            <XStack display="flex" alignItems="center" gap={8}>
              <HardDrive size={16} color="var(--neutral-400)" />
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Volume</Text>
            </XStack>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{resources.storage.value}</Text>
          </XStack>
          <Progress value={resources.storage.usage} height={8} />
        </div>
      </Box>
    </div>
  );
};

export default ResourceUsageSection;
