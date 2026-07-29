import { Box, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AIFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  index: number;
}

const AIFeatureCard = ({ icon, title, description, delay, index }: AIFeatureCardProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MotionBox
      key={index}
      variants={itemVariants}
      initial="hidden"
      animate="hidden"
      
      group borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "var(--border-strong)" }}
    >
      <Box marginBottom={20} transition="transform 300ms cubic-bezier(.4,0,.2,1)" $group-hover={{ scale: 1.1 }}>
        {icon}
      </Box>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={12}>{title}</H3>
      <Paragraph color="var(--neutral-400)">{description}</Paragraph>
    </MotionBox>
  );
};

export default AIFeatureCard;
