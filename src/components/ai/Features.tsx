import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Code, Server, Database, Shield, Sparkles, Cpu, Microscope, Activity, Scale } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: Brain,
      title: 'AI Model Hub',
      description: 'Access a catalog of state-of-the-art foundation models from leading providers and Hanzo\'s specialized models.'
    },
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Create autonomous agents that can reason, plan, and execute complex tasks with minimal human intervention.'
    },
    {
      icon: Cpu,
      title: 'Optimized Runtime',
      description: 'High-performance inference with automatic batching, caching, and efficient resource utilization.'
    },
    {
      icon: Database,
      title: 'Vector Database',
      description: 'Built-in vector storage for embeddings with automatic indexing and retrieval optimization.'
    },
    {
      icon: Microscope,
      title: 'Evaluation Suite',
      description: 'Comprehensive tools for testing, evaluating, and benchmarking AI models and applications.'
    },
    {
      icon: Activity,
      title: 'AI Observability',
      description: 'Full visibility into AI system behavior with detailed metrics, logging, and performance analytics.'
    },
    {
      icon: Shield,
      title: 'AI Safety & Guardrails',
      description: 'Advanced content filtering, privacy controls, and ethical guardrails for responsible AI deployment.'
    },
    {
      icon: Scale,
      title: 'Enterprise Scale',
      description: 'Built for high-scale production workloads with auto-scaling, high availability, and global distribution.'
    },
    {
      icon: Code,
      title: 'Developer SDK',
      description: 'Intuitive libraries for Python, TypeScript, and other languages with comprehensive documentation.'
    },
    {
      icon: Server,
      title: 'Model Serving',
      description: 'Simplified deployment and management of custom models with automatic versioning and A/B testing.'
    },
    {
      icon: Sparkles,
      title: 'Fine-tuning',
      description: 'User-friendly tools for customizing foundation models to your specific use cases and data.'
    }
  ];

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--neutral-950)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      {/* Background gradient */}
      <Box position="absolute" bottom={0} left="50%" x="-50%" width="75%" height="50%" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={80}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Complete AI Engineering Toolkit
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
              Everything you need to build, deploy, and manage production-grade AI applications
            </Paragraph>
          </MotionBox>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {featuresList.map((feature, index) => (
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
      </Box>
    </Box>
  );
};

export default Features;
