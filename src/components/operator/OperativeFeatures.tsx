import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, Globe, Zap, ShieldCheck, Compass, Database, Cpu, Cloud } from "lucide-react";

const OperativeFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Compatible with Mac OS, Windows, and Linux with X server installed."
    },
    {
      icon: Zap,
      title: "Self-Operating",
      description: "Models can view the screen and decide on mouse and keyboard actions autonomously."
    },
    {
      icon: ShieldCheck,
      title: "Secure Framework",
      description: "Open-source implementation with transparent security practices."
    },
    {
      icon: Compass,
      title: "Objective-Driven",
      description: "Complete complex tasks based on natural language objectives."
    },
    {
      icon: Database,
      title: "OCR Integration",
      description: "Optional OCR mode provides models with clickable element maps for enhanced accuracy."
    },
    {
      icon: Cpu,
      title: "Model Flexibility",
      description: "Compatible with various multimodal models including GPT-4o, Claude 3, Gemini Pro Vision."
    }
  ];

  return (
    <Box render="section" paddingVertical={96} backgroundColor="var(--neutral-950)" position="relative" overflow="hidden">
      {/* Background gradient */}
      <Box position="absolute" bottom={0} left="50%" x="-50%" width="75%" height="50%" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Key Capabilities
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
              Hanzo Operative gives AI models the ability to interact with computers
              the same way humans do
            </Paragraph>
          </MotionBox>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
            >
              <XStack height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                <feature.icon height={24} width={24} color="var(--foreground)" />
              </XStack>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>{feature.title}</H3>
              <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>

        <XStack marginTop={64} display="flex" justifyContent="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            flexDirection="row" display="flex" alignItems="center" columnGap={12} backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-full)" paddingHorizontal={24} paddingVertical={12}
          >
            <Github size={20} color="var(--neutral-400)" />
            <Text color="var(--neutral-300)">Open Source on</Text>
            <Anchor tap href="https://github.com/hanzo-ai/operative" color="var(--white)" fontWeight="600" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>GitHub</Anchor>
          </MotionBox>
        </XStack>
      </Box>
    </Box>
  );
};

export default OperativeFeatures;
