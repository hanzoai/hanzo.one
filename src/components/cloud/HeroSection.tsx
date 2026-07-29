import { Anchor, Box, Button, ChromeText, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Server, Globe, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <XStack render="section" position="relative" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" paddingHorizontal={16} paddingVertical={128} overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="var(--black)" />
      
      {/* Enhanced background with subtle animated gradient */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.4} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08), var(--pure-black))"></Box>
      <Box position="absolute" top={0} left={0} width="100%" height="100%" backgroundImage="url('/placeholder.svg')" backgroundRepeat="repeat" opacity={0.05}></Box>
      
      <Box position="relative" zIndex={10} maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          marginBottom={32} textAlign="center"
        >
          <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
            Hanzo Cloud - Built for Production
          </Box>
          <ChromeText as="h1" fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" letterSpacing="var(--tracking-tight)" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            A High-Performance Cloud 
            <Text display="block" marginTop={8}>Optimized for AI Workloads</Text>
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Powering over 100 award-winning AI products with global infrastructure that scales from prototype to planet-scale. Deploy in seconds with zero configuration and scale limitlessly.
          </Paragraph>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          display="flex" flexDirection="column" gap={16} justifyContent="center" marginTop={40} $sm={{ flexDirection: "row" }}
        >
          <Button size="lg" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} borderStyle="none" backgroundImage="linear-gradient(to right, var(--neutral-700), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-600), var(--foreground))" }}>
            <a href="https://dashboard.hanzo.cloud">Deploy Now</a>
          </Button>
          
          <Button 
            variant="outline"
            size="lg" 
            fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} color="var(--white)" borderColor="var(--border-strong)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}
          >
            <a href="/platform">Try Open Source</a>
          </Button>
        </MotionBox>
        
        {/* Added feature highlights */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          marginTop={64} display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} maxWidth="56rem" marginHorizontal="auto" $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={24} textAlign="center">
            <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={16}><Server size={32} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8}>Global Infrastructure</H3>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">35+ regions worldwide for ultra-low latency at the edge</Paragraph>
          </Box>
          
          <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={24} textAlign="center">
            <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={16}><Zap size={32} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8}>Instant Deployment</H3>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Deploy in seconds with push-button simplicity</Paragraph>
          </Box>
          
          <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={24} textAlign="center">
            <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={16}><Globe size={32} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8}>AI-Optimized</H3>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Purpose-built for complex AI workloads and inference</Paragraph>
          </Box>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          marginTop={64} display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={24} textAlign="center" $md={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}
        >
          <Anchor tap href="#security" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Security</Anchor>
          <Anchor tap href="#infra-log" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Infra Log</Anchor>
          <Anchor tap href="https://docs.hanzo.cloud" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Docs</Anchor>
          <Anchor tap href="https://community.hanzo.cloud" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Community</Anchor>
          <Anchor tap href="https://status.hanzo.cloud" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Status</Anchor>
          <Anchor tap href="/pricing" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Pricing</Anchor>
        </MotionBox>
      </Box>
    </XStack>
  );
};

export default HeroSection;
