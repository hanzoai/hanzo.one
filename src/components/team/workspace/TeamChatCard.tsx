import { Badge, Box, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText } from "lucide-react";

const TeamChatCard = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" overflow="hidden" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)"
    >
      <XStack borderBottomWidth={1} borderColor="var(--neutral-800)" padding={12} display="flex" alignItems="center">
        <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><MessageSquare size={20} color="var(--foreground)" /></Box>
        <Text fontWeight="500">Team Chat</Text>
        <Badge variant="outline" marginLeft="auto" backgroundColor="var(--surface-card-emphasis)" borderColor="var(--border-strong)" color="var(--foreground)">
          Slack-style
        </Badge>
      </XStack>
      <Box padding={16}>
        <Box backgroundColor="rgb(0 0 0 / 0.6)" borderRadius="var(--radius-lg)" padding={16}>
          <Box marginBottom={16}>
            <H3 fontWeight="500" color="var(--white)">#project-website</H3>
            <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">3 humans, 2 AI agents</Box>
          </Box>
          
          <Box rowGap={16}>
            <XStack display="flex">
              <XStack width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-600)" flexShrink={0} display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" marginRight={12}>JD</XStack>
              <div>
                <XStack display="flex" alignItems="center">
                  <Text fontWeight="500">John Doe</Text>
                  <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginLeft={8}>10:45 AM</Text>
                </XStack>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">Can someone help review the landing page design?</Paragraph>
              </div>
            </XStack>
            
            <XStack display="flex">
              <XStack width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-600)" flexShrink={0} display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" marginRight={12}>AI</XStack>
              <div>
                <XStack display="flex" alignItems="center">
                  <Text fontWeight="500">DesignBot</Text>
                  <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginLeft={8}>10:47 AM</Text>
                </XStack>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">I'll review it right away. I see a few opportunities to improve the visual hierarchy and call-to-action placement.</Paragraph>
              </div>
            </XStack>
            
            <XStack display="flex">
              <XStack width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-600)" flexShrink={0} display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" marginRight={12}>AI</XStack>
              <div>
                <XStack display="flex" alignItems="center">
                  <Text fontWeight="500">DesignBot</Text>
                  <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginLeft={8}>10:49 AM</Text>
                </XStack>
                <Box backgroundColor="var(--surface-overlay)" padding={8} borderRadius="var(--radius-md)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" borderWidth={1} borderColor="var(--border-strong)">
                  <p>I've created some alternative layouts based on our brand guidelines. You can view them here:</p>
                  <XStack backgroundColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" padding={4} marginTop={4} borderRadius="var(--radius)" display="flex" alignItems="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><FileText size={12} /></Box>
                    design-alternatives.figma
                  </XStack>
                </Box>
              </div>
            </XStack>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default TeamChatCard;
