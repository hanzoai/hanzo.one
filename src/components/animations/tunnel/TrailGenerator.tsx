import { Box } from '@/gui'

import React from "react";
import Trail from "./Trail";

interface TrailGeneratorProps {
  trailCount: number;
}

const TrailGenerator: React.FC<TrailGeneratorProps> = ({ trailCount }) => {
  const trails = [];
  
  for (let i = 0; i < trailCount; i++) {
    trails.push(<Trail key={`trail-${i}`} index={i} />);
  }
  
  return (
    <Box position="absolute" top={0} right={0} bottom={0} left={0} width="100%" height="100%" overflow="hidden" pointerEvents="none">
      {trails}
    </Box>
  );
};

export default TrailGenerator;
