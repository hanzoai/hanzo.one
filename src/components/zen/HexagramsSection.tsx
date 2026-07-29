import { Box, H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import HexagramsGrid from "./HexagramsGrid";

const HexagramsSection = () => {
  return (
    <Box render="section" paddingVertical={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }} id="principles">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={32}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to bottom, var(--foreground), rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
            Zen of Hanzo
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Engineering principles for building next-generation AI systems
          </Paragraph>
        </MotionBox>
        
        <HexagramsGrid />
      </Box>
    </Box>
  );
};

export default HexagramsSection;
