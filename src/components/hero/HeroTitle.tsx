import { Box, MotionBox, MotionText } from '@/gui'

import React, { useRef } from "react";
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
  onTitleAnimationComplete
}) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  const titleVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.15
      }
    }
  };
  
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        marginBottom={16} textAlign="center"
      >
        <Box display="inline-block" paddingHorizontal={16} paddingVertical={6} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={16}>
          AI Engineering Platform
        </Box>
      </MotionBox>
      
      <MotionText 
        ref={headingRef}
        fontSize="var(--text-5xl)" lineHeight="1.1" fontFamily="var(--font-sans)" letterSpacing="var(--tracking-tight)" fontWeight="500" color="var(--white)" paddingBottom={16} $sm={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }} $md={{ fontSize: "var(--text-7xl)", lineHeight: "var(--leading-7xl)" }} $lg={{ fontSize: "var(--text-8xl)", lineHeight: "var(--leading-8xl)" }}
        initial="hidden" 
        animate="visible" 
        variants={titleVariants} 
        onAnimationComplete={onAnimationComplete}
        style={{
          backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
        }}
      >
        <MotionText display="inline-flex" alignItems="center" backgroundImage="linear-gradient(90deg, var(--neutral-400), var(--foreground), var(--neutral-400))" backgroundClip="text" color="transparent" fontWeight="700" marginBottom={16} overflow="visible">
          Accelerating AI
        </MotionText>
        
        <MotionText 
          display="block" color="transparent" marginTop={24} paddingBottom={16} overflow="visible" backgroundImage="linear-gradient(90deg, var(--neutral-400), var(--foreground), var(--neutral-400))" backgroundClip="text" fontWeight="700" 
          initial="hidden" 
          animate={animationComplete ? "visible" : "hidden"} 
          variants={titleVariants} 
          onAnimationComplete={onTitleAnimationComplete}
        >
          For a Better Future
        </MotionText>
      </MotionText>
    </>
  );
};

export default HeroTitle;
