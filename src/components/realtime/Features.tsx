import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Activity, Zap, Globe, Users, Clock, Lock, Workflow, Shield } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))"
    >
      <XStack height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
        <Icon height={24} width={24} color="var(--foreground)" />
      </XStack>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>{title}</H3>
      <Paragraph color="var(--neutral-400)">{description}</Paragraph>
    </MotionBox>
  );
};

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: "WebSocket Messaging",
      description: "Reliable, low-latency WebSocket connections with automatic reconnection and health monitoring."
    },
    {
      icon: Workflow,
      title: "Pub/Sub Channels",
      description: "Create and manage channels for organized communication between clients and services."
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Deploy to 200+ edge locations worldwide for single-digit millisecond latency."
    },
    {
      icon: Users,
      title: "Presence Detection",
      description: "Track user online status and activity with built-in presence management."
    },
    {
      icon: Clock,
      title: "Event History",
      description: "Configurable event history allows clients to catch up on missed updates."
    },
    {
      icon: Zap,
      title: "Message Filtering",
      description: "Advanced filtering to ensure clients only receive relevant data updates."
    },
    {
      icon: Lock,
      title: "Authentication",
      description: "Secure communication with JWT authentication and channel-level access control."
    },
    {
      icon: Shield,
      title: "Rate Limiting",
      description: "Protect your services with configurable rate limiting and abuse prevention."
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Key Features
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Everything you need to build scalable real-time applications
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
