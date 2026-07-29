import { Box, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeaturePoint {
  text: string;
}

interface AIFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  featurePoints: FeaturePoint[];
  delay: number;
  iconBgClass: string;
  iconTextClass: string;
  bulletColor: string;
}

const AIFeatureCard = ({
  icon,
  title,
  description,
  featurePoints,
  delay,
  iconBgClass,
  iconTextClass,
  bulletColor,
}: AIFeatureCardProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: title.includes("Vector") || title.includes("AI-Enhanced") ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}
    >
      <XStack display="flex" alignItems="center" marginBottom={24}>
        <Box flexShrink={0}>
          <XStack display="flex" alignItems="center" justifyContent="center" height={48} width={48} borderRadius="var(--radius-lg)">
            {icon}
          </XStack>
        </Box>
        <Box marginLeft={16}>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">{title}</H3>
        </Box>
      </XStack>
      <Paragraph color="var(--neutral-300)" marginBottom={24}>
        {description}
      </Paragraph>
      <Box render="ul" rowGap={12}>
        {featurePoints.map((point, index) => (
          <XStack key={index} render="li" display="flex" alignItems="flex-start">
            <Text marginRight={8}>•</Text>
            <Text color="var(--neutral-300)">{point.text}</Text>
          </XStack>
        ))}
      </Box>
    </MotionBox>
  );
};

export default AIFeatureCard;
