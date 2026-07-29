import { Box, Grid, H2, H3, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const Regions = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px)" backgroundSize="32px 32px" backgroundColor="size:30px 30px" pointerEvents="none" />
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Serverful JavaScript Without the Hassle of Serverless
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Imagine if a server could boot as fast as a serverless function? That's Hanzo Machines—serverless compute is a trade-off you no longer need to make. Graduate to a full-stack cloud to regain control over your stack & hosting bill.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gap={64} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Boots in 250ms or Less</H3>
            <Paragraph color="var(--neutral-300)" marginBottom={32}>
              Functions and apps boot and respond to web requests in 250ms or less with Hanzo Machines. You decide to keep them running or automatically put them to sleep.
            </Paragraph>
            
            <Box borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
              <XStack backgroundColor="var(--neutral-800)" paddingVertical={8} paddingHorizontal={16} display="flex" alignItems="center" columnGap={8}>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Terminal</Box>
              </XStack>
              <Box padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
                <Box color="var(--foreground)">$ hanzo deploy</Box>
                <Box color="var(--neutral-400)">Initializing deployment...</Box>
                <Box color="var(--neutral-400)">Deploying to region: us-east-1</Box>
                <Box color="var(--neutral-400)">Building container image...</Box>
                <Box color="var(--neutral-400)">Pushing to registry...</Box>
                <Box color="var(--foreground)">✓ Deployed in 250ms</Box>
                <Box color="var(--neutral-400)">Your app is live at: <Text color="var(--foreground)">https://myapp.hanzo.cloud</Text></Box>
              </Box>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Built for JavaScript Developers</H3>
            <Paragraph color="var(--neutral-300)" marginBottom={32}>
              JavaScript, TypeScript, Bun, Deno—whatever your flavor, Hanzo Launch automatically detects your runtime and generates a VM with everything you need to run your app.
            </Paragraph>
            
            <Box padding={24} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--border-strong)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
              <H4 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>Real GPUs & CPUs on the Edge</H4>
              <Paragraph color="var(--neutral-300)">
                Run workloads that require GPUs or lots of CPUs, memory, and storage in over 30 regions around the world—all interconnected by a private, encrypted WireGuard network that works out of the box.
              </Paragraph>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default Regions;
