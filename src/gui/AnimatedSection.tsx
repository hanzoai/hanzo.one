import { MotionBox } from '@/gui'

import React from "react";
import { motion, MotionProps, HTMLMotionProps } from "framer-motion";
import { sectionAnimation, headingAnimation, staggerContainer } from "./animation-variants";

// Define the allowed HTML elements for the animated section
type AllowedElements = "section" | "div" | "article" | "main" | "aside" | "header" | "footer";

interface AnimatedSectionProps {
  as?: AllowedElements;
  children: React.ReactNode;
  motionProps?: MotionProps;
  animationVariant?: "default" | "fadeIn" | "fadeInBlur" | "popIn";
  delay?: number;
  viewportAmount?: number; // How much of section needs to be in view
  once?: boolean; // Only animate once?
}

const AnimatedSection = ({
  as = "section",
  children,
  motionProps,
  animationVariant = "default",
  delay = 0,
  viewportAmount = 0.2,
  once = true,
  ...props
}: AnimatedSectionProps) => {
  // Instead of using dynamic motion[as], create element based on 'as' prop
  const MotionComponent = motion[as];
  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={sectionAnimation}
      transition={{ delay }}
      position="relative"
      {...motionProps}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

interface AnimatedTextProps {
  children: React.ReactNode;
  
}

export const AnimatedHeading = ({
  children,
  ...styleProps
}: AnimatedTextProps) => (
  <MotionBox {...styleProps}
    variants={headingAnimation}
  >
    {children}
  </MotionBox>
);

interface AnimatedStaggerProps {
  children: React.ReactNode;
  delayFactor?: number;
}

export const AnimatedStaggerContainer = ({
  children,
  delayFactor = 0.05, ...styleProps
}: AnimatedStaggerProps) => (
  <MotionBox {...styleProps}
    variants={staggerContainer(delayFactor)}
  >
    {children}
  </MotionBox>
);

export default AnimatedSection;
