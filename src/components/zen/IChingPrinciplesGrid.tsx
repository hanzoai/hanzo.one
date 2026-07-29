import { Box, Grid, H2, MotionBox, Paragraph, Separator } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import IChingHexagram from "./svg/IChingHexagram";
import TaijiSymbol from "./svg/TaijiSymbol";
import { ichingPrinciples } from "./data/ichingPrinciples";

interface IChingPrinciplesGridProps {
  title?: string;
  description?: string;
}

const IChingPrinciplesGrid: React.FC<IChingPrinciplesGridProps> = ({ 
  title = "The 88 Principles of AI", 
  description = "I Ching-inspired framework for AI engineering and design" 
}) => {
  // Create an 8x11 grid (88 principles)
  const rows = 11;
  const columns = 8;
  
  return (
    <Box marginTop={64} marginBottom={96}>
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
        <Box height={1} width={80} backgroundColor="var(--neutral-700)" marginHorizontal="auto" marginTop={24}></Box>
      </MotionBox>
      
      <Box position="relative">
        <Box position="absolute" left={16} top={16}>
          <TaijiSymbol size={60} color="var(--white)" />
        </Box>
        
        <Box overflowX="auto">
          <Grid display="grid" gridTemplateColumns="repeat(8, minmax(0, 1fr))" gap={16} minWidth="800px" padding={32} backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <React.Fragment key={`row-${rowIndex}`}>
                {Array.from({ length: columns }).map((_, colIndex) => {
                  const index = rowIndex * columns + colIndex;
                  const hexagram = ichingPrinciples[index] || null;
                  
                  if (!hexagram) return <Box key={`empty-${index}`} aspectRatio={1}></Box>;
                  
                  return (
                    <MotionBox
                      key={`hexagram-${hexagram.id}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      
                      group display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={8} borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" aspectRatio={1} cursor="pointer" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
                      title={`${hexagram.id}. ${hexagram.name} (${hexagram.chineseName} - ${hexagram.pinyin}): ${hexagram.principle}`}
                    >
                      <Box marginBottom={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{hexagram.id}</Box>
                      <IChingHexagram lines={hexagram.lines} size={32} color="var(--white)" marginBottom={8} />
                      <Box textAlign="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--neutral-300)" }}>
                        {hexagram.chineseName}
                      </Box>
                    </MotionBox>
                  );
                })}
              </React.Fragment>
            ))}
          </Grid>
        </Box>
        
        <Box marginTop={32} textAlign="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
          Hover over each hexagram to see its principle
        </Box>
      </Box>
    </Box>
  );
};

export default IChingPrinciplesGrid;
