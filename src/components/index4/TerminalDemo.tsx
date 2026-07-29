import { ArchitecturalBox, Box, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const TerminalDemo = () => {
  return (
    <Box render="section" maxWidth="56rem" marginHorizontal="auto" marginBottom={128}>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ArchitecturalBox
          backdropFilter="blur(16px)" WebkitBackdropFilter="blur(16px)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" overflow="hidden"
          showGrid={true}
          gridColor="rgba(255,255,255,0.03)"
          gridSpacing={30}
          gridOpacity={0.1}
        >
          <XStack display="flex" alignItems="center" borderBottomWidth={1} borderColor="var(--border-strong)" paddingHorizontal={16} paddingVertical={12}>
            <XStack display="flex" columnGap={8} marginRight={16}>
              <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-700)"></Box>
              <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-700)"></Box>
              <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-700)"></Box>
            </XStack>
            <Box flex={1} textAlign="center">
              <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontFamily="var(--font-mono)" color="var(--neutral-400)">terminal</Text>
            </Box>
          </XStack>
          
          <Box padding={24} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            <XStack display="flex" alignItems="flex-start" marginBottom={16}>
              <Text color="var(--foreground)" marginRight={8}>$</Text>
              <Text color="var(--neutral-300)">hanzo deploy</Text>
            </XStack>
            
            <Box paddingLeft={16} color="var(--neutral-500)" rowGap={4}>
              <p>Initializing deployment...</p>
              <p>Building application <Text color="var(--neutral-400)">v2.3.5</Text></p>
              <Paragraph color="var(--neutral-400)">Installing dependencies...</Paragraph>
              <Paragraph color="var(--neutral-400)">Running build command...</Paragraph>
              <Paragraph color="var(--foreground)">✓ Build successful</Paragraph>
              <Paragraph color="var(--neutral-400)">Uploading artifacts...</Paragraph>
              <Paragraph color="var(--foreground)">✓ Deployment complete</Paragraph>
            </Box>
            
            <XStack marginTop={24} display="flex" alignItems="flex-start">
              <Text color="var(--foreground)" marginRight={8}>$</Text>
              <Text color="var(--neutral-300)">_</Text>
            </XStack>
          </Box>
        </ArchitecturalBox>
      </MotionBox>
    </Box>
  );
};

export default TerminalDemo;
