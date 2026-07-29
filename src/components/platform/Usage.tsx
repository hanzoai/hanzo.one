import { Box, Grid, H2, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const Usage = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
            4.8M+ deploys per month (and counting)
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Real-time usage showing totals for users and services, along with 30-day deploys, requests, and logs.
          </Paragraph>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          position="relative" borderRadius="var(--radius-xl)" overflow="hidden" padding={24} borderWidth={1} borderColor="var(--neutral-800)" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))"
        >
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={24} backgroundColor="rgb(0 0 0 / 0.5)" borderRadius="var(--radius-xl)">
              <Box fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" color="var(--white)" marginBottom={8}>4.8M+</Box>
              <Box color="var(--neutral-400)">Monthly Deploys</Box>
            </YStack>
            
            <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={24} backgroundColor="rgb(0 0 0 / 0.5)" borderRadius="var(--radius-xl)">
              <Box fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" color="var(--white)" marginBottom={8}>1.2B+</Box>
              <Box color="var(--neutral-400)">Monthly Requests</Box>
            </YStack>
            
            <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={24} backgroundColor="rgb(0 0 0 / 0.5)" borderRadius="var(--radius-xl)">
              <Box fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" color="var(--white)" marginBottom={8}>850K+</Box>
              <Box color="var(--neutral-400)">Active Developers</Box>
            </YStack>
          </Grid>
          
          <Box marginTop={32} backgroundColor="rgb(0 0 0 / 0.5)" padding={16} borderRadius="var(--radius-xl)">
            <XStack height={160} width="100%" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center">
              <Paragraph color="var(--neutral-500)">Usage Metrics Visualization</Paragraph>
            </XStack>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Usage;
