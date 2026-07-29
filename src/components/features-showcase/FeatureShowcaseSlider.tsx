import { Box, MotionBox, XStack } from '@/gui'

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FeatureSlide } from "./";
import ExploreCard from "./ExploreCard";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";
import { Feature } from "./data/features";

interface FeatureShowcaseSliderProps {
  features: Feature[];
}

const FeatureShowcaseSlider: React.FC<FeatureShowcaseSliderProps> = ({ features }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { 
    handleMouseDown, 
    handleMouseUp, 
    handleMouseMove 
  } = useHorizontalScroll({ containerRef });

  // Add arrow navigation for better accessibility
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  // Make sure touch devices can also scroll properly
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      const startX = touch.clientX;
      let startScrollLeft = container.scrollLeft;
      
      const handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        const x = touch.clientX;
        const walk = (startX - x) * 2;
        container.scrollLeft = startScrollLeft + walk;
        e.preventDefault();
      };
      
      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    };

    container.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <Box display="flex" transition="transform 300ms ease" position="relative">
      {/* Add navigation buttons */}
      <Box minHeight={44} 
        onClick={scrollLeft}
        render="button" position="absolute" left={0} top="50%" y="-50%" zIndex={10} backgroundColor="var(--surface-overlay)" color="var(--white)" borderRadius="var(--radius-full)" padding={8} boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" marginLeft={-16} display="none" hoverStyle={{ backgroundColor: "var(--neutral-900)" }} $md={{ display: "flex" }}
        aria-label="Scroll left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Box>
      
      <XStack 
        ref={containerRef}
        display="flex" gap={24} paddingBottom={24} overflowX="auto" scrollbarWidth="none" cursor="grab"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {features.map((feature, index) => {
          // Check if this is the last feature (Explore Platform card)
          const isLastFeature = index === features.length - 1;
          
          return (
            <MotionBox 
              key={index} 
              flexShrink={0} width="350px"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05 }}
            >
              {isLastFeature ? (
                <ExploreCard
                  title={feature.title}
                  description={feature.description}
                  link={feature.link}
                />
              ) : (
                <FeatureSlide
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                  link={feature.link}
                />
              )}
            </MotionBox>
          );
        })}
      </XStack>
      
      <Box minHeight={44} 
        onClick={scrollRight}
        render="button" position="absolute" right={0} top="50%" y="-50%" zIndex={10} backgroundColor="var(--surface-overlay)" color="var(--white)" borderRadius="var(--radius-full)" padding={8} boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" marginRight={-16} display="none" hoverStyle={{ backgroundColor: "var(--neutral-900)" }} $md={{ display: "flex" }}
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </Box>
      
      <XStack display="flex" justifyContent="center" marginTop={24} gap={8}>
        <Box backgroundColor="var(--neutral-700)" height={4} width={80} borderRadius="var(--radius-full)" overflow="hidden">
          <Box backgroundColor="var(--neutral-500)" height="100%" width="33.333333%" borderRadius="var(--radius-full)"></Box>
        </Box>
      </XStack>
    </Box>
  );
};

export default FeatureShowcaseSlider;
