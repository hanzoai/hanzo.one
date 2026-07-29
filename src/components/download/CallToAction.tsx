import { Box, Button, H2, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Apple, Chrome, Terminal } from "lucide-react";

const CallToAction = () => {
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
    <Box ref={containerRef} render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.3} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"></Box>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="64rem" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox 
          textAlign="center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <H2 
            fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} backgroundImage="linear-gradient(180deg, var(--foreground), var(--neutral-500))" backgroundClip="text" color="transparent" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}
            style={{
              backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
            }}
          >
            Do everything 100x faster
          </H2>
          
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={48} maxWidth="42rem" marginHorizontal="auto">
            Hanzo AI lets models understand your desktop activity. Build faster.
          </Paragraph>
          
          <YStack display="flex" flexDirection="column" justifyContent="center" gap={16} marginBottom={32} $sm={{ flexDirection: "row" }}>
            <Button 
              size="sm"
              color="var(--white)" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / .4)", backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Apple size={16} /></Box>
              Download (Apple Silicon)
            </Button>
            <Button 
              size="sm"
              color="var(--white)" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / .4)", backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Apple size={16} /></Box>
              Download (Intel Mac)
            </Button>
            <Button 
              size="sm"
              color="var(--white)" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / .4)", backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--neutral-400))" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ArrowDown size={16} /></Box>
              Download for Windows
            </Button>
          </YStack>
          
          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16} marginBottom={32}>
            <Button 
              size="sm"
              variant="outline"
              borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Chrome size={16} /></Box>
              Chrome Extension
            </Button>
            <Button 
              size="sm"
              variant="outline"
              borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Chrome size={16} /></Box>
              Safari Extension
            </Button>
            <Button 
              size="sm"
              variant="outline"
              borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Chrome size={16} /></Box>
              Firefox Add-on
            </Button>
            <Button 
              size="sm"
              variant="outline"
              borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Chrome size={16} /></Box>
              Edge Extension
            </Button>
          </XStack>
        </MotionBox>
      </Box>

      <style>
        {`
        .text-gradient-steel {
          background: linear-gradient(
            90deg,
            rgb(180, 180, 180),
            rgb(240, 240, 240),
            rgb(180, 180, 180)
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 6s ease infinite;
          transition: background-position 0.3s ease;
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
    </Box>
  );
};

export default CallToAction;
