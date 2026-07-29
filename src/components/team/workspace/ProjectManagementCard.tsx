import { Badge, Box, H3, MotionBox, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Kanban, CheckCircle, Bot } from "lucide-react";

const ProjectManagementCard = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" overflow="hidden" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)"
    >
      <XStack borderBottomWidth={1} borderColor="var(--neutral-800)" padding={12} display="flex" alignItems="center">
        <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Kanban size={20} color="var(--foreground)" /></Box>
        <Text fontWeight="500">Project Management</Text>
        <Badge variant="outline" marginLeft="auto" backgroundColor="var(--surface-card-emphasis)" borderColor="var(--border-strong)" color="var(--foreground)">
          Linear-style
        </Badge>
      </XStack>
      <Box padding={16}>
        <Box backgroundColor="rgb(0 0 0 / 0.6)" borderRadius="var(--radius-lg)" padding={16}>
          <XStack marginBottom={16} display="flex" alignItems="center" justifyContent="space-between">
            <XStack display="flex" alignItems="center">
              <H3 fontWeight="500" color="var(--white)">Website Redesign</H3>
              <Badge marginLeft={8} backgroundColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" borderColor="var(--border-strong)">In Progress</Badge>
            </XStack>
            <XStack display="flex" columnGap={8}>
              <XStack width={24} height={24} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-600)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="700">AI</XStack>
              <XStack width={24} height={24} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-600)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">JD</XStack>
            </XStack>
          </XStack>
          
          <Box rowGap={12}>
            <XStack display="flex" alignItems="center" padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" borderWidth={1} borderColor="var(--border-strong)">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><CheckCircle size={16} color="var(--neutral-500)" /></Box>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Create wireframes</Text>
              <XStack marginLeft="auto" display="flex" alignItems="center" columnGap={4}>
                <XStack width={20} height={20} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-600)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">JD</XStack>
              </XStack>
            </XStack>
            <XStack display="flex" alignItems="center" padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" borderWidth={1} borderColor="var(--border-strong)">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><CheckCircle size={16} color="var(--neutral-500)" /></Box>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Design homepage</Text>
              <XStack marginLeft="auto" display="flex" alignItems="center" columnGap={4}>
                <XStack width={20} height={20} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-600)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">AI</XStack>
              </XStack>
            </XStack>
            <XStack display="flex" alignItems="center" padding={8} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-md)" borderWidth={1} borderColor="var(--border-strong)">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Bot size={16} color="var(--foreground)" /></Box>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">AI working: Implementing frontend code</Text>
            </XStack>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default ProjectManagementCard;
