import { MotionText } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface HeroDescriptionProps {
  titleAnimationComplete: boolean;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ titleAnimationComplete }) => {
  return (
    <MotionText 
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(8px)"
      }} 
      animate={{
        opacity: titleAnimationComplete ? 1 : 0,
        y: titleAnimationComplete ? 0 : 20,
        filter: titleAnimationComplete ? "blur(0px)" : "blur(8px)"
      }} 
      transition={{
        duration: 0.4,
        delay: 0.25
      }} 
      marginTop={32} fontSize="var(--text-lg)" lineHeight="var(--leading-relaxed)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" letterSpacing="var(--tracking-wide)" $sm={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}
    >
      Your AI future belongs in your hands. With Hanzo, pioneer a new era of intelligence with customizable, 
      private, transparent, and trusted AI solutions that empower all humans to build what was once impossible.
    </MotionText>
  );
};

export default HeroDescription;
