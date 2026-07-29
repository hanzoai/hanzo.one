import { MotionBox } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface HeroFeaturesProps {
  titleAnimationComplete: boolean;
}

const HeroFeatures: React.FC<HeroFeaturesProps> = ({ titleAnimationComplete }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: titleAnimationComplete ? 1 : 0,
        y: titleAnimationComplete ? 0 : 20 
      }}
      transition={{ duration: 0.5, delay: 0.5 }}
      maxWidth="56rem" marginHorizontal="auto"
    >
      {/* Empty container that maintains the layout spacing */}
    </MotionBox>
  );
};

export default HeroFeatures;
