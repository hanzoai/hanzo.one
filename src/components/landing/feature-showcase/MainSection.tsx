import { Box, H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface MainSectionProps {
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Box textAlign="center" marginBottom={64}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
              Open Source AI Engineering
            </Box>
            <H2 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
              Build the Future with AI
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
              A complete platform for developers to build, deploy, and scale AI
              applications with unprecedented speed and complete control.
            </Paragraph>
          </MotionBox>
        </Box>

        {children}
      </Box>
    </Box>
  );
};

export default MainSection;
