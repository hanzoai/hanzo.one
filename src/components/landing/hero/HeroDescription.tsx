import { MotionText } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface HeroDescriptionProps {
  titleAnimationComplete: boolean;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ titleAnimationComplete }) => {
  return (
    <MotionText
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: titleAnimationComplete ? 1 : 0, y: titleAnimationComplete ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginTop={24}
    >
      A complete platform for developers to build, deploy, and scale AI applications
      with enterprise-grade reliability and open-source transparency.
    </MotionText>
  );
};

export default HeroDescription;
