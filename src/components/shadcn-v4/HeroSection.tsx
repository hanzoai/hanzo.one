import { Box, Button, H1, MotionBox, Paragraph, Text } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <Box render="section" paddingTop={144} paddingBottom={96} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      {/* Background elements */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.3} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"></Box>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="64rem" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          marginBottom={24} textAlign="center"
        >
          <Text display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
            New Release
          </Text>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={40}
        >
          <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to bottom, var(--foreground), var(--foreground), rgb(255 255 255 / 0.08))" $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            Shadcn/UI with Tailwind v4 & React 19
          </H1>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            The complete guide to using shadcn/ui components with Tailwind v4 and React 19.
            Get started with the latest features and improvements.
          </Paragraph>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          display="flex" flexDirection="column" justifyContent="center" gap={16} marginBottom={64} $sm={{ flexDirection: "row" }}
        >
          <Button 
            size="lg"
            backgroundColor="var(--neutral-600)" color="var(--foreground)" borderRadius="var(--radius-md)" paddingVertical={24} hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
          >
            Get Started <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            borderColor="var(--border-strong)" color="var(--foreground)" borderRadius="var(--radius-md)" paddingVertical={24} hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Code2 size={20} /></Box> View Demo
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            borderColor="var(--neutral-700)" color="var(--foreground)" borderRadius="var(--radius-md)" paddingVertical={24} hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} /></Box> Star on GitHub
          </Button>
        </MotionBox>
        
        <Box backgroundColor="rgb(0 0 0 / 0.3)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-xl)" padding={24} marginHorizontal="auto" maxWidth="56rem" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)">
          <Text render="code" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" display="block" overflowX="auto">
            <Text color="var(--foreground)">npm</Text> <Text color="var(--foreground)">install</Text> @shadcn/ui <Text color="var(--foreground)">--force</Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
