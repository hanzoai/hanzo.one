import { H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const AIEngineeringHeader = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      textAlign="center" marginBottom={64}
    >
      <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16}>Built for AI Engineers</H2>
      <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
        Powerful features specifically designed for AI-powered applications
      </Paragraph>
    </MotionBox>
  );
};

export default AIEngineeringHeader;
