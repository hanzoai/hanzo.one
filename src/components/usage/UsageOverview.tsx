import { Box, Button, Grid, H2, MotionBox, Text, XStack, YStack, createAnimationVariant, curves } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface UsageOverviewProps {
  dateRange: {
    start: string;
    end: string;
  };
  currentUsage: string;
  discounts: string;
  creditsUsed: string;
  estimatedCost: string;
  creditsAvailable: string;
  creditsRequired: string;
}

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

const UsageOverview = ({
  dateRange,
  currentUsage,
  discounts,
  creditsUsed,
  estimatedCost,
  creditsAvailable,
  creditsRequired
}: UsageOverviewProps) => {
  return (
    <MotionBox 
      variants={cardAnimation}
      borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(255 255 255 / 0.2)" overflow="hidden"
    >
      <Box padding={24} borderBottomWidth={1} borderColor="var(--neutral-800)">
        <H2 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={4}>
          {dateRange.start} to {dateRange.end} Credit Usage
        </H2>
      </Box>
      
      <Box padding={24}>
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <Box rowGap={16}>
            <XStack display="flex" justifyContent="space-between" alignItems="center">
              <Text color="var(--neutral-400)">Current Usage</Text>
              <span>{currentUsage}</span>
            </XStack>
            <XStack display="flex" justifyContent="space-between" alignItems="center">
              <Text color="var(--neutral-400)">Discounts</Text>
              <span>{discounts}</span>
            </XStack>
            <XStack display="flex" justifyContent="space-between" alignItems="center">
              <Text color="var(--neutral-400)">Credits Used</Text>
              <span>{creditsUsed}</span>
            </XStack>
            <XStack display="flex" justifyContent="space-between" alignItems="center">
              <Text color="var(--neutral-400)">Estimated Month's Cost</Text>
              <span>{estimatedCost}</span>
            </XStack>
          </Box>
          
          <YStack backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={24} display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <Box marginBottom={8}>
              <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Credits Available</Box>
              <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">{creditsAvailable}</Box>
            </Box>
            
            <Box marginBottom={24}>
              <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">Est Credits Required</Box>
              <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--neutral-500)">{creditsRequired}</Box>
            </Box>
            
            <Button 
              backgroundColor="var(--neutral-600)" color="var(--white)" width="100%" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            >
              Purchase Credits
            </Button>
          </YStack>
        </Grid>
      </Box>
    </MotionBox>
  );
};

export default UsageOverview;
