import { Box, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Scale, Network, Shield } from "lucide-react";

const PlatformVision = () => {
  const visionPoints = [
    {
      icon: <Scale size={40} color="var(--foreground)" />,
      title: "Intelligent Load Distribution",
      description: "Hanzo Balancer dynamically routes traffic based on real-time service health, load, and AI-driven insights to ensure optimal performance and resource utilization."
    },
    {
      icon: <Network size={40} color="var(--foreground)" />,
      title: "Global Edge Network",
      description: "Deploy your services globally with our planetary-scale edge network, providing ultra-low latency and instant scaling for AI workloads anywhere in the world."
    },
    {
      icon: <Shield size={40} color="var(--foreground)" />,
      title: "Always-On Security",
      description: "Built-in Web Application Firewall (WAF), DDoS protection, and AI-powered threat detection ensure your services are secured against evolving cyber threats."
    }
  ];

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Platform Vision</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Hanzo Balancer represents the next evolution in intelligent traffic management, designed for the AI-first era
            of cloud computing where millisecond performance and dynamic scaling are non-negotiable.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {visionPoints.map((point, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-lg)"
            >
              <Box marginBottom={16}>{point.icon}</Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>{point.title}</H3>
              <Paragraph color="var(--neutral-300)">{point.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PlatformVision;
