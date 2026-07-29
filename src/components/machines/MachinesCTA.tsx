import { Box, Button, H2, Paragraph, YStack } from '@/gui'

import React from 'react';

const MachinesCTA = () => {
  return (
    <Box render="section" paddingVertical={80}>
      <Box maxWidth="64rem" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box borderRadius="var(--radius-2xl)" padding={32} borderWidth={1} borderColor="var(--border-strong)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" $md={{ padding: 48 }}>
          <Box textAlign="center">
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Power Your AI Workloads</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32} maxWidth="var(--container-prose)" marginHorizontal="auto">
              Get started with Hanzo Machines today and experience high-performance AI infrastructure.
            </Paragraph>
            <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
              <Button backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                Sign Up Free
              </Button>
              <Button variant="outline" borderColor="var(--border-strong)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}>
                Contact Sales
              </Button>
            </YStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MachinesCTA;
