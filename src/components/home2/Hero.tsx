import { Box, Button, H1, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <Box render="section" position="relative" paddingVertical={80} overflow="hidden" $md={{ paddingVertical: 128 }}>
      {/* Background gradient */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))"></Box>
      
      {/* Animated orbs */}
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10}>
        <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <H1 fontSize="var(--text-5xl)" lineHeight="var(--leading-5xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--neutral-300))" $md={{ fontSize: "var(--text-7xl)", lineHeight: "var(--leading-7xl)" }}>
              The AI Engineering Platform
            </H1>
            
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={40} $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>
              Build, deploy, and scale AI applications with unprecedented speed
            </Paragraph>
            
            <YStack display="flex" flexDirection="column" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}>
              <Button 
                size="lg" 
                color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" borderRadius="var(--radius-full)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}
              >
                Get Started Free
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                color="var(--white)" borderColor="var(--neutral-700)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" borderRadius="var(--radius-full)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
              >
                See Demo
              </Button>
            </YStack>
            
            <XStack marginTop={64} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" display="flex" flexWrap="wrap" justifyContent="center" columnGap={32} rowGap={8}>
              <div>3.2B+ Downloads</div>
              <div>47k+ GitHub Stars</div>
              <div>900+ Contributors</div>
              <div>10k+ Active Developers</div>
            </XStack>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
