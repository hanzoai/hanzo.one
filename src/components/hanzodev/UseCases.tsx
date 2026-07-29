import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, Text } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Code2, TestTube, FileCheck, Bug, Workflow } from "lucide-react";

const UseCases = () => {
  const useCases = [
    { name: "Design & Research", icon: <Paintbrush size={24} /> },
    { name: "Everyday Coding", icon: <Code2 size={24} /> },
    { name: "Automated Testing", icon: <TestTube size={24} /> },
    { name: "Automated Code Reviews", icon: <FileCheck size={24} /> },
    { name: "Bug-fixing", icon: <Bug size={24} /> },
    { name: "Self-healing CI/CD", icon: <Workflow size={24} /> }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--neutral-900), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox 
          textAlign="center" marginBottom={64}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Use cases</H2>
          <Box maxWidth="var(--container-prose)" marginHorizontal="auto">
            <Paragraph fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={8} color="transparent" backgroundClip="text" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))">
              The Ultimate Developer Experience, Powered by AI
            </Paragraph>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)">
              Hanzo is redefining the developer experience with AI-powered assistance for design, research, coding, reviews, debugging, and CI/CD. Let AI handle the mundane tasks and unlock your full potential.
            </Paragraph>
          </Box>
        </MotionBox>

        <MotionBox 
          display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} marginBottom={64} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {useCases.map((useCase, index) => (
            <MotionBox 
              key={index}
              flexDirection="row" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={16} display="flex" alignItems="center" gap={12} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
              variants={item}
            >
              <Box padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" color="var(--foreground)">
                {useCase.icon}
              </Box>
              <Text fontWeight="500">{useCase.name}</Text>
            </MotionBox>
          ))}
        </MotionBox>

        <Grid display="grid" gap={48} marginVertical={64} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox 
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={24}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={16}>Integrated AI Across the Software Development Lifecycle.</H3>
            <Paragraph color="var(--neutral-300)">
              Reduce cycle times with the help of AI workflows throughout the entire software development lifecycle. Hanzo's AI Agents support teams at every stage from coding and testing, analyzing production errors and troubleshooting CI/CD pipelines.
            </Paragraph>
          </MotionBox>

          <MotionBox 
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={24}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={16}>One AI Platform for All Dev Tasks.</H3>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Included in one subscription are dozens of built-in AI agentic workflows, carefully planned to perform developer tasks for you. Full-stack engineer? Of course. Bug fixes? Sure. Adding tests to existing code? No problem. UX/UI Improvements? Included. Generating user docs? That too.
            </Paragraph>
            <Box textAlign="right">
              <Anchor tap href="#learn-more" color="var(--foreground)" display="inline-flex" alignItems="center" hoverStyle={{ color: "var(--foreground)" }}>
                Learn more <Text marginLeft={4}>→</Text>
              </Anchor>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default UseCases;
