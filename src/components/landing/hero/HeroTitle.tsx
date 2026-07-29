import { Box, H1, MotionBox, Text } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface HeroTitleProps {
  mousePosition: { x: number; y: number };
  containerRef: React.RefObject<HTMLDivElement>;
  onAnimationComplete: () => void;
  animationComplete: boolean;
  onTitleAnimationComplete: () => void;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  mousePosition,
  containerRef,
  onAnimationComplete,
  animationComplete,
  onTitleAnimationComplete,
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onAnimationComplete={() => {
        onAnimationComplete();
        onTitleAnimationComplete();
      }}
    >
      <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
        Open Source AI Engineering Platform
      </Box>
      
      <H1 fontSize="var(--text-5xl)" lineHeight="var(--leading-tight)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-7xl)", lineHeight: "var(--leading-7xl)" }}>
        <Text backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground), var(--neutral-300))">
          Build As Fast
        </Text>
        <br />
        <Text 
          backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground), var(--foreground))"
          style={{
            backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
          }}
        >
          As You Think
        </Text>
      </H1>
    </MotionBox>
  );
};

export default HeroTitle;
