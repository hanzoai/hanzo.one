import { Box, H3, Paragraph, YStack } from '@/gui'

import React from "react";
import { Terminal as TerminalIcon } from "lucide-react";

const Terminal = () => {
  return (
    <YStack flex={1} padding={24} display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
      <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><TerminalIcon size={64} color="var(--neutral-600)" /></Box>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={8}>Terminal Mode</H3>
      <Paragraph color="var(--neutral-400)" maxWidth="28rem">
        This feature provides a command-line interface for advanced model interactions.
        Coming soon in a future update.
      </Paragraph>
    </YStack>
  );
};

export default Terminal;
