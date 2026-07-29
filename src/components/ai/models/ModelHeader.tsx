import { Box, ChromeText, MotionBox, Paragraph } from '@/gui'

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
        <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
          Unified Model Access
        </ChromeText>
        <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
          Access thousands of AI models through a single, unified API with consistent interfaces
          and predictable pricing
        </Paragraph>
      </MotionBox>
    </Box>
  );
};

export default ModelHeader;
