import { Box, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { OperatorModel } from "./operatorModelData";

interface ModelCardProps {
  model: OperatorModel;
  index: number;
}

const ModelCard = ({ model, index }: ModelCardProps) => {
  return (
    <MotionBox
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" position="relative" hoverStyle={{ backgroundColor: "var(--surface-card)" }} borderColor={model.recommended ? "rgb(255 255 255 / 0.5)" : "var(--neutral-800)"}
    >
      {model.recommended && (
        <Text position="absolute" top={0} right={24} y="-50%" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--neutral-600)" color="var(--white)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="600" borderRadius="var(--radius-full)">
          Recommended
        </Text>
      )}
      
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={4}>{model.name}</H3>
      <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={16}>by {model.provider}</Paragraph>
      
      <Box render="ul" rowGap={8} marginBottom={24}>
        {model.features.map((feature, i) => (
          <XStack key={i} render="li" display="flex" alignItems="flex-start">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><Check size={20} color="var(--foreground)" /></Box>
            <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{feature}</Text>
          </XStack>
        ))}
      </Box>
      
      <Box paddingTop={8} marginTop="auto">
        <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" fontFamily="var(--font-mono)">{model.command}</Paragraph>
      </Box>
    </MotionBox>
  );
};

export default ModelCard;
