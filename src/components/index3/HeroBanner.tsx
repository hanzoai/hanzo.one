import { Anchor, Box, Button, ChromeText, MotionBox, Paragraph, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroBanner = () => {
  return (
    <YStack render="section" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" paddingHorizontal={16} paddingVertical={128} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} pointerEvents="none" backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))"></Box>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" textAlign="center" position="relative" zIndex={10} marginBottom={64}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          marginBottom={32}
        >
          <ChromeText 
            as="h1" 
            fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
            preHeading="AI-Native Platform for Building the Future"
          >
            Accelerate your vision.<br />Scale without limits.
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginTop={24}>
            Hanzo is the AI-native platform purpose-built to power innovative software companies. 
            From ideation to deployment, Hanzo delivers everything you need to streamline product
            development, accelerate growth, and scale effortlessly.
          </Paragraph>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          display="flex" flexDirection="column" gap={16} justifyContent="center" marginTop={40} $sm={{ flexDirection: "row" }}
        >
          <Button size="lg" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} borderStyle="none" backgroundImage="linear-gradient(to right, var(--neutral-700), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-600), var(--foreground))" }}>
            Get Started
          </Button>
          <Button size="lg" variant="outline" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} color="var(--white)" borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(255 255 255 / 0.05)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
            Learn More
          </Button>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          marginTop={64}
        >
          <Anchor minHeight={44} href="#platform" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" justifyContent="center" hoverStyle={{ color: "var(--white)" }}>
            Scroll to explore
            <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowDown size={20} /></Box>
          </Anchor>
        </MotionBox>
      </Box>
    </YStack>
  );
};

export default HeroBanner;
