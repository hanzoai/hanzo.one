import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Rocket, HelpCircle, BookOpen, GraduationCap, Folder, Star, List, Book } from "lucide-react";

const Documentation = () => {
  const docs = [
    {
      title: "Getting Started",
      icon: Rocket,
      items: ["Quick Start", "FAQ", "CHANGELOG", "Tutorials"]
    },
    {
      title: "Core Concepts",
      icon: BookOpen,
      items: ["Overview", "Character Files", "Clients", "Agent Runtime", "Plugins", "Providers", "Actions", "Evaluators", "Database Adapters"]
    },
    {
      title: "Guides",
      icon: Book,
      items: ["Configuration", "Deployment", "Fine-tuning", "Secrets Management", "Memory Management", "WSL Setup"]
    },
    {
      title: "Advanced Topics",
      icon: GraduationCap,
      items: ["Trust Engine", "Autonomous Trading", "Hanzo in TEE", "Verified Inference"]
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Documentation</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Comprehensive guides to help you build, deploy, and manage your agents
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {docs.map((section, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}
            >
              <XStack display="flex" alignItems="center" marginBottom={16}>
                <section.icon height={20} width={20} color="var(--neutral-500)" marginRight={8} />
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)">{section.title}</H3>
              </XStack>
              
              <Box render="ul" rowGap={8}>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Anchor 
                      href="#" 
                      color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" paddingVertical={4} hoverStyle={{ color: "var(--foreground)" }}
                    >
                      <Box width={4} height={4} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-full)" marginRight={8}></Box>
                      {item}
                    </Anchor>
                  </li>
                ))}
              </Box>
            </MotionBox>
          ))}
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          marginTop={40} textAlign="center"
        >
          <Anchor 
            href="#" 
            display="inline-flex" alignItems="center" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Book size={20} /></Box>
            View Complete Documentation
          </Anchor>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Documentation;
