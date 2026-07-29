import { Box, MotionBox } from '@/gui'

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface BackgroundEffectsProps {
  scanPoints: Array<{ x: number; y: number; active: boolean }>;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ scanPoints }) => {
  return (
    <>
      {/* Background blur elements - subtle blue/cyan */}
      <Box position="absolute" top={160} right={80} width={256} height={256} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-128} left={-128} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      {/* Grid pattern - very subtle */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.1} style={{
        backgroundImage: "radial-gradient(rgba(100, 150, 200, 0.1) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}></Box>
      
      {/* Background grid points - reduced quantity */}
      {scanPoints.filter((_, idx) => idx % 3 === 0).map((point, idx) => (
        <MotionBox
          key={`point-${idx}`}
          position="absolute" height={6} width={6} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)"
          style={{ 
            left: `${point.x}%`, 
            top: `${point.y}%` 
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: point.active ? [0, 0.4, 0.2] : 0,
            scale: point.active ? [0, 1.1, 1] : 0
          }}
          transition={{ 
            duration: 2.5,
            repeat: point.active ? Infinity : 0,
            repeatType: "loop",
            repeatDelay: 5
          }}
        />
      ))}
      
      {/* Network connection lines have been completely removed */}
    </>
  );
};

export default BackgroundEffects;
