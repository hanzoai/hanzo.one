import { Anchor, Box, H2, MotionBox, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, MessagesSquare, Facebook, Linkedin, Instagram } from "lucide-react";

const Community = () => {
  return (
    <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="64rem" marginHorizontal="auto" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" marginBottom={24}>
            Join our Developer Community
          </H2>
          
          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
            <Anchor minHeight={44} 
              href="https://github.com/hanzoai" 
              target="_blank" 
              rel="noopener noreferrer" 
              display="flex" backgroundColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} color="var(--white)" /></Box>
              <Text color="var(--white)">GitHub</Text>
            </Anchor>
            <Anchor minHeight={44} 
              href="https://discord.gg/XthHQQj" 
              target="_blank" 
              rel="noopener noreferrer" 
              display="flex" backgroundColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><MessagesSquare size={20} color="var(--white)" /></Box>
              <Text color="var(--white)">Discord</Text>
            </Anchor>
            <Anchor minHeight={44} 
              href="https://twitter.com/hanzoai" 
              target="_blank" 
              rel="noopener noreferrer" 
              display="flex" backgroundColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Twitter size={20} color="var(--white)" /></Box>
              <Text color="var(--white)">Twitter</Text>
            </Anchor>
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Community;
