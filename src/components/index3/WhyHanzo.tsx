import { Box, ChromeText, Grid, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Brain, Scale, Leaf, Shield, Code } from "lucide-react";

const WhyHanzo = () => {
  const features = [
    {
      icon: <Brain size={24} color="var(--foreground)" />,
      title: "AI-Native",
      description: "Purpose-built for AI-driven software development and deployment."
    },
    {
      icon: <Code size={24} color="var(--foreground)" />,
      title: "Autonomous",
      description: "Delegate complex tasks to intelligent AI agents."
    },
    {
      icon: <Scale size={24} color="var(--foreground)" />,
      title: "Scalable",
      description: "Grow seamlessly from startup to enterprise-level demands."
    },
    {
      icon: <Leaf size={24} color="var(--foreground)" />,
      title: "Sustainable",
      description: "Operate with 100% renewable energy at planet-scale efficiency."
    },
    {
      icon: <Shield size={24} color="var(--foreground)" />,
      title: "Open and Secure",
      description: "Fully open-source options ensuring transparency and control."
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <Box textAlign="center" marginBottom={64}>
          <ChromeText 
            as="h2" 
            fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}
            preHeading="Innovative Technology"
          >
            Why Visionary Teams Choose Hanzo
          </ChromeText>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <MotionBox
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={24} borderWidth={1} borderColor="var(--neutral-800)"
            >
              <XStack height={48} width={48} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                {feature.icon}
              </XStack>
              <ChromeText as="h3" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>
                {feature.title}
              </ChromeText>
              <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyHanzo;
