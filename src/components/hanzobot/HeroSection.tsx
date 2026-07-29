import { Anchor, Box, Button, ChromeText, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, Star, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Box render="section" paddingTop={128} paddingBottom={64} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), var(--pure-black))"></Box>
      <Box position="absolute" top={80} right={40} width={288} height={288} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={80} left={40} width={288} height={288} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
        >
          <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} marginBottom={24} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
            Multi-Agent Simulation Framework
          </Box>
          
          <ChromeText as="h1" fontSize="var(--text-5xl)" lineHeight="var(--leading-tight)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }} $lg={{ fontSize: "var(--text-7xl)", lineHeight: "var(--leading-7xl)" }}>
            Hanzo Bot
          </ChromeText>
          
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
            A powerful framework for creating, deploying, and managing autonomous AI agents.
            Build intelligent systems that can interact across multiple platforms while maintaining 
            consistent personalities and knowledge.
          </Paragraph>
          
          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16} marginBottom={32}>
            <Button 
              size="lg"
              color="var(--white)" borderRadius="var(--radius-lg)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--neutral-500))" }}
            >
              Get Started
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              color="var(--white)" borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(255 255 255 / 0.05)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} /></Box>
              GitHub
              <XStack marginLeft={8} display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Star size={16} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Star</Text>
              </XStack>
            </Button>
          </XStack>
          
          <Box color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            As seen powering 
            <Anchor tap href="https://twitter.com/DegenSpartanAI" target="_blank" rel="noopener noreferrer" color="var(--foreground)" marginHorizontal={4} hoverStyle={{ color: "var(--foreground)" }}>@DegenSpartanAI</Anchor> 
            and 
            <Anchor tap href="https://twitter.com/aixvc_agent" target="_blank" rel="noopener noreferrer" color="var(--foreground)" marginHorizontal={4} hoverStyle={{ color: "var(--foreground)" }}>@aixvc_agent</Anchor>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HeroSection;
