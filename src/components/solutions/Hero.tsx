import { Box, ChromeText, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const SolutionsHero: React.FC = () => {
  return (
    <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
      <ChromeText as="h1" fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $sm={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
        Enterprise Solutions
      </ChromeText>
      <Paragraph color="var(--neutral-400)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
        Hanzo delivers a unified ecosystem of AI Cloud infrastructure, developer platforms, and expert consulting 
        to transform how enterprises build, deploy, and scale next-generation applications.
      </Paragraph>
    </Box>
  );
};

export default SolutionsHero;
