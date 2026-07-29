import { H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface IndustryCardProps {
  name: string;
  description: string;
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ name, description, index }) => {
  return (
    <MotionBox
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      
      backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
    >
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={12} color="var(--white)">{name}</H3>
      <Paragraph color="var(--neutral-400)">{description}</Paragraph>
    </MotionBox>
  );
};

export default IndustryCard;
