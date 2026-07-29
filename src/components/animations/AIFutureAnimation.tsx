import { Box } from '@/gui'

import React from "react";
import AITunnelAnimation from "./AITunnelAnimation";

interface AIFutureAnimationProps {
  title?: string;
  subtitle?: string;
  showButtons?: boolean;
}

const AIFutureAnimation: React.FC<AIFutureAnimationProps> = ({
  title = "Accelerating AI Future",
  subtitle = "Pioneer a new era of intelligence with Hanzo",
  showButtons = true
}) => {
  return (
    <Box width="100%" height="500px" backgroundColor="var(--black)" borderRadius="var(--radius-xl)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" $md={{ height: "600px" }}>
      <AITunnelAnimation 
        title={title}
        subtitle={subtitle}
        showButtons={showButtons}
      />
    </Box>
  );
};

export default AIFutureAnimation;
