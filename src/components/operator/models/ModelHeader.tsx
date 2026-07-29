import { Box, H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const ModelHeader = () => {
  return (
    <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
          Supported Models
        </H2>
        <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
          Hanzo Operative works with multiple multimodal AI models, 
          each with different capabilities and strengths
        </Paragraph>
      </MotionBox>
    </Box>
  );
};

export default ModelHeader;
