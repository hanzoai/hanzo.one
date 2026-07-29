import { Box } from '@/gui'

import React, { useRef } from 'react';
import { useGlobeScene } from '../hooks/useGlobeScene';
import { useGlobeAnimation } from '../hooks/useGlobeAnimation';

interface GlobeRendererProps {
  width: number;
  height: number;
}

const GlobeRenderer: React.FC<GlobeRendererProps> = ({ width, height }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useGlobeScene(containerRef, width, height);
  
  // Start the animation loop
  useGlobeAnimation(globeRef);
  
  return (
    <Box 
      ref={containerRef} 
      width="100%" height="100%" borderRadius="var(--radius-lg)" overflow="hidden"
      style={{ 
        background: 'radial-gradient(circle at center, rgba(25, 34, 55, 0.4) 0%, rgba(10, 14, 25, 0.8) 70%)',
      }}
    />
  );
};

export default GlobeRenderer;
