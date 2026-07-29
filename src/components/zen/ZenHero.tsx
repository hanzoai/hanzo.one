import { Anchor, Box, Button, H1, MotionBox, Paragraph, Text, YStack } from '@/gui'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import TaijiSymbol from "./svg/TaijiSymbol";

const ZenHero = () => {
  const [currentPrinciple, setCurrentPrinciple] = useState(0);
  const principles = [
    "Before code, there is concept.",
    "Simplicity is the ultimate sophistication.",
    "The way is in training.",
    "Build with purpose, not with haste.",
    "In silence, find clarity.",
    "Each line of code should be necessary.",
    "Perfect practice makes perfect code.",
    "The path to mastery never ends."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrinciple((prev) => (prev + 1) % principles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <YStack render="section" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" paddingHorizontal={16} paddingVertical={96} position="relative">
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        position="absolute" top={0} right={0} bottom={0} left={0} pointerEvents="none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 70%)"
        }}
      />
      
      <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center" zIndex={10} position="relative">
        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          marginBottom={32}
        >
          <TaijiSymbol size={80} marginHorizontal="auto" marginBottom={32} animate={true} />
          
          <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} letterSpacing="var(--tracking-tight)" $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            <Text backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to bottom, var(--foreground), rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
              The 36 Principles &amp; 64 Hexagrams
            </Text>
          </H1>
          
          <MotionBox
            key={currentPrinciple}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            flexDirection="row" height={48} display="flex" alignItems="center" justifyContent="center"
          >
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" fontStyle="italic">"{principles[currentPrinciple]}"</Paragraph>
          </MotionBox>
          
          <Paragraph color="var(--neutral-500)" maxWidth="42rem" marginHorizontal="auto" marginTop={32}>
            Build software with enlightened engineering. Hanzo's platform embodies 
            36 principles and 64 hexagrams from the I Ching that guide the creation of resilient, scalable systems.
          </Paragraph>
        </MotionBox>
        
        <Box marginTop={48} rowGap={24}>
          <YStack display="flex" flexDirection="column" gap={24} justifyContent="center" $sm={{ flexDirection: "row" }}>
            <Button 
              variant="outline" 
              backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" color="var(--white)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            >
              Explore Platform
            </Button>
            <Button 
              backgroundColor="rgb(255 255 255 / 0.1)" color="var(--white)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}
            >
              Learn Principles
            </Button>
          </YStack>
          
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            color="var(--neutral-600)" marginTop={64}
          >
            <Anchor tap href="#principles" display="flex" flexDirection="column" alignItems="center">
              <Text marginBottom={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Discover more</Text>
              <ArrowDown size={20} />
            </Anchor>
          </MotionBox>
        </Box>
      </Box>
    </YStack>
  );
};

export default ZenHero;