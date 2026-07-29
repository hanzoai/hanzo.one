import { Box, Button, H2, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowUp } from "lucide-react";

const HanzoDev = () => {
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
            For Developers
          </H2>
          
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={40} maxWidth="42rem" marginHorizontal="auto">
            Install Hanzo Dev directly in your terminal and supercharge your development workflow.
          </Paragraph>
          
          <XStack display="flex" justifyContent="center" marginBottom={40}>
            <XStack backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" paddingHorizontal={24} paddingVertical={16} display="flex" alignItems="center">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Terminal size={20} color="var(--neutral-500)" /></Box>
              <Text render="code" color="var(--neutral-300)" fontFamily="var(--font-mono)">pip install hanzo-dev</Text>
              <Button variant="ghost" size="sm" marginLeft={16} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
                Copy
              </Button>
            </XStack>
          </XStack>
          
          <Button 
            size="lg"
            color="var(--white)" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / .4)", backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
          >
            <a href="/hanzodev">Learn More About Hanzo Dev</a>
          </Button>
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

export default HanzoDev;
