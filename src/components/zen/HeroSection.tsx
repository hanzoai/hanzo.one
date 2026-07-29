import { Anchor, Box, H1, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import TaijiSymbol from "./svg/TaijiSymbol";

const HeroSection = () => {
  return (
    <YStack render="section" position="relative" paddingVertical={96} paddingHorizontal={16} minHeight="80vh" display="flex" flexDirection="column" justifyContent="center" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          marginBottom={32}
        >
          <XStack display="flex" justifyContent="center" marginBottom={32}>
            <TaijiSymbol size={80} color="var(--white)" />
          </XStack>

          <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" letterSpacing="var(--tracking-tight)" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to bottom, var(--foreground), rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            The Zen of Hanzo
          </H1>
          
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={32}>
            Our guiding principles that shape everything we build. Distilled wisdom from ancient knowledge, 
            reimagined for modern AI engineering.
          </Paragraph>
          
          <MotionBox 
            width={80} height={1} marginHorizontal="auto" backgroundImage="linear-gradient(to right, transparent, var(--neutral-600), transparent)"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          flexDirection="row" display="flex" justifyContent="center"
        >
          <Anchor 
            href="#principles" 
            group display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}
          >
            <span>Explore Principles</span>
            <Box display="inline-block" 
              render="svg" width={16} height={16} transition="transform var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ y: 4 }} 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 4L12 20M12 20L18 14M12 20L6 14" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </Box>
          </Anchor>
        </MotionBox>
      </Box>
    </YStack>
  );
};

export default HeroSection;
