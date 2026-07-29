import { Box, ChromeText, MotionBox, MotionText } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const FeatureShowcaseHeader: React.FC = () => {
  return (
    <Box textAlign="center" marginBottom={64}>
      <MotionBox 
        display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Open Source AI Engineering
      </MotionBox>
      
      <MotionText 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        maxWidth="56rem" marginHorizontal="auto"
      >
        <ChromeText as="span" fontSize="var(--text-4xl)" lineHeight="var(--leading-tight)" fontWeight="700" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
          Build the Future with AI
        </ChromeText>
      </MotionText>
      
      <MotionText 
        fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" maxWidth="42rem" marginHorizontal="auto" marginTop={24} $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        A complete platform for developers to build, deploy, and scale AI applications
        with unprecedented speed and complete control
      </MotionText>
    </Box>
  );
};

export default FeatureShowcaseHeader;
