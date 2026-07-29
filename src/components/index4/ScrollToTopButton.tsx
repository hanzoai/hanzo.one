import { MotionBox } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface ScrollToTopButtonProps {
  scrolled: boolean;
}

const ScrollToTopButton = ({ scrolled }: ScrollToTopButtonProps) => {
  console.log("ScrollToTopButton rendering, scrolled:", scrolled);
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: scrolled ? 1 : 0 }}
      position="fixed" bottom={32} right={32} backgroundColor="var(--surface-overlay)" backdropFilter="blur(12px)" WebkitBackdropFilter="blur(12px)" padding={12} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--border-strong)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" zIndex={50} hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }} pointerEvents={!scrolled ? "none" : undefined}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={20} color="var(--white)" />
    </MotionBox>
  );
};

export default ScrollToTopButton;
