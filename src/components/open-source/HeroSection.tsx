import { Box, Button, H1, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitBranch } from "lucide-react";

const HeroSection = () => {
  return (
    <Box render="section" paddingTop={128} paddingBottom={80} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" backgroundClip="text" color="transparent" marginBottom={24} backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))" $sm={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            Built in the Open, For Everyone
          </H1>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
            Hanzo is proudly open source. We believe in transparency, collaboration, and community-driven innovation. 
            Everything we build is available for you to use, modify, and contribute to.
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
            <Button 
              size="sm" 
              backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box>
              <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              borderColor="var(--border-strong)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Star size={16} /></Box>
              <a href="https://github.com/hanzoai/platform" target="_blank" rel="noopener noreferrer">Star Platform Repo</a>
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              borderColor="var(--border-strong)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><GitBranch size={16} /></Box>
              <a href="https://github.com/hanzoai/platform/fork" target="_blank" rel="noopener noreferrer">Fork & Contribute</a>
            </Button>
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HeroSection;
