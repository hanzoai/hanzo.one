import { Anchor, Box, Button, ChromeText, MotionBox, Paragraph, Text } from '@/gui'
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Terminal, Download } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

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

  return (
    <Box 
      ref={containerRef}
      render="section" paddingTop={128} paddingBottom={80} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}
    >
      {/* Background elements */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.3} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"></Box>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="64rem" marginHorizontal="auto" textAlign="center" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          marginBottom={24}
        >
          <Text display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
            Open Source
          </Text>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          marginBottom={32}
        >
          <ChromeText 
            as="h1" 
            fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
            style={{
              backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
            }}
          >
            Hanzo Platform
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={32} $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>
            The free, forever, open-source version of our cloud infrastructure.
          </Paragraph>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={32} $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}>
            Build locally, deploy anywhere. Hanzo Platform gives developers the same powerful experience as our cloud offering, but with the freedom to run it on your own hardware.
          </Paragraph>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={48} $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}>
            Permissively licensed, community-driven, and built for the modern developer who values sovereignty and control over their stack.
          </Paragraph>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          display="flex" flexDirection="column" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}
        >
          <Button 
            size="lg"
            color="var(--white)" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / .4)", backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} /></Box>
            <Anchor tap href="https://github.com/hanzo/platform" flex={1}>Get on GitHub</Anchor>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            color="var(--white)" borderColor="var(--neutral-700)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" borderRadius="var(--radius-lg)" fontWeight="500" display="flex" alignItems="center" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Terminal size={20} /></Box>
            <Text flex={1}>Quick Start</Text>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            color="var(--white)" borderColor="var(--neutral-700)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" borderRadius="var(--radius-lg)" fontWeight="500" display="flex" alignItems="center" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Download size={20} /></Box>
            <Text flex={1}>Download CLI</Text>
          </Button>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          marginTop={64} paddingHorizontal={16} paddingVertical={12} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" display="inline-block"
        >
          <Text render="code" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
            npx @hanzo/cli create my-new-project
          </Text>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HeroSection;
