import { BlueprintLine, Box, Button, H1, MotionBox, Paragraph, Text, XStack, YStack, createAnimationVariant, curves, timing } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInAnimation = createAnimationVariant("fadeIn", {
  duration: timing.medium,
  curve: curves.snappy
});

const Hero = () => {
  return (
    <Box render="section" maxWidth="64rem" marginHorizontal="auto" marginBottom={128} position="relative">
      <BlueprintLine orientation="horizontal" position="20%" color="rgba(255,255,255,0.04)" />
      <BlueprintLine orientation="vertical" position="15%" color="rgba(255,255,255,0.04)" />
      
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        textAlign="center"
      >
        <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} color="var(--white)" $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }} $lg={{ fontSize: "var(--text-7xl)", lineHeight: "var(--leading-7xl)" }}>
          Infrastructure for the<br />modern world
        </H1>
        <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto" marginBottom={48} $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}>
          Build, deploy, and scale applications effortlessly with our developer-focused platform.
        </Paragraph>

        <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" marginBottom={48} $sm={{ flexDirection: "row" }}>
          <Button 
            size="sm" 
            backgroundColor="var(--white)" color="var(--pure-black)" transition="color, background-color, border-color, fill, stroke 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "var(--neutral-200)" }}
          >
            Start building <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            borderColor="var(--neutral-800)" backgroundColor="transparent" transition="color, background-color, border-color, fill, stroke 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
          >
            Documentation
          </Button>
        </YStack>
        
        <XStack fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" display="flex" alignItems="center" justifyContent="center" gap={8}>
          No credit card required <Text marginHorizontal={8}>•</Text> Cancel anytime
        </XStack>
      </MotionBox>
    </Box>
  );
};

export default Hero;
