import { Box } from '@/gui'

import React from "react";
import TunnelSegments from "./tunnel/TunnelSegments";
import TunnelStars from "./tunnel/TunnelStars";
import VanishingPoint from "./tunnel/VanishingPoint";

interface AITunnelGridProps {
  mousePosition: { x: number; y: number };
}

const AITunnelGrid: React.FC<AITunnelGridProps> = ({ mousePosition }) => {
  return (
    <Box position="absolute" top={0} right={0} bottom={0} left={0} width="100%" height="100%" overflow="hidden">
      {/* Moving tunnel rings */}
      <TunnelSegments />
      
      {/* Stars flowing to center */}
      <TunnelStars starCount={100} />
      
      {/* Glowing center point (vanishing point) */}
      <VanishingPoint />
    </Box>
  );
};

export default AITunnelGrid;
