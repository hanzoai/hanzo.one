import { Box, ChromeText, MotionBox, Paragraph, Text } from '@/gui'

import React, { useState } from "react";
import { motion } from "framer-motion";
import DXPlatformGrid from "./dx-platform/DXPlatformGrid";

const DXPlatform = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      {/* Decorative elements */}
      <Box position="absolute" top="25%" right={0} width="33.333333%" height="33.333333%" backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom="25%" left={0} width="33.333333%" height="33.333333%" backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <Box textAlign="center" marginBottom={64}>
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            marginBottom={16}
          >
            <Text display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
              Developer Experience
            </Text>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ChromeText 
              as="h2" 
              fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}
            >
              The DX Platform
            </ChromeText>
            
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
              Unify your development workflow with tools designed to increase productivity, enable collaboration, and accelerate innovation.
            </Paragraph>
          </MotionBox>
        </Box>
        
        <DXPlatformGrid isHovered={isHovered} setIsHovered={setIsHovered} />
        
        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          marginTop={80} textAlign="center"
        >
          <Paragraph color="var(--neutral-400)" marginBottom={24} maxWidth="var(--container-prose)" marginHorizontal="auto">
            Join thousands of developers who build faster and ship more reliable software with the Hanzo DX Platform.
          </Paragraph>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default DXPlatform;
