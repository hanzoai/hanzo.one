import { Box, Button, ChromeText, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  mousePosition: { x: number; y: number };
  opacity: any;
  scale: any;
}

const Hero: React.FC<HeroProps> = ({ mousePosition, opacity, scale }) => {
  const navigate = useNavigate();
  
  return (
    <YStack render="section" position="relative" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" paddingHorizontal={16} paddingVertical={80} overflow="hidden">
      <MotionBox 
        maxWidth="var(--container-wide)" marginHorizontal="auto" textAlign="center" zIndex={10} position="relative"
        style={{ opacity, scale }}
      >
        {/* Floating orbs in background */}
        <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} position="absolute" top="25%" right={-80} width={160} height={160} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" filter="blur(64px)"></MotionBox>
        <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} position="absolute" bottom="25%" left={-80} width={160} height={160} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" filter="blur(64px)" style={{ animationDelay: "1s" }}></MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          marginBottom={24}
        >
          <Text display="inline-block" paddingHorizontal={20} paddingVertical={8} borderRadius="var(--radius-full)" color="var(--white)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
            The Future of AI Development
          </Text>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ChromeText 
            as="h1" 
            fontSize="var(--text-5xl)" lineHeight="var(--leading-5xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-7xl)", lineHeight: "var(--leading-7xl)" }}
            style={{
              backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
              backgroundSize: "200% 200%"
            }}
          >
            AI Cloud + DX Platform
          </ChromeText>
          
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-relaxed)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginTop={24} $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>
            Build, deploy, and scale AI applications with unmatched speed and efficiency.
            From development to production, Hanzo provides everything you need.
          </Paragraph>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          display="flex" flexDirection="column" gap={16} justifyContent="center" marginTop={48} $sm={{ flexDirection: "row" }}
        >
          <Button 
            size="lg" 
            fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} paddingVertical={24} borderStyle="none" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}
            onClick={() => navigate('/signup')}
          >
            Start Building <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} paddingVertical={24} borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(0 0 0 / 0.5)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            onClick={() => navigate('/pricing')}
          >
            View Pricing
          </Button>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          marginTop={96} $sm={{ marginTop: 128 }}
        >
          <XStack display="flex" justifyContent="center">
            <ArrowRight size={40} color="rgb(255 255 255 / 0.5)" />
          </XStack>
        </MotionBox>
      </MotionBox>
    </YStack>
  );
};

export default Hero;
