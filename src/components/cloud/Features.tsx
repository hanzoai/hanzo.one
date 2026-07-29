import { Anchor, Box, Button, Grid, H3, MotionBox, MotionText, Paragraph, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Cpu, Globe, Server, Database, Network, Bot, Lock, Zap } from "lucide-react";

const Features = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), var(--neutral-900))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Box textAlign="center" marginBottom={64}>
          <MotionText 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}
          >
            Enterprise-Grade Cloud Built for AI Engineers
          </MotionText>
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto"
          >
            The most flexible and powerful compute platform for AI workloads. Hanzo Machines are hardware-virtualized containers, running on proprietary AI-optimized hardware, that launch instantly and scale automatically with your needs.
          </MotionText>
        </Box>

        <Grid display="grid" gap={48} marginTop={80} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={24}><Globe size={48} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>Global Reach</H3>
            <Paragraph color="var(--neutral-300)">
              Deploy in 35 regions, from Sydney to São Paulo, for sub-100ms response times and native-app feel no matter where your users are.
            </Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={24}><Server size={48} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>Instant Scaling</H3>
            <Paragraph color="var(--neutral-300)">
              Hanzo Machines start fast enough to handle HTTP requests, run only when you need them, and scale into tens of thousands of instances.
            </Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={24}><Cpu size={48} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>GPU Acceleration</H3>
            <Paragraph color="var(--neutral-300)">
              From LLMs to inferencing, hardware acceleration with the same developer experience as a simple CRUD app.
            </Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={24}><Database size={48} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>AI-Native Storage</H3>
            <Paragraph color="var(--neutral-300)">
              Vector databases, document stores, and relational databases optimized for AI workloads with automatic scaling.
            </Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={24}><Bot size={48} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>Model Management</H3>
            <Paragraph color="var(--neutral-300)">
              Streamlined deployment and management of AI models with version control, A/B testing, and monitoring built-in.
            </Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={24}><Lock size={48} color="var(--foreground)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>Enterprise Security</H3>
            <Paragraph color="var(--neutral-300)">
              SOC 2, GDPR, and HIPAA compliant infrastructure with private networking, encryption, and audit logging.
            </Paragraph>
          </MotionBox>
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          marginTop={64} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--border-strong)"
        >
          <YStack display="flex" flexDirection="column" alignItems="center" $md={{ flexDirection: "row" }}>
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={24} $md={{ marginBottom: 0, marginRight: 32 }}><Cloud size={56} color="var(--foreground)" /></Box>
            <div>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={12}>Built for AI Engineering</H3>
              <Paragraph color="var(--neutral-300)">
                Specialized infrastructure for AI workloads, with optimizations for large language models, computer vision, and other AI tasks. From prototype to production with zero re-architecture.
              </Paragraph>
            </div>
          </YStack>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          marginTop={64} textAlign="center"
        >
          <Box maxWidth="var(--container-prose)" marginHorizontal="auto" borderRadius="var(--radius-xl)" padding={32} outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to right, var(--neutral-900), var(--pure-black), var(--neutral-900))" hoverStyle={{ outlineColor: "rgb(255 255 255 / 0.3)", outlineStyle: "solid" }}>
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Enterprise Support</H3>
            <Paragraph color="var(--neutral-300)" marginBottom={32}>
              Paid support packages include a team of actual engineers (not chatbots) who themselves ship code on our platform. Emergency support and guaranteed response times available.
            </Paragraph>
            <YStack display="flex" flexDirection="column" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}>
              <Button
                color="var(--white)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
              >
                Contact Sales
              </Button>
              
              <Button
                variant="outline"
                backgroundColor="transparent" color="var(--white)" borderWidth={1} borderColor="var(--border-strong)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
              >
                Try Free Tier
              </Button>
            </YStack>
            
            <Box marginTop={24} color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
              Looking for a free, self-hosted alternative? <Anchor tap href="/platform" color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}>Check out Hanzo Platform</Anchor>
            </Box>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Features;
