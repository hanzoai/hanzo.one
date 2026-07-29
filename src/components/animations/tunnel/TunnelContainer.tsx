import { MotionBox } from '@/gui'

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TunnelContainerProps {
  children: ReactNode;
}

const TunnelContainer: React.FC<TunnelContainerProps> = ({ children }) => {
  return (
    <MotionBox 
      position="absolute" top={0} right={0} bottom={0} left={0} width="100%" height="100%"
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{ 
        rotateX: [0, 3, 0, -3, 0],
        rotateY: [0, -3, 0, 3, 0]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }}
    >
      {children}
    </MotionBox>
  );
};

export default TunnelContainer;
