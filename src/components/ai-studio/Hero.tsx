import { Box, ChromeText, Paragraph } from '@/gui'

import React from "react";

const Hero = () => {
  return (
    <Box paddingVertical={40} paddingHorizontal={16} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <ChromeText as="h1" fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={8}>
          Hanzo AI Studio
        </ChromeText>
        <Paragraph color="var(--neutral-300)" maxWidth="36rem">
          Your workspace for AI model experimentation, prompt engineering, and creating agent-based applications.
        </Paragraph>
      </Box>
    </Box>
  );
};

export default Hero;
