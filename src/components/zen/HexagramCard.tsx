import { Box, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Hexagram } from "./data/zenHexagrams";

interface HexagramCardProps {
  hexagram: Hexagram;
  index: number;
}

const HexagramCard: React.FC<HexagramCardProps> = ({ hexagram, index }) => {
  const Icon = hexagram.icon;
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      
      backgroundColor="rgb(0 0 0 / 0.3)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-lg)" padding={32} display="flex" flexDirection="column" height="100%" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
    >
      <XStack display="flex" alignItems="center" marginBottom={24}>
        <XStack width={48} height={48} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginRight={16}>
          <Icon height={24} width={24} color="var(--foreground)" />
        </XStack>
        <div>
          <XStack display="flex" alignItems="center" gap={8}>
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)">{hexagram.id}. {hexagram.title}</H3>
            <Text fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--foreground)">{hexagram.chineseTitle}</Text>
          </XStack>
          <Paragraph color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{hexagram.pinyin} • {hexagram.category}</Paragraph>
        </div>
      </XStack>
      
      <Paragraph color="var(--neutral-300)" marginBottom={24}>{hexagram.description}</Paragraph>
      
      <Box rowGap={16} flex={1}>
        {hexagram.principles.map((principle, i) => (
          <XStack key={i} color="var(--neutral-300)" display="flex" alignItems="flex-start">
            <Text color="var(--foreground)" marginRight={8}>•</Text> 
            <span>{principle}</span>
          </XStack>
        ))}
      </Box>
    </MotionBox>
  );
};

export default HexagramCard;
