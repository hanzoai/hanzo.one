import { Box, Button, H1, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { ShoppingCart, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <Box render="section" position="relative" paddingTop={112} paddingBottom={64} overflow="hidden" $md={{ paddingTop: 144, paddingBottom: 96 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} zIndex={0} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08), var(--pure-black))" />
      
      {/* Background effect */}
      <Box position="absolute" top={0} left={0} right={0} height={384} zIndex={0} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.05), transparent)" />
      
      <Box position="relative" zIndex={10} marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" maxWidth="56rem" marginHorizontal="auto">
          <XStack display="inline-flex" alignItems="center" paddingHorizontal={12} paddingVertical={4} marginBottom={16} borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.1)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ShoppingCart size={16} /></Box>
            Headless E-commerce Platform
          </XStack>
          
          <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" letterSpacing="var(--tracking-tight)" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            <Text color="var(--white)">Hanzo</Text>
            <Text backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--neutral-600))"> Commerce</Text>
          </H1>
          
          <Paragraph color="var(--neutral-300)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" marginBottom={32} maxWidth="var(--container-prose)" marginHorizontal="auto" $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}>
            A powerful headless e-commerce platform with API-first architecture. 
            Build custom shopping experiences with modular components that scale.
          </Paragraph>
          
          <YStack display="flex" flexDirection="column" justifyContent="center" gap={16} marginBottom={48} $sm={{ flexDirection: "row" }}>
            <Button 
              size="lg" 
              backgroundColor="var(--neutral-500)" color="var(--pure-black)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }}
              onClick={() => window.open('https://docs.hanzo.ai/commerce', '_blank')}
            >
              Get Started
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              borderColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
              onClick={() => window.open('https://console.hanzo.ai', '_blank')}
            >
              Console
            </Button>
          </YStack>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
