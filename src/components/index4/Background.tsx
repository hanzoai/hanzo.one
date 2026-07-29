import { Box, GridLines } from '@/gui'

import React from "react";

const Background = () => {
  console.log("Background component rendering");
  return (
    <>
      {/* Subtle grid background */}
      <GridLines spacing={40} opacity={0.07} position="fixed" top={0} right={0} bottom={0} left={0} zIndex={-10} />
      
      {/* Subtle gradient accents */}
      <Box position="fixed" top={0} right={0} bottom={0} left={0} zIndex={-10} opacity={0.2}>
        <Box position="absolute" top={-320} right={-320} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(120px)"></Box>
        <Box position="absolute" top="33.333333%" left="25%" width="30rem" height="30rem" backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(100px)"></Box>
      </Box>
    </>
  );
};

export default Background;
