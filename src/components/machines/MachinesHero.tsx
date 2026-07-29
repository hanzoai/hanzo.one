import { Box, Button, Grid, H1, H3, Paragraph, Text, XStack, YStack } from '@/gui'

import React from 'react';
import { motion } from "framer-motion";

const MachinesHero = () => {
  return (
    <Box render="section" paddingVertical={80} position="relative" $lg={{ paddingVertical: 128 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), transparent)"></Box>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
          <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={4} display="inline-block" marginBottom={16}>
            <Text color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">High-Performance Computing</Text>
          </Box>
          <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            Hanzo Machines
          </H1>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
            Dedicated AI compute infrastructure optimized for machine learning and high-performance workloads.
          </Paragraph>
          <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
            <Button backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
              Get Started
            </Button>
            <Button variant="outline" borderColor="var(--border-strong)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}>
              View Documentation
            </Button>
          </YStack>
        </Box>
        
        {/* Hero Hardware Visualization */}
        <Box position="relative" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32} overflow="hidden">
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            <Box backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={16}>
              <H3 fontWeight="500" color="var(--foreground)" marginBottom={8}>NVIDIA H100</H3>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" marginBottom={12}>Dedicated GPU instances for AI/ML training</Paragraph>
              <Box rowGap={12}>
                <XStack backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={8} display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">VRAM</Text>
                  <Text fontWeight="500" color="var(--foreground)">80GB HBM3</Text>
                </XStack>
                <XStack backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={8} display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Cores</Text>
                  <Text fontWeight="500" color="var(--foreground)">16,896 CUDA</Text>
                </XStack>
                <XStack backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={8} display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Tensor Cores</Text>
                  <Text fontWeight="500" color="var(--foreground)">528 TCs</Text>
                </XStack>
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={16}>
              <H3 fontWeight="500" color="var(--foreground)" marginBottom={8}>AMD EPYC 7763</H3>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" marginBottom={12}>High-core count CPU instances</Paragraph>
              <Box rowGap={12}>
                <XStack backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={8} display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Cores</Text>
                  <Text fontWeight="500" color="var(--foreground)">64 Cores</Text>
                </XStack>
                <XStack backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={8} display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Threads</Text>
                  <Text fontWeight="500" color="var(--foreground)">128 Threads</Text>
                </XStack>
                <XStack backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={8} display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Memory</Text>
                  <Text fontWeight="500" color="var(--foreground)">Up to 2TB</Text>
                </XStack>
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={16}>
              <H3 fontWeight="500" color="var(--foreground)" marginBottom={8}>Storage Options</H3>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" marginBottom={12}>Ultra-fast NVMe and persistent storage</Paragraph>
              <Box rowGap={12}>
                <XStack backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={8} display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Local NVMe</Text>
                  <Text fontWeight="500" color="var(--foreground)">Up to 8TB</Text>
                </XStack>
                <XStack backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={8} display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Network Storage</Text>
                  <Text fontWeight="500" color="var(--foreground)">Unlimited</Text>
                </XStack>
                <XStack backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={8} display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">I/O Performance</Text>
                  <Text fontWeight="500" color="var(--foreground)">7GB/s</Text>
                </XStack>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MachinesHero;
