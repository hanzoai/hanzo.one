import { Box, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, badgeColor, title, description }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      textAlign="center" marginBottom={48}
    >
      <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
        {badge}
      </Box>
      <H3 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24}>
        {title}
      </H3>
      <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
        {description}
      </Paragraph>
    </MotionBox>
  );
};

export default SectionHeader;
