import { AnimatedHeading, AnimatedSection, AnimatedStaggerContainer, Box, Button, ChromeText, MotionBox, MotionText, buttonAnimation, createAnimationVariant, curves } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const fadeInUpVariant = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15,
  blur: 8
});

const HeroSection = () => {
  return (
    <AnimatedSection minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" paddingHorizontal={16} paddingVertical={128} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.3} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.1))"></Box>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <AnimatedStaggerContainer maxWidth="64rem" marginHorizontal="auto" textAlign="center" position="relative" zIndex={10} delayFactor={0.07}>
        <AnimatedHeading>
          <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
            Vector Database for AI
          </Box>
        </AnimatedHeading>
        
        <AnimatedHeading>
          <ChromeText as="h1" fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            Blazing Fast Vector Search
          </ChromeText>
        </AnimatedHeading>
        
        <MotionText variants={fadeInUpVariant} fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
          Hanzo Vector is a high-performance vector database designed for AI applications,
          with advanced similarity search and seamless integrations with popular ML frameworks.
        </MotionText>
        
        <MotionBox 
          variants={buttonAnimation}
          display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}
        >
          <Button size="lg" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} borderStyle="none" backgroundImage="linear-gradient(to right, var(--neutral-700), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-600), var(--foreground))" }}>
            Get Started
          </Button>
          <Button size="lg" variant="outline" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32}>
            Documentation
          </Button>
        </MotionBox>
      </AnimatedStaggerContainer>
    </AnimatedSection>
  );
};

export default HeroSection;
