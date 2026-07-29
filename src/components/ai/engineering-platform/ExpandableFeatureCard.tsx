import { Box, H3, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FeaturePoint {
  text: string;
}

interface ExpandableFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  featurePoints: FeaturePoint[];
  delay: number;
  iconBgClass: string;
  iconTextClass: string;
  bulletColor: string;
}

const ExpandableFeatureCard: React.FC<ExpandableFeatureCardProps> = ({
  icon,
  title,
  description,
  featurePoints,
  delay,
  iconBgClass,
  iconTextClass,
  bulletColor
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-2xl)" padding={24} height="100%"
    >
      <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={16}>
        <XStack display="flex" alignItems="center">
          <XStack width={48} height={48} borderRadius="var(--radius-xl)" display="flex" alignItems="center" justifyContent="center" marginRight={16}>
            <Box >{icon}</Box>
          </XStack>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700">{title}</H3>
        </XStack>
        <XStack 
          onClick={toggleExpand}
          render="button" width={32} height={32} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isExpanded ? "rgb(255 255 255 / 0.3)" : "rgb(255 255 255 / 0.5)"} hoverStyle={isExpanded ? undefined : { backgroundColor: "var(--surface-card)" }}
        >
          {isExpanded ? (
            <Minus size={16} color="var(--foreground)" />
          ) : (
            <Plus size={16} color="var(--neutral-300)" />
          )}
        </XStack>
      </XStack>
      
      <Paragraph color="var(--neutral-300)" marginBottom={16}>{description}</Paragraph>
      
      <AnimatePresence>
        {isExpanded && (
          <MotionBox
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            overflow="hidden"
          >
            <Box paddingTop={8} borderTopWidth={1} borderColor="var(--neutral-800)">
              <H4 fontWeight="500" color="var(--white)" marginBottom={12} marginTop={12}>Key Features:</H4>
              <Box render="ul" rowGap={8}>
                {featurePoints.map((point, index) => (
                  <XStack key={index} render="li" display="flex" alignItems="flex-start">
                    <Text marginRight={8} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">•</Text>
                    <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">{point.text}</Text>
                  </XStack>
                ))}
              </Box>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </MotionBox>
  );
};

export default ExpandableFeatureCard;
