import { Box, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { 
  History, 
  BarChart, 
  MessageSquare, 
  Sparkles, 
  FileBadge,
  Database, 
  Users,
  AlertTriangle
} from "lucide-react";

const features = [
  {
    icon: <History size={28} color="var(--foreground)" />,
    title: "Tracing and Logging",
    description: "End-to-end traces for rapid debugging, detailed logs for every inference request."
  },
  {
    icon: <BarChart size={28} color="var(--foreground)" />,
    title: "Real-time Metrics",
    description: "Instant visibility into system health, latency, throughput, and cost efficiency."
  },
  {
    icon: <MessageSquare size={28} color="var(--foreground)" />,
    title: "Prompt Management",
    description: "Collaboratively version, test, and deploy prompts with low-latency retrieval."
  },
  {
    icon: <Sparkles size={28} color="var(--foreground)" />,
    title: "Playground",
    description: "Experiment rapidly with different prompts and models directly in the Hanzo interface."
  },
  {
    icon: <FileBadge size={28} color="var(--foreground)" />,
    title: "Evaluation & Feedback",
    description: "Collect, annotate, and systematically evaluate model outputs and user feedback."
  },
  {
    icon: <Database size={28} color="var(--foreground)" />,
    title: "Datasets",
    description: "Generate robust datasets from live production data to enhance model training and evaluation."
  },
  {
    icon: <Users size={28} color="var(--foreground)" />,
    title: "User Journey Analytics",
    description: "Visualize and optimize user paths, retention rates, and conversion funnels."
  },
  {
    icon: <AlertTriangle size={28} color="var(--foreground)" />,
    title: "Predictive Analytics",
    description: "AI-driven anomaly detection and predictive alerts prevent downtime and performance degradation."
  }
];

const Features = () => {
  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} position="relative" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(rgb(255 255 255 / 0.02) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.02) 1px, transparent 1px)" backgroundSize="32px 32px" backgroundColor="size:30px 30px"></Box>
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          maxWidth="var(--container-prose)" marginHorizontal="auto" textAlign="center" marginBottom={80}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Complete Observability for Your AI Stack</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
            Hanzo Observability equips your team with powerful tools for real-time monitoring, comprehensive tracing, and actionable insights.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              backgroundColor="var(--surface-card-emphasis)" padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
            >
              <Box backgroundColor="var(--surface-overlay)" padding={12} borderRadius="var(--radius-lg)" width="fit-content" marginBottom={20}>
                {feature.icon}
              </Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={12}>{feature.title}</H3>
              <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
