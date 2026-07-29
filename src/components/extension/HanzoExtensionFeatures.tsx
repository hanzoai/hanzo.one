import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Lock, Globe, Lightbulb, Share2, FileText, Command } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} height="100%"
    >
      <XStack height={48} width={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16} backgroundColor="var(--surface-card-emphasis)">
        <Icon height={24} width={24} color="var(--foreground)" />
      </XStack>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>{title}</H3>
      <Paragraph color="var(--neutral-300)">{description}</Paragraph>
    </MotionBox>
  );
};

const HanzoExtensionFeatures = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI Assistance",
      description: "Get intelligent assistance for any website or content you're browsing."
    },
    {
      icon: Zap,
      title: "Quick Access",
      description: "One-click access to Hanzo AI capabilities from any web page."
    },
    {
      icon: Lock,
      title: "Privacy Focused",
      description: "Your data stays private with client-side processing and optional analytics."
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Compatible with all major websites and content platforms."
    },
    {
      icon: Lightbulb,
      title: "Smart Suggestions",
      description: "Contextual recommendations based on your browsing activity."
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share content directly with your team or to your Hanzo workspace."
    },
    {
      icon: FileText,
      title: "Content Summaries",
      description: "Get instant summaries of articles, documentation, and long-form content."
    },
    {
      icon: Command,
      title: "Keyboard Shortcuts",
      description: "Power users can access all features with customizable shortcuts."
    }
  ];

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
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Powerful Features</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Enhance your browsing experience with AI-powered capabilities
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoExtensionFeatures;
