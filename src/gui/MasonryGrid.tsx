import { Box, XStack, YStack } from '@/gui'

import React, { useEffect, useState } from "react";

import type { BoxProps } from './primitives'

/* The extra props are forwarded straight onto the Box below, so the type says
   so: a composition takes the same style vocabulary as a primitive. */
interface MasonryGridProps extends Omit<BoxProps, 'children'> {
  children: React.ReactNode[];
  columns?: number;
  gap?: number;
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({
  children,
  columns = 3,
  gap = 20,
  ...styleProps
}) => {
  const [columnCount, setColumnCount] = useState(columns);
  
  // Responsive column adjustment
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setColumnCount(1);
      } else if (width < 768) {
        setColumnCount(2);
      } else {
        setColumnCount(columns);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columns]);

  // Distribute children into columns
  const columnItems: React.ReactNode[][] = Array.from({ length: columnCount }, () => []);
  
  children.forEach((child, index) => {
    const columnIndex = index % columnCount;
    columnItems[columnIndex].push(
      <Box 
        key={index} 
        marginBottom={16}
        style={{ marginBottom: `${gap}px` }}
      >
        {child}
      </Box>
    );
  });

  return (
    <XStack {...styleProps} 
      display="flex" width="100%" 
      style={{ gap: `${gap}px` }}
    >
      {columnItems.map((column, index) => (
        <YStack 
          key={index} 
          flex={1} display="flex" flexDirection="column"
        >
          {column}
        </YStack>
      ))}
    </XStack>
  );
};

export const MasonryItem: React.FC<{
  children: React.ReactNode;
  
}> = ({ children, ...styleProps }) => {
  return (
    <Box {...styleProps} width="100%" overflow="hidden">
      {children}
    </Box>
  );
};
