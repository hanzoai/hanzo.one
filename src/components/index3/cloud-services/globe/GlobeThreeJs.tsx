import { Box, MotionBox, Text, XStack } from '@/gui'

import React, { useRef, useEffect } from 'react';
import GlobeRenderer from './components/GlobeRenderer';

interface GlobeThreeJsProps {
  width: number;
  height: number;
}

const GlobeThreeJs: React.FC<GlobeThreeJsProps> = ({ width, height }) => {
  return (
    <Box position="relative" width="100%" height="100%" backgroundImage="linear-gradient(to bottom right, var(--pure-black), var(--neutral-900))">
      <GlobeRenderer width={width} height={height} />
      
      {/* Status indicator */}
      <XStack position="absolute" bottom={12} left={12} display="flex" alignItems="center" columnGap={8}>
        <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} height={8} width={8} backgroundColor="var(--neutral-500)" borderRadius="var(--radius-full)"></MotionBox>
        <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Live network traffic</Text>
      </XStack>
    </Box>
  );
};

export default GlobeThreeJs;
