import { Box } from '@/gui'

import React from "react";
import TrailGenerator from "./tunnel/TrailGenerator";
import ParticleGenerator from "./tunnel/ParticleGenerator";

const AITunnelParticles: React.FC = () => {
  // Adjusted configuration values for better performance and smoother rendering
  const trailCount = 200; // Slightly reduced for better performance
  const particleCount = 140; // Slightly reduced for better performance
  
  return (
    <Box position="absolute" top={0} right={0} bottom={0} left={0} width="100%" height="100%">
      <TrailGenerator trailCount={trailCount} />
      <ParticleGenerator particleCount={particleCount} />
    </Box>
  );
};

export default AITunnelParticles;
