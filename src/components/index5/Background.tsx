import { BlueprintLine, Box, GridLines } from '@/gui'

import React from "react";

interface BackgroundProps {
  mousePosition: { x: number; y: number };
}

const Background: React.FC<BackgroundProps> = ({ mousePosition }) => {
  return (
    <Box position="fixed" top={0} right={0} bottom={0} left={0} zIndex={-10}>
      <div 
        style={{
          transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * -5}deg)`,
          transition: "transform 0.1s ease-out"
        }}
      >
        <GridLines spacing={60} opacity={0.1} />
      </div>
      
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.4} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"></Box>
      
      {/* Dynamic blueprint lines */}
      <BlueprintLine orientation="vertical" position="20%" color="rgba(147, 51, 234, 0.1)" />
      <BlueprintLine orientation="vertical" position="80%" color="rgba(147, 51, 234, 0.1)" />
      <BlueprintLine orientation="horizontal" position="25%" color="rgba(37, 99, 235, 0.1)" />
      <BlueprintLine orientation="horizontal" position="75%" color="rgba(37, 99, 235, 0.1)" />
    </Box>
  );
};

export default Background;
