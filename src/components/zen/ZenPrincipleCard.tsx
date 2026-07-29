import { Box, H3, MotionBox, Paragraph, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

export interface ZenPrinciple {
  number: string;
  title: string;
  japaneseSymbol: string;
  description: string;
  emoji: string;
  discipline?: string;
}

interface ZenPrincipleCardProps {
  principle: ZenPrinciple;
  index: number;
}

const ZenPrincipleCard: React.FC<ZenPrincipleCardProps> = ({ principle, index }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      group backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={24} position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
    >
      {principle.discipline && (
        <Box position="absolute" top={8} right={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="rgb(255 255 255 / 0.3)" opacity={0.5} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ opacity: 1 }}>
          {principle.discipline}
        </Box>
      )}
      <XStack display="flex" alignItems="center" marginBottom={12}>
        <XStack display="flex" alignItems="center" justifyContent="center" width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" marginRight={12}>
          {principle.emoji || principle.number}
        </XStack>
        <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--white)" fontWeight="700">{principle.title}</H3>
      </XStack>
      <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" fontFamily="var(--font-mono)" marginBottom={8}>{principle.japaneseSymbol}</Box>
      <Paragraph color="var(--neutral-300)">{principle.description}</Paragraph>
      <Box position="absolute" bottom={8} right={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="rgb(255 255 255 / 0.3)">
        #{principle.number}/64
      </Box>
    </MotionBox>
  );
};

export default ZenPrincipleCard;