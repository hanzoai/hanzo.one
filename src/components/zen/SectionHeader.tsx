import { Box, H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <MotionBox 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      textAlign="center" marginBottom={48}
    >
      <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} color="var(--white)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>{title}</H2>
      <Box height={4} width={80} backgroundColor="var(--neutral-500)" marginHorizontal="auto" marginBottom={24}></Box>
      {description && (
        <Paragraph color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
          {description}
        </Paragraph>
      )}
    </MotionBox>
  );
};

export default SectionHeader;
