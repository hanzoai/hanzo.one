import { Box, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Router, 
  Lock, 
  Gauge, 
  BarChart, 
  Terminal 
} from "lucide-react";

const CoreCapabilities = () => {
  const capabilities = [
    {
      icon: Router,
      title: "Intelligent Routing",
      description: "Advanced L4 and L7 routing with traffic splitting, blue/green deployments, canary releases, and A/B testing."
    },
    {
      icon: Gauge,
      title: "AI-Optimized Performance",
      description: "Machine learning-driven load balancing algorithms that adapt to traffic patterns for optimal resource utilization."
    },
    {
      icon: Lock,
      title: "End-to-End Security",
      description: "Built-in TLS, authentication, rate limiting, and WAF capabilities to protect your services from threats."
    },
    {
      icon: BarChart,
      title: "Real-Time Observability",
      description: "Comprehensive metrics, logging, and tracing capabilities with out-of-the-box integrations for popular platforms."
    },
    {
      icon: Server,
      title: "Global Edge Network",
      description: "Deploy your balancer instances at the edge for ultra-low latency and global availability."
    },
    {
      icon: Terminal,
      title: "GitOps Native",
      description: "Declarative configuration with version control integration for reproducible, auditable deployments."
    }
  ];

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="rgb(255 255 255 / 0.2)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Core Capabilities</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Hanzo Balancer provides a comprehensive set of features to handle the most demanding traffic management requirements.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {capabilities.map((capability, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backgroundColor="var(--surface-card-emphasis)" padding={24} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--border-strong)"
            >
              <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
                <capability.icon height={24} width={24} color="var(--foreground)" />
              </Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>{capability.title}</H3>
              <Paragraph color="var(--neutral-300)">{capability.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CoreCapabilities;
