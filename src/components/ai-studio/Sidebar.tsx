import { Box, H3, MotionBox, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Cpu, MessageSquare, Code, Bot } from "lucide-react";
import { ModelInterface } from "./types";

interface SidebarProps {
  showSidebar: boolean;
  models: ModelInterface[];
  modelSelection: string;
  setModelSelection: (id: string) => void;
}

const Sidebar = ({ 
  showSidebar, 
  models, 
  modelSelection, 
  setModelSelection 
}: SidebarProps) => {
  if (!showSidebar) return null;

  return (
    <MotionBox 
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 240, opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      backgroundColor="var(--surface-card-emphasis)" borderRightWidth={1} borderColor="var(--neutral-800)" height="100%" marginRight={16} padding={16} overflowY="auto"
    >
      <Box rowGap={24}>
        <div>
          <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={8}>MODELS</H3>
          <Box rowGap={4}>
            {models.map((model) => (
              <XStack minHeight={44}
                key={model.id}
                onClick={() => setModelSelection(model.id)}
                render="button" width="100%" textAlign="left" paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius-md)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" display="flex" alignItems="center" backgroundColor={modelSelection === model.id ? "rgb(255 255 255 / 0.5)" : undefined} color={modelSelection === model.id ? "var(--white)" : "var(--neutral-300)"} hoverStyle={modelSelection === model.id ? undefined : { backgroundColor: "var(--neutral-800)" }}
              >
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Cpu size={16} /></Box>
                <div>
                  <div>{model.name}</div>
                  <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{model.provider}</Box>
                </div>
              </XStack>
            ))}
          </Box>
        </div>
        
        <div>
          <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={8}>SAVED PROJECTS</H3>
          <Box rowGap={4}>
            <XStack minHeight={44} render="button" width="100%" textAlign="left" paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius-md)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" display="flex" alignItems="center" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><MessageSquare size={16} /></Box>
              <span>Customer Support Bot</span>
            </XStack>
            <XStack minHeight={44} render="button" width="100%" textAlign="left" paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius-md)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" display="flex" alignItems="center" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Code size={16} /></Box>
              <span>Code Generator</span>
            </XStack>
            <XStack minHeight={44} render="button" width="100%" textAlign="left" paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius-md)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" display="flex" alignItems="center" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Bot size={16} /></Box>
              <span>Data Analysis Agent</span>
            </XStack>
          </Box>
        </div>
      </Box>
    </MotionBox>
  );
};

export default Sidebar;
