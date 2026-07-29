import { Box, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import GlobeThreeJs from "./GlobeThreeJs";

const GlobeContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (!containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <MotionBox
      ref={containerRef}
      position="relative" width="100%" height="500px" backgroundColor="var(--black)" borderRadius="var(--radius-lg)" overflow="hidden" marginTop={32} marginBottom={48} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.5} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"></Box>
      
      {dimensions.width > 0 && dimensions.height > 0 && (
        <GlobeThreeJs width={dimensions.width} height={dimensions.height} />
      )}
      
      <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center" textAlign="center" padding={16} pointerEvents="none">
        <Box marginTop={32} backgroundColor="rgb(0 0 0 / 0.3)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Global Network</H3>
          <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" maxWidth="28rem" marginHorizontal="auto">
            Deploy to 35+ regions around the world with 99.99% uptime SLA and automatic failover.
          </Paragraph>
        </Box>
      </XStack>
    </MotionBox>
  );
};

export default GlobeContainer;
