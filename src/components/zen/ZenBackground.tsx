import { Box } from '@/gui'

import React from "react";

const ZenBackground: React.FC = () => {
  return (
    <Box position="fixed" top={0} right={0} bottom={0} left={0} zIndex={-10} overflow="hidden">
      {/* Subtle dot pattern */}
      <Box 
        position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.02}
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.1) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Ultra-subtle gradient overlays */}
      <Box position="absolute" top={0} left={0} right={0} height="30vh" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), transparent)" />
      <Box position="absolute" left={0} bottom={0} right={0} height="30vh" backgroundImage="linear-gradient(to top, rgb(255 255 255 / 0.08), transparent)" />
      
      {/* Depth radial gradient */}
      <Box 
        position="absolute" top={0} right={0} bottom={0} left={0}
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(15,15,15,0), rgba(0,0,0,1))'
        }}
      />
      
      {/* Subtle grain texture */}
      <Box 
        position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.08} mixBlendMode="overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />
      
      {/* Vignette effect */}
      <Box 
        position="absolute" top={0} right={0} bottom={0} left={0} pointerEvents="none"
        style={{
          boxShadow: 'inset 0 0 180px rgba(0,0,0,0.9)'
        }}
      />
    </Box>
  );
};

export default ZenBackground;
