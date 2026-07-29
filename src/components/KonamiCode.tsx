import { MotionBox } from '@/gui'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Konami-inspired code: up up down down down start select enter space
// Using arrow keys + s, e, Enter, Space
const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowDown",
  "KeyS", // start
  "KeyE", // select (using 'e')
  "Enter",
  "Space",
];

// Secret menu site URL
const SECRET_MENU_URL = "https://sfsecretmenu.com";

const KonamiCode = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  // Handle key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.code;

      setInputSequence((prev) => {
        const newSequence = [...prev, key].slice(-KONAMI_SEQUENCE.length);

        // Check if sequence matches
        if (
          newSequence.length === KONAMI_SEQUENCE.length &&
          newSequence.every((k, i) => k === KONAMI_SEQUENCE[i])
        ) {
          setIsActive(true);
          return [];
        }

        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          position="fixed" top={0} right={0} bottom={0} left={0} zIndex={9999} backgroundColor="var(--pure-black)"
        >
          {/* Close button */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            
            onClick={() => setIsActive(false)}
            position="absolute" top={16} right={16} zIndex={10} padding={12} borderRadius="var(--radius-full)" backgroundColor="rgb(0 0 0 / 0.8)" borderWidth={1} borderColor="var(--neutral-700)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            aria-label="Close secret menu"
          >
            <X size={24} />
          </MotionBox>

          {/* Secret hint badge */}
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            position="absolute" top={16} left={16} zIndex={10} paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius-full)" backgroundColor="rgb(0 0 0 / 0.8)" borderWidth={1} borderColor="var(--neutral-700)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" fontFamily="var(--font-mono)"
          >
            🥷 ↑↑↓↓↓ S E ⏎ ␣
          </MotionBox>

          {/* Embedded site */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            src={SECRET_MENU_URL}
            width="100%" height="100%" borderWidth={0}
            title="SF Secret Menu"
            allow="geolocation; payment"
          />
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default KonamiCode;
