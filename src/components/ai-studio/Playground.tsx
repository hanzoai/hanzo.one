import { Box, H3, Paragraph, YStack } from '@/gui'

import React from "react";
import { Grid3X3 } from "lucide-react";

const Playground = () => {
  return (
    <YStack flex={1} padding={24} display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
      <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Grid3X3 size={64} color="var(--neutral-600)" /></Box>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={8}>Playground Mode</H3>
      <Paragraph color="var(--neutral-400)" maxWidth="28rem">
        This feature allows you to create custom AI workflows with a visual interface.
        Coming soon in a future update.
      </Paragraph>
    </YStack>
  );
};

export default Playground;
