import { Box, ChromeText, Grid, H3, MotionBox, Paragraph } from '@/gui'

import React from 'react';
import { motion } from "framer-motion";
import { Cpu, Server, Zap, Network, BarChart, Globe } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <MotionBox 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
    >
      <Icon height={40} width={40} color="var(--foreground)" marginBottom={16} />
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>{title}</H3>
      <Paragraph color="var(--neutral-300)">
        {description}
      </Paragraph>
    </MotionBox>
  );
};

const MachinesFeatures = () => {
  const features = [
    {
      icon: Cpu,
      title: "High-Performance GPUs",
      description: "Access to NVIDIA H100, A100, and L4 GPUs for AI training and inference workloads.",
      delay: 0
    },
    {
      icon: Server,
      title: "Flexible Configurations",
      description: "Custom CPU, memory, and storage configurations to match your specific workload requirements.",
      delay: 0.1
    },
    {
      icon: Zap,
      title: "Instant Provisioning",
      description: "Launch machines in seconds with pre-configured environments for ML frameworks and data science.",
      delay: 0.2
    },
    {
      icon: Network,
      title: "High-Speed Networking",
      description: "Up to 100 Gbps networking with ultra-low latency between machines for distributed workloads.",
      delay: 0.3
    },
    {
      icon: BarChart,
      title: "Comprehensive Monitoring",
      description: "Real-time metrics and performance monitoring for all machine resources and workloads.",
      delay: 0.4
    },
    {
      icon: Globe,
      title: "Global Availability",
      description: "Deploy machines in 20+ regions worldwide with automatic failover and redundancy.",
      delay: 0.5
    }
  ];

  return (
    <Box render="section" paddingVertical={80} position="relative">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" marginBottom={64}>
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
            Key Features & Capabilities
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Purpose-built infrastructure for the most demanding AI and compute workloads
          </Paragraph>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MachinesFeatures;
