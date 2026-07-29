import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const Architecture = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), var(--neutral-950))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Architecture</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            A modular system designed for flexibility and extensibility
          </Paragraph>
          <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={8}>
            Source: <Anchor tap href="https://x.com/0xCygaar/status/1874575841763770492" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>https://x.com/0xCygaar/status/1874575841763770492</Anchor>
          </Box>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32}
          >
            <XStack position="relative" overflow="hidden" borderRadius="var(--radius-lg)" backgroundColor="rgb(0 0 0 / 0.5)" padding={24} height={256} display="flex" alignItems="center" justifyContent="center">
              <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"></Box>
              <Box position="relative" zIndex={10} textAlign="center">
                <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={16}>Modular Architecture</Box>
                <Paragraph color="var(--neutral-400)">Visualization of the Hanzo Bot architecture would appear here</Paragraph>
              </Box>
            </XStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            rowGap={16}
          >
            <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Character Files</H3>
              <Paragraph color="var(--neutral-400)">
                Contains the agent's personality, backstory, knowledge, and topics to discuss. 
                It also defines which clients, models, and plugins to load.
              </Paragraph>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Database</H3>
              <Paragraph color="var(--neutral-400)">
                Stores relevant information for generating responses, including previous interactions 
                and embeddings. Essential for contextual responses.
              </Paragraph>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Runtime</H3>
              <Paragraph color="var(--neutral-400)">
                The core agent logic that coordinates between modules and external services. 
                It processes inputs through the LLM and generates responses or action items.
              </Paragraph>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Clients</H3>
              <Paragraph color="var(--neutral-400)">
                The platforms where agents interact with users (Discord, Twitter, Slack, Farcaster). 
                Agents can run on multiple clients simultaneously.
              </Paragraph>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default Architecture;
