import { Box, MotionBox } from '@/gui'

import React, { useState } from "react";
import { motion } from "framer-motion";
import IChingHexagram from "./svg/IChingHexagram";

export interface HexagramDetails {
  id: string;
  name: string;
  chineseName: string;
  pinyin: string;
  lines: { type: 'solid' | 'broken' }[];
  principle: string;
  description?: string;
}

interface InteractiveHexagramProps {
  hexagram: HexagramDetails;
  index: number;
  onClick: (hexagram: HexagramDetails) => void;
  isSelected?: boolean;
}

const InteractiveHexagram: React.FC<InteractiveHexagramProps> = ({
  hexagram,
  index,
  onClick,
  isSelected = false
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      
      padding={12} borderWidth={1} borderRadius="var(--radius-md)" cursor="pointer" transition="all 200ms cubic-bezier(.4,0,.2,1)" display="flex" flexDirection="column" alignItems="center" justifyContent="center" hoverStyle={{ backgroundColor: "var(--surface-card)" }} borderColor={isSelected ? "rgb(255 255 255 / 0.5)" : "rgb(255 255 255 / 0.5)"} backgroundColor={isSelected ? "rgb(255 255 255 / 0.2)" : "rgb(255 255 255 / 0.3)"}
      onClick={() => onClick(hexagram)}
      whileHover={{ y: -2 }}
    >
      <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>{hexagram.id}</Box>
      <IChingHexagram 
        lines={hexagram.lines} 
        size={32} 
        marginBottom={8} color={isSelected ? "var(--foreground)" : "rgb(255 255 255 / 0.8)"} 
      />
      <Box textAlign="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">
        {hexagram.chineseName}
      </Box>
    </MotionBox>
  );
};

export default InteractiveHexagram;
