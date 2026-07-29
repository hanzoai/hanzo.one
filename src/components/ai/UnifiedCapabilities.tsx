import { Box, ChromeText, Grid, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { 
  Code, Brain, Database, Bot, Search, FileText, Workflow, 
  BarChart3, Lock, MessageSquare, Layers, Zap
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Model Hub Access",
    description: "One API for thousands of models from top providers and the open-source community"
  },
  {
    icon: Database,
    title: "Vector Database",
    description: "Built-in vector storage with automatic indexing for semantic search and RAG applications"
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Process, chunk, and index documents in 30+ formats with automatic metadata extraction"
  },
  {
    icon: Search,
    title: "Semantic Search",
    description: "Natural language search across your knowledge base with advanced relevance tuning"
  },
  {
    icon: Bot,
    title: "Agent Framework",
    description: "Build autonomous AI agents with reasoning, planning and tool-use capabilities"
  },
  {
    icon: Code,
    title: "Code Generation",
    description: "Specialized models for code completion, refactoring, and documentation"
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    description: "Chain AI operations with built-in caching, observability, and error handling"
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Comprehensive analytics and cost tracking across all AI operations"
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Enterprise-grade security with data residency options and compliance features"
  },
  {
    icon: MessageSquare,
    title: "Chat Interfaces",
    description: "Pre-built chat components with memory management and streaming responses"
  },
  {
    icon: Layers,
    title: "Prompt Management",
    description: "Version, test, and optimize prompts across different models and environments"
  },
  {
    icon: Zap,
    title: "Optimized Edge Serving",
    description: "Global edge deployment for ultra-low latency AI inference and responses"
  }
];

const UnifiedCapabilities = () => {
  return (
    <Box render="section" paddingVertical={80} position="relative" overflow="hidden">
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Unified AI Platform
            </ChromeText>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
              A complete suite of AI capabilities accessible through a single, 
              consistent API with everything you need to build powerful AI applications
            </Paragraph>
          </MotionBox>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {capabilities.map((capability, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={24} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
            >
              <capability.icon height={32} width={32} color="var(--foreground)" marginBottom={16} />
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--white)" marginBottom={8}>{capability.title}</H3>
              <Paragraph color="var(--neutral-300)">{capability.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UnifiedCapabilities;
