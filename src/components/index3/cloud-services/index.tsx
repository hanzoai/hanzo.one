import { Box, Grid, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CloudHeader from "./CloudHeader";
import CloudServiceGrid from "./CloudServiceGrid";
import GlobalNetwork from "./GlobalNetwork";
import BackgroundEffects from "./BackgroundEffects";
import CloudDeploymentAnimation from "@/components/animations/CloudDeploymentAnimation";

interface CloudServicesProps {
  onDeploymentEvent?: (message: string) => void;
}

const CloudServices: React.FC<CloudServicesProps> = ({ onDeploymentEvent }) => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [scanPoints, setScanPoints] = useState<Array<{ x: number; y: number; active: boolean }>>([]);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  // Initialize grid points
  useEffect(() => {
    const points = [];
    const gridSize = 10;
    
    for (let i = 0; i < 30; i++) {
      points.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        active: false
      });
    }
    
    setScanPoints(points);
    
    // Gradually activate points over time
    points.forEach((_, index) => {
      setTimeout(() => {
        setScanPoints(prevPoints => {
          const newPoints = [...prevPoints];
          if (newPoints[index]) {
            newPoints[index] = { ...newPoints[index], active: true };
          }
          return newPoints;
        });
      }, 300 * index);
    });
  }, []);

  // Track mouse position for header effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - left,
          y: e.clientY - top
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
      id="cloud" 
      render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}
    >
      <BackgroundEffects scanPoints={scanPoints} />
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <CloudHeader mousePosition={mousePosition} containerRef={containerRef} />
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} marginBottom={64} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            display="flex" flexDirection="column" justifyContent="center"
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={24} color="var(--white)" $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
              Intelligent Architecture Canvas
            </H3>
            <Paragraph color="var(--neutral-300)" marginBottom={32} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
              Visually compose and deploy entire cloud architectures with our drag-and-drop canvas. 
              Connect services, configure dependencies, and deploy with a single click.
            </Paragraph>
            <Box render="ul" rowGap={16} color="var(--neutral-400)">
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box marginRight={8} marginTop={4} color="var(--foreground)">•</Box>
                <span>Automatic resource provisioning and configuration</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box marginRight={8} marginTop={4} color="var(--foreground)">•</Box>
                <span>Real-time deployment status and monitoring</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box marginRight={8} marginTop={4} color="var(--foreground)">•</Box>
                <span>AI-powered recommendations for optimizing your architecture</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box marginRight={8} marginTop={4} color="var(--foreground)">•</Box>
                <span>Version control and rollback capabilities</span>
              </XStack>
            </Box>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            flexDirection="row" display="flex" alignItems="center" justifyContent="center"
          >
            <Box width="100%" maxWidth="32rem" marginHorizontal="auto">
              <CloudDeploymentAnimation />
            </Box>
          </MotionBox>
        </Grid>
        
        <GlobalNetwork />
        
        <CloudServiceGrid isHovered={isHovered} setIsHovered={setIsHovered} />
      </Box>
    </Box>
  );
};

export default CloudServices;
