import { Box, Grid, H2, H3, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Activity, Users, Zap, Cpu, Server, Network } from "lucide-react";

const Scaling = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.1))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Scale to Millions of Connections
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Built for massive scale from day one, with no infrastructure management required
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" padding={24} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)"
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Activity size={32} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>High Throughput</H3>
            <Paragraph color="var(--neutral-300)">
              Process millions of messages per second with sub-millisecond latency. 
              Perfect for high-frequency data updates and time-sensitive applications.
            </Paragraph>
            
            <Box marginTop={24} paddingTop={24} borderTopWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={8}>
                <Text color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Message throughput</Text>
                <Text color="var(--white)" fontWeight="500">Unlimited</Text>
              </XStack>
              <Box width="100%" backgroundColor="var(--neutral-800)" height={8} borderRadius="var(--radius-full)" overflow="hidden">
                <Box backgroundColor="var(--neutral-500)" height="100%" borderRadius="var(--radius-full)" style={{ width: "100%" }}></Box>
              </Box>
            </Box>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" padding={24} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)"
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Users size={32} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Concurrent Connections</H3>
            <Paragraph color="var(--neutral-300)">
              Support millions of simultaneous client connections with automatic
              scaling. No connection limits or throttling to worry about.
            </Paragraph>
            
            <Box marginTop={24} paddingTop={24} borderTopWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={8}>
                <Text color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Connection capacity</Text>
                <Text color="var(--white)" fontWeight="500">Millions+</Text>
              </XStack>
              <Box width="100%" backgroundColor="var(--neutral-800)" height={8} borderRadius="var(--radius-full)" overflow="hidden">
                <Box backgroundColor="var(--neutral-500)" height="100%" borderRadius="var(--radius-full)" style={{ width: "95%" }}></Box>
              </Box>
            </Box>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" padding={24} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)"
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Network size={32} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Global Edge Network</H3>
            <Paragraph color="var(--neutral-300)">
              Deployed at the edge across 200+ locations worldwide, ensuring
              low-latency connections for users anywhere on the planet.
            </Paragraph>
            
            <Box marginTop={24} paddingTop={24} borderTopWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={8}>
                <Text color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Global coverage</Text>
                <Text color="var(--white)" fontWeight="500">200+ regions</Text>
              </XStack>
              <Box width="100%" backgroundColor="var(--neutral-800)" height={8} borderRadius="var(--radius-full)" overflow="hidden">
                <Box backgroundColor="var(--neutral-500)" height="100%" borderRadius="var(--radius-full)" style={{ width: "90%" }}></Box>
              </Box>
            </Box>
          </MotionBox>
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          marginTop={64} display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          <XStack backgroundColor="rgb(0 0 0 / 0.4)" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" padding={16} display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={16}><Zap size={32} color="var(--foreground)" /></Box>
            <div>
              <H4 color="var(--white)" fontWeight="500">Auto-scaling</H4>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Scales automatically based on demand</Paragraph>
            </div>
          </XStack>
          
          <XStack backgroundColor="rgb(0 0 0 / 0.4)" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" padding={16} display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={16}><Cpu size={32} color="var(--foreground)" /></Box>
            <div>
              <H4 color="var(--white)" fontWeight="500">High Availability</H4>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">99.99% uptime SLA guarantee</Paragraph>
            </div>
          </XStack>
          
          <XStack backgroundColor="rgb(0 0 0 / 0.4)" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" padding={16} display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={16}><Server size={32} color="var(--foreground)" /></Box>
            <div>
              <H4 color="var(--white)" fontWeight="500">Zero Management</H4>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">No servers or infrastructure to manage</Paragraph>
            </div>
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Scaling;
