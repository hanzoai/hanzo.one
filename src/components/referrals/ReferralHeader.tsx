import { Box, H1, Paragraph, XStack, YStack } from '@/gui'

import React from 'react';
import { Gift } from 'lucide-react';

const ReferralHeader = () => {
  return (
    <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" gap={24} padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" $md={{ flexDirection: "row" }}>
      <XStack display="flex" alignItems="center" gap={24}>
        <XStack height={64} width={64} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
          <Gift size={32} color="var(--foreground)" />
        </XStack>
        <Box textAlign="center">
          <H1 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={8}>Referral Program</H1>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)">Get $5 in credits for every friend who signs up and pays for any plan</Paragraph>
        </Box>
      </XStack>
    </YStack>
  );
};

export default ReferralHeader;
