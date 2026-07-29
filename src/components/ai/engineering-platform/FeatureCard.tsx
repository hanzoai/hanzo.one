import { Box, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface FeaturePoint {
  text: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  featurePoints: FeaturePoint[];
  delay: number;
  iconBgClass: string;
  iconTextClass: string;
  bulletColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  featurePoints,
  delay,
  iconBgClass,
  iconTextClass,
  bulletColor
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} height="100%" display="flex" flexDirection="column"
    >
      <XStack width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
        <Box >{icon}</Box>
      </XStack>
      
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>{title}</H3>
      <Paragraph color="var(--neutral-400)" marginBottom={16} flexGrow={1}>{description}</Paragraph>
      
      <Box render="ul" rowGap={8}>
        {featurePoints.map((point, index) => (
          <XStack key={index} render="li" display="flex" alignItems="flex-start">
            <Text marginRight={8} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">•</Text>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">{point.text}</Text>
          </XStack>
        ))}
      </Box>
    </MotionBox>
  );
};

export default FeatureCard;
