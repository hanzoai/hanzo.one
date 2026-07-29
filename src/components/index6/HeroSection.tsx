import { Box, Button, MotionBox, MotionText, YStack } from '@/gui'

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroTitle from "@/components/hero/HeroTitle";

interface HeroSectionProps {
  onAnimationComplete: () => void;
  animationComplete: boolean;
  onTitleAnimationComplete: () => void;
  titleAnimationComplete: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onAnimationComplete,
  animationComplete,
  onTitleAnimationComplete,
  titleAnimationComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <YStack ref={containerRef} render="section" paddingTop={128} paddingBottom={80} paddingHorizontal={16} minHeight="90vh" display="flex" flexDirection="column" justifyContent="center" position="relative" $md={{ paddingHorizontal: 32 }}>
      <MotionBox
        style={{ scale, opacity }}
        maxWidth="var(--container-wide)" marginHorizontal="auto" textAlign="center"
      >
        <HeroTitle 
          mousePosition={mousePosition}
          containerRef={containerRef}
          onAnimationComplete={onAnimationComplete}
          animationComplete={animationComplete}
          onTitleAnimationComplete={onTitleAnimationComplete}
        />

        <MotionText 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: titleAnimationComplete ? 1 : 0, y: titleAnimationComplete ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          marginTop={24} marginBottom={32} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}
        >
          Your AI future belongs in your hands. With Hanzo, pioneer a new era of intelligence with customizable, private, transparent, and trusted AI solutions.
        </MotionText>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: titleAnimationComplete ? 1 : 0, y: titleAnimationComplete ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          flexDirection="row" marginTop={32} display="flex" flexWrap="wrap" justifyContent="center" gap={16}
        >
          <Button 
            size="lg" 
            backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            onClick={handleGetStarted}
          >
            Get Started for Free <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            borderColor="var(--border-strong)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ borderColor: "var(--border-strong)", color: "var(--white)" }}
            onClick={() => navigate('/platform')}
          >
            Explore Platform
          </Button>
        </MotionBox>
      </MotionBox>
    </YStack>
  );
};

export default HeroSection;
