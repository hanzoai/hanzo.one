import { Box, Button, Grid, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Github, CheckCircle } from "lucide-react";

const GettingStarted = () => {
  const prerequisites = [
    "Python 2.7+",
    "Node.js 23+",
    "pnpm",
    "Note for Windows Users: WSL 2 is required"
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, var(--neutral-950), var(--pure-black))"></Box>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Getting Started</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Begin your journey with Hanzo Bot in a few simple steps
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            order={2} $lg={{ order: 1 }}
          >
            <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} marginBottom={24}>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={16}>Prerequisites</H3>
              <Box render="ul" rowGap={12}>
                {prerequisites.map((req, index) => (
                  <XStack key={index} render="li" display="flex" alignItems="flex-start">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><CheckCircle size={20} color="var(--neutral-500)" /></Box>
                    <Text color="var(--neutral-300)">{req}</Text>
                  </XStack>
                ))}
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={16}>Automated Start</H3>
              <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-lg)" padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" marginBottom={16} overflowX="auto">
                <p>git clone https://github.com/hanzoai/bot-starter.git</p>
                <p>cd bot-starter</p>
                <p>cp .env.example .env</p>
                <p>pnpm i && pnpm build && pnpm start</p>
              </Box>
              
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>OR</Paragraph>
              
              <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-lg)" padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" marginBottom={16} overflowX="auto">
                <p>git clone https://github.com/hanzoai/bot</p>
                <p>cd bot</p>
                <p>sh scripts/start.sh</p>
              </Box>
              
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                The start script handles all dependencies, environment setup, and character management automatically.
              </Paragraph>
            </Box>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            order={1} display="flex" flexDirection="column" $lg={{ order: 2 }}
          >
            <YStack backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} display="flex" flexDirection="column" height="100%">
              <Box marginBottom={24} textAlign="center">
                <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={16}><Terminal size={48} color="var(--neutral-500)" /></Box>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)">Quickstart Guide</H3>
                <Paragraph color="var(--neutral-400)" marginTop={8}>
                  For a more detailed guide, check out our comprehensive documentation
                </Paragraph>
              </Box>
              
              <YStack flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Box textAlign="center" rowGap={24} maxWidth="28rem">
                  <Paragraph color="var(--neutral-300)">
                    Ready to create your first autonomous AI agent? Our detailed quickstart guide will walk you through every step.
                  </Paragraph>
                  
                  <Button 
                    size="lg"
                    backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} width="100%" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
                  >
                    View Quickstart Guide
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    borderColor="var(--neutral-700)" color="var(--neutral-300)" paddingHorizontal={32} width="100%" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                  >
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} /></Box>
                    Clone Repository
                  </Button>
                </Box>
              </YStack>
            </YStack>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default GettingStarted;
