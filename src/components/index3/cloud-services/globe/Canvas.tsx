import { Box } from '@/gui'

import React, { useEffect, useRef } from "react";
import { useCanvasContext } from "./CanvasContext";

interface CanvasProps {
  width: number;
  height: number;
}

const Canvas: React.FC<CanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { 
    globeRadius,
    centerX,
    centerY,
    setCanvasContext,
    connectionPoints,
    drawGlobe
  } = useCanvasContext();

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    setCanvasContext(ctx);
  }, [setCanvasContext]);

  useEffect(() => {
    drawGlobe();
  }, [drawGlobe, connectionPoints]);

  return (
    <Box display="inline-block" 
      ref={canvasRef} 
      
      
      render="canvas" position="absolute" top={0} right={0} bottom={0} left={0} width="100%" height="100%"
    />
  );
};

export default Canvas;
