import { Box, MotionBox, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { BrainCog, Cloud, Server, Database, Monitor, Network, Activity } from "lucide-react";

const CloudInfrastructure = () => {
  return (
    <Box position="relative" height={256} width="100%" borderRadius="var(--radius-xl)" overflow="hidden" backgroundImage="linear-gradient(to bottom right, var(--pure-black), var(--neutral-900))">
      <Box position="absolute" top={0} right={0} bottom={0} left={0} style={{
        backgroundImage: "radial-gradient(rgba(128, 90, 213, 0.07) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}></Box>
      
      <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
        <MotionBox 
          flexDirection="row" position="relative" height={80} width={80} borderRadius="var(--radius-xl)" backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--border-strong)" display="flex" alignItems="center" justifyContent="center" zIndex={30}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BrainCog size={32} color="var(--foreground)" />
        </MotionBox>
        
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          const distance = 80;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          const icons = [
            <Cloud key={0} size={20} color="var(--foreground)" />,
            <Server key={1} size={20} color="var(--foreground)" />,
            <Database key={2} size={20} color="var(--foreground)" />,
            <Monitor key={3} size={20} color="var(--foreground)" />,
            <Network key={4} size={20} color="var(--foreground)" />,
            <Activity key={5} size={20} color="var(--foreground)" />
          ];
          
          return (
            <MotionBox 
              key={i}
              flexDirection="row" position="absolute" height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-700)" display="flex" alignItems="center" justifyContent="center"
              initial={{ 
                x: 0,
                y: 0,
                opacity: 0
              }}
              animate={{ 
                x,
                y,
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.6 + (i * 0.1),
                ease: "easeOut"
              }}
              style={{
                left: "50%",
                top: "50%",
                marginLeft: -24,
                marginTop: -24
              }}
            >
              {icons[i]}
            </MotionBox>
          );
        })}
        
        {/* Connection lines */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          
          return (
            <MotionBox
              key={`line-${i}`}
              position="absolute" height={2} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.1))"
              style={{
                width: 80,
                transformOrigin: "left center",
                left: "50%",
                top: "50%",
                transform: `translateY(-0.5px) rotate(${angle}rad)`,
              }}
              initial={{
                scaleX: 0,
                opacity: 0
              }}
              animate={{
                scaleX: 1,
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.5 + (i * 0.05)
              }}
            />
          );
        })}
        
        {/* Data particles */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          const distance = 80;
          
          return (
            <MotionBox
              key={`particle-${i}`}
              position="absolute" height={6} width={6} borderRadius="var(--radius-full)" backgroundColor="var(--foreground)"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [0, Math.cos(angle) * distance],
                y: [0, Math.sin(angle) * distance],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 2.5,
                delay: 1.2 + (i * 0.3),
                repeat: Infinity,
                repeatDelay: i * 0.5
              }}
            />
          );
        })}
      </XStack>
    </Box>
  );
};

export default CloudInfrastructure;
