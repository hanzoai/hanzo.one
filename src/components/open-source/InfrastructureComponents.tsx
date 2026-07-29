import { Anchor, Box, Button, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitBranch, GitMerge, Database, Brain, Zap } from "lucide-react";

const InfrastructureComponents = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="rgb(0 0 0 / 0.5)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Infrastructure Components
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            The building blocks of the Hanzo Platform
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {/* Vector DB */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack display="flex" alignItems="center" marginBottom={16}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Database size={32} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">Vector DB</H3>
            </XStack>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              High-performance vector database designed for AI applications with local and distributed modes.
            </Paragraph>
            <XStack display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={20}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Star size={16} /></Box>
                <span>3.4k stars</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitBranch size={16} /></Box>
                <span>410 forks</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitMerge size={16} /></Box>
                <span>Rust</span>
              </XStack>
            </XStack>
            <Button 
              size="sm" 
              width="100%" backgroundColor="var(--surface-overlay)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }}
            >
              <Anchor minHeight={44} href="https://github.com/hanzoai/vector-db" target="_blank" rel="noopener noreferrer" display="flex" justifyContent="center" width="100%">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box> View Repository
              </Anchor>
            </Button>
          </MotionBox>

          {/* LLM Runtime */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack display="flex" alignItems="center" marginBottom={16}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Brain size={32} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">LLM Runtime</H3>
            </XStack>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Optimized inference engine for running large language models locally with minimal resource usage.
            </Paragraph>
            <XStack display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={20}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Star size={16} /></Box>
                <span>4.1k stars</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitBranch size={16} /></Box>
                <span>520 forks</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitMerge size={16} /></Box>
                <span>C++/Python</span>
              </XStack>
            </XStack>
            <Button 
              size="sm" 
              width="100%" backgroundColor="var(--surface-overlay)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }}
            >
              <Anchor minHeight={44} href="https://github.com/hanzoai/llm-runtime" target="_blank" rel="noopener noreferrer" display="flex" justifyContent="center" width="100%">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box> View Repository
              </Anchor>
            </Button>
          </MotionBox>

          {/* API Gateway */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack display="flex" alignItems="center" marginBottom={16}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Zap size={32} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">API Gateway</H3>
            </XStack>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              High-performance API Gateway for routing, authentication, and rate limiting in AI applications.
            </Paragraph>
            <XStack display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={20}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Star size={16} /></Box>
                <span>2.8k stars</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitBranch size={16} /></Box>
                <span>362 forks</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitMerge size={16} /></Box>
                <span>Go</span>
              </XStack>
            </XStack>
            <Button 
              size="sm" 
              width="100%" backgroundColor="var(--surface-overlay)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }}
            >
              <Anchor minHeight={44} href="https://github.com/hanzoai/gateway" target="_blank" rel="noopener noreferrer" display="flex" justifyContent="center" width="100%">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box> View Repository
              </Anchor>
            </Button>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default InfrastructureComponents;
