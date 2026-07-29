import { Badge, Box, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { FileText, Calendar, Bot } from "lucide-react";

const KnowledgeBaseCard = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" overflow="hidden" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)"
    >
      <XStack borderBottomWidth={1} borderColor="var(--neutral-800)" padding={12} display="flex" alignItems="center">
        <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><FileText size={20} color="var(--foreground)" /></Box>
        <Text fontWeight="500">Knowledge Base</Text>
        <Badge variant="outline" marginLeft="auto" backgroundColor="var(--surface-card-emphasis)" borderColor="var(--border-strong)" color="var(--foreground)">
          Notion-style
        </Badge>
      </XStack>
      <Box padding={16}>
        <Box backgroundColor="rgb(0 0 0 / 0.6)" borderRadius="var(--radius-lg)" padding={16}>
          <XStack marginBottom={16} display="flex" alignItems="center" justifyContent="space-between">
            <H3 fontWeight="500" color="var(--white)">Company Wiki</H3>
            <XStack display="flex" alignItems="center" columnGap={8}>
              <XStack fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)" display="flex" alignItems="center">
                <XStack width={20} height={20} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-600)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" marginRight={4}>AI</XStack>
                <span>Updating</span>
              </XStack>
            </XStack>
          </XStack>
          
          <Box rowGap={12}>
            <Box padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" borderWidth={1} borderColor="var(--border-strong)">
              <XStack display="flex" alignItems="center" marginBottom={4}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Calendar size={16} color="var(--foreground)" /></Box>
                <Text fontWeight="500">Onboarding Process</Text>
              </XStack>
              <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">
                Step-by-step guide for new employees, updated automatically by HR Bot.
              </Paragraph>
            </Box>
            
            <Box padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" borderWidth={1} borderColor="var(--border-strong)">
              <XStack display="flex" alignItems="center" marginBottom={4}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><FileText size={16} color="var(--foreground)" /></Box>
                <Text fontWeight="500">Technical Documentation</Text>
              </XStack>
              <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">
                API references and architectural diagrams maintained by DevBot.
              </Paragraph>
            </Box>
            
            <Box padding={8} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-md)" borderWidth={1} borderColor="var(--border-strong)">
              <XStack display="flex" alignItems="center" marginBottom={4}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Bot size={16} color="var(--foreground)" /></Box>
                <Text fontWeight="500">AI Activity: Adding Marketing Guidelines</Text>
              </XStack>
              <XStack display="flex" alignItems="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">
                <span>ContentBot is updating brand guidelines based on latest team meeting</span>
              </XStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default KnowledgeBaseCard;
