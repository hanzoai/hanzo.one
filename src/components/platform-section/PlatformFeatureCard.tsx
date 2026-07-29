import { H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PlatformFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const PlatformFeatureCard: React.FC<PlatformFeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  index,
}) => {
  return (
    <MotionBox
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}
    >
      <XStack height={48} width={48} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
        <Icon height={24} width={24} color="var(--foreground)" />
      </XStack>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8} color="var(--white)">{title}</H3>
      <Paragraph color="var(--neutral-400)">{description}</Paragraph>
    </MotionBox>
  );
};

export default PlatformFeatureCard;
