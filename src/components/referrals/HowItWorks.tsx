import { Box, Grid, H2, H3, Paragraph, XStack } from '@/gui'

import React from 'react';

const HowItWorks = () => {
  return (
    <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
      <H2 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={16}>How It Works</H2>
      
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        <Box padding={16} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)">
          <XStack display="flex" alignItems="center" marginBottom={12}>
            <XStack height={32} width={32} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" display="flex" alignItems="center" justifyContent="center" marginRight={12}>
              1
            </XStack>
            <H3 fontWeight="500">Share Your Link</H3>
          </XStack>
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
            Share your unique referral link with friends and colleagues via email or social media
          </Paragraph>
        </Box>
        
        <Box padding={16} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)">
          <XStack display="flex" alignItems="center" marginBottom={12}>
            <XStack height={32} width={32} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" display="flex" alignItems="center" justifyContent="center" marginRight={12}>
              2
            </XStack>
            <H3 fontWeight="500">Friends Sign Up</H3>
          </XStack>
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
            When your friends use your link to sign up and subscribe to any paid plan
          </Paragraph>
        </Box>
        
        <Box padding={16} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)">
          <XStack display="flex" alignItems="center" marginBottom={12}>
            <XStack height={32} width={32} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" display="flex" alignItems="center" justifyContent="center" marginRight={12}>
              3
            </XStack>
            <H3 fontWeight="500">Earn Credits</H3>
          </XStack>
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
            You receive $5 in credits for each successful referral that can be used toward your subscription
          </Paragraph>
        </Box>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
