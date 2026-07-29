import { Box, Grid, H2, MotionBox, Paragraph } from '@/gui'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveHexagram, { HexagramDetails } from "./InteractiveHexagram";
import HexagramDetail from "./HexagramDetail";
import { ichingPrinciples } from "./data/ichingPrinciples";

interface HexagramsGridProps {
  title?: string;
  description?: string;
}

const HexagramsGrid: React.FC<HexagramsGridProps> = ({
  title = "The 64 Hexagrams",
  description = "Ancient wisdom for modern engineering"
}) => {
  const [selectedHexagram, setSelectedHexagram] = useState<HexagramDetails | null>(null);
  
  // Create a grid of 8x8 = 64 hexagrams
  const rows = 8;
  const columns = 8;
  
  const handleHexagramClick = (hexagram: HexagramDetails) => {
    setSelectedHexagram(hexagram);
  };
  
  return (
    <Box paddingVertical={64} id="hexagrams">
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        textAlign="center" marginBottom={48}
      >
        <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} color="var(--white)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>{title}</H2>
        <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="var(--container-prose)" marginHorizontal="auto">
          {description}
        </Paragraph>
        <Box height={1} width={80} backgroundColor="var(--neutral-800)" marginHorizontal="auto" marginTop={24}></Box>
      </MotionBox>
      
      <AnimatePresence mode="wait">
        {selectedHexagram && (
          <Box marginBottom={40} maxWidth="var(--container-prose)" marginHorizontal="auto" paddingHorizontal={16}>
            <HexagramDetail hexagram={selectedHexagram} />
          </Box>
        )}
      </AnimatePresence>
      
      <Box position="relative" paddingHorizontal={16}>
        <Box overflowX="auto">
          <Grid display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))" gap={8} minWidth="320px" padding={16} backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" marginHorizontal="auto" maxWidth="64rem" $sm={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }} $md={{ gridTemplateColumns: "repeat(8, minmax(0, 1fr))", gap: 12, padding: 24 }}>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <React.Fragment key={`row-${rowIndex}`}>
                {Array.from({ length: columns }).map((_, colIndex) => {
                  const index = rowIndex * columns + colIndex;
                  const hexagram = ichingPrinciples[index] || null;
                  
                  if (!hexagram) return <Box key={`empty-${index}`} aspectRatio={1}></Box>;
                  
                  return (
                    <InteractiveHexagram 
                      key={`hexagram-${hexagram.id}`}
                      hexagram={hexagram}
                      index={index}
                      onClick={handleHexagramClick}
                      isSelected={selectedHexagram?.id === hexagram.id}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </Grid>
        </Box>
        
        <Box marginTop={24} textAlign="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
          Click on a hexagram to view its meaning and principle
        </Box>
      </Box>
    </Box>
  );
};

export default HexagramsGrid;
