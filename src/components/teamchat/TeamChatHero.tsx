import { Box, ChromeText, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const TeamChatHero: React.FC = () => {
  return (
    <Box paddingVertical={40} paddingHorizontal={16} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          textAlign="center"
        >
          <ChromeText as="h1" fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={8}>
            Hanzo Chat
          </ChromeText>
          <Paragraph color="var(--neutral-300)" maxWidth="42rem" marginHorizontal="auto">
            Connect with state-of-the-art AI models through our intuitive chat interface.
            Get answers, generate content, and solve problems with natural language.
          </Paragraph>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default TeamChatHero;
