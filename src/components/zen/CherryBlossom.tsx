import { Box, MotionBox } from '@/gui'

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface CherryBlossomProps {
  count?: number;
  
}

const CherryBlossom: React.FC<CherryBlossomProps> = ({ 
  count = 20,
  ...styleProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Generate random petals
  const petals = Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 10, // 10-20px
    x: Math.random() * 100, // 0-100%
    delay: Math.random() * 10, // 0-10s delay
    duration: Math.random() * 10 + 15, // 15-25s duration
    rotation: Math.random() * 360, // initial rotation
  }));

  return (
    <Box {...styleProps} ref={containerRef} position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" pointerEvents="none">
      {petals.map((petal) => (
        <MotionBox
          key={petal.id}
          position="absolute"
          style={{
            left: `${petal.x}%`,
            top: "-50px",
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
          initial={{ y: "-10%", rotateZ: petal.rotation }}
          animate={{
            y: "130vh",
            rotateZ: petal.rotation + 360,
            x: [
              0,
              Math.sin((petal.id % 5) * Math.PI * 2 / 5) * 100,
              Math.sin((petal.id % 5) * Math.PI * 4 / 5) * 50,
              Math.sin((petal.id % 5) * Math.PI * 6 / 5) * 100,
              0
            ]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Box display="inline-block" 
            viewBox="0 0 100 100" 
            render="svg" width="100%" height="100%"
            style={{ 
              filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))" 
            }}
          >
            <path
              d="M50 0 C60 30 70 50 100 50 C70 60 60 70 50 100 C40 70 30 60 0 50 C30 40 40 30 50 0Z"
              fill="rgba(255, 192, 203, 0.7)"
            />
          </Box>
        </MotionBox>
      ))}
    </Box>
  );
};

export default CherryBlossom;
