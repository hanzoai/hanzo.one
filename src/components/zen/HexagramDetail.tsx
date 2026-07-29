import { Box, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { HexagramDetails } from "./InteractiveHexagram";
import IChingHexagram from "./svg/IChingHexagram";

interface HexagramDetailProps {
  hexagram: HexagramDetails;
}

const HexagramDetail: React.FC<HexagramDetailProps> = ({ hexagram }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={24} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)"
    >
      <XStack display="flex" alignItems="center" marginBottom={16}>
        <Box marginRight={16}>
          <IChingHexagram lines={hexagram.lines} size={64} color="var(--white)" />
        </Box>
        <div>
          <YStack display="flex" flexDirection="column" gap={8} marginBottom={8} $sm={{ flexDirection: "row", alignItems: "center" }}>
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)">{hexagram.name}</H3>
            <Text fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)">{hexagram.chineseName}</Text>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">{hexagram.pinyin}</Text>
          </YStack>
          <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Hexagram {hexagram.id}</Box>
        </div>
      </XStack>
      
      <Box marginTop={16} marginBottom={24} height={1} backgroundImage="linear-gradient(to right, transparent, var(--neutral-700), transparent)" />
      
      <Paragraph color="var(--neutral-300)" marginBottom={16}>{hexagram.description || hexagram.principle}</Paragraph>
      
      <Box marginTop={16} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
        Click on any hexagram in the grid to view its details
      </Box>
    </MotionBox>
  );
};

export default HexagramDetail;
