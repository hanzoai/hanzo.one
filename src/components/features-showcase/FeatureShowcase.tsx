import { Box, Button, MotionBox, XStack } from '@/gui'

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import FeatureShowcaseHeader from "./FeatureShowcaseHeader";
import FeatureShowcaseSlider from "./FeatureShowcaseSlider";
import { features, aiCloudFeatures_export, dxPlatformFeatures_export } from "./data/features";

const FeatureShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [maxScrollDistance, setMaxScrollDistance] = useState(0);
  const [activeTab, setActiveTab] = useState<'all' | 'ai-cloud' | 'dx-platform'>('all');
  const [activeFeatures, setActiveFeatures] = useState(features);

  useEffect(() => {
    // Update displayed features based on selected tab
    switch (activeTab) {
      case 'ai-cloud':
        setActiveFeatures([...aiCloudFeatures_export, features[features.length - 1]]);
        break;
      case 'dx-platform':
        setActiveFeatures([...dxPlatformFeatures_export, features[features.length - 1]]);
        break;
      default:
        setActiveFeatures(features);
    }
  }, [activeTab]);

  useEffect(() => {
    const calculateMaxScroll = () => {
      // Calculate the total width of all cards (including gap) minus the visible area
      // Adding extra buffer space to ensure all cards are visible
      const totalWidth = (activeFeatures.length * 350) + 100; // Each card is 350px wide + extra buffer
      const visibleWidth = window.innerWidth - 100; // Subtract some padding
      const newMaxScroll = Math.max(0, totalWidth - visibleWidth);
      setMaxScrollDistance(newMaxScroll);
    };

    calculateMaxScroll();
    window.addEventListener('resize', calculateMaxScroll);
    
    return () => {
      window.removeEventListener('resize', calculateMaxScroll);
    };
  }, [activeFeatures]);

  // Scroll animation values
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  // Modified horizontal scroll to show full content
  // Use a lower end value to prevent scrolling too far
  const x = useTransform(
    scrollYProgress, 
    [0.2, 0.8], 
    [0, -maxScrollDistance * 0.85] // Only scroll to 85% of max to ensure more content is visible
  ); 

  return (
    <Box render="section" paddingVertical={96} backgroundColor="var(--black)" position="relative" overflow="hidden" id="features-showcase" ref={scrollRef}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} zIndex={-10}>
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), rgb(0 0 0 / 0.8))"></Box>
      </Box>
      
      <MotionBox 
        paddingHorizontal={16} marginHorizontal="auto"
        style={{ opacity, y }}
      >
        <FeatureShowcaseHeader />
        
        <XStack display="flex" justifyContent="center" marginBottom={40}>
          <XStack display="inline-flex" borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" padding={6} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)">
            <Button
              variant={activeTab === 'all' ? 'default' : 'ghost'}
              borderRadius="var(--radius-full)" paddingHorizontal={24} backgroundColor={activeTab === 'all' ? "var(--neutral-600)" : undefined} color={activeTab === 'all' ? undefined : "var(--neutral-300)"} hoverStyle={activeTab === 'all' ? { backgroundColor: "var(--neutral-700)" } : { color: "var(--white)", backgroundColor: "var(--surface-card)" }}
              onClick={() => setActiveTab('all')}
            >
              All
            </Button>
            <Button
              variant={activeTab === 'ai-cloud' ? 'default' : 'ghost'}
              borderRadius="var(--radius-full)" paddingHorizontal={24} backgroundColor={activeTab === 'ai-cloud' ? "var(--neutral-600)" : undefined} color={activeTab === 'ai-cloud' ? undefined : "var(--neutral-300)"} hoverStyle={activeTab === 'ai-cloud' ? { backgroundColor: "var(--neutral-700)" } : { color: "var(--white)", backgroundColor: "var(--surface-card)" }}
              onClick={() => setActiveTab('ai-cloud')}
            >
              AI Cloud
            </Button>
            <Button
              variant={activeTab === 'dx-platform' ? 'default' : 'ghost'}
              borderRadius="var(--radius-full)" paddingHorizontal={24} backgroundColor={activeTab === 'dx-platform' ? "var(--neutral-600)" : undefined} color={activeTab === 'dx-platform' ? undefined : "var(--neutral-300)"} hoverStyle={activeTab === 'dx-platform' ? { backgroundColor: "var(--neutral-700)" } : { color: "var(--white)", backgroundColor: "var(--surface-card)" }}
              onClick={() => setActiveTab('dx-platform')}
            >
              DX Platform
            </Button>
          </XStack>
        </XStack>
        
        <AnimatePresence mode="wait">
          <MotionBox 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ x }}
            overflow="visible" // Ensure content doesn't get clipped
          >
            <FeatureShowcaseSlider features={activeFeatures} />
          </MotionBox>
        </AnimatePresence>
      </MotionBox>
    </Box>
  );
};

export default FeatureShowcase;
