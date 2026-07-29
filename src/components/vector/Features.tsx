import { AnimatedHeading, AnimatedSection, AnimatedStaggerContainer, Box, ChromeText, MotionBox, Paragraph, XStack, createAnimationVariant, curves } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Database, Search, Zap, Shield, Code, BarChart } from "lucide-react";

const featureCardVariant = createAnimationVariant("popIn", {
  duration: 0.4,
  curve: curves.bouncy,
  blur: 5
});

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <MotionBox
    variants={featureCardVariant}
    backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} hoverStyle={{ borderColor: "var(--border-strong)" }}
    whileHover={{ 
      y: -5, 
      boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.1)",
      borderColor: "rgba(99, 102, 241, 0.4)"
    }}
    transition={{ duration: 0.2 }}
  >
    <XStack height={48} width={48} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
      {icon}
    </XStack>
    <ChromeText as="h3" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>
      {title}
    </ChromeText>
    <Paragraph color="var(--neutral-400)">
      {description}
    </Paragraph>
  </MotionBox>
);

const Features = () => {
  const features = [
    {
      icon: <Database size={24} color="var(--foreground)" />,
      title: "Vector Storage",
      description: "Store and index millions of vector embeddings with automatic sharding and high-throughput capabilities."
    },
    {
      icon: <Search size={24} color="var(--foreground)" />,
      title: "Similarity Search",
      description: "Ultra-fast nearest neighbor search using HNSW, IVF, and other algorithms for maximum performance."
    },
    {
      icon: <Zap size={24} color="var(--foreground)" />,
      title: "Real-time Indexing",
      description: "Index new vectors instantly with zero downtime and minimal performance impact on queries."
    },
    {
      icon: <Shield size={24} color="var(--foreground)" />,
      title: "Secure Access",
      description: "Role-based access control, end-to-end encryption, and audit logging for enterprise-grade security."
    },
    {
      icon: <Code size={24} color="var(--foreground)" />,
      title: "API & SDKs",
      description: "Well-documented REST API and client libraries for Python, JavaScript, Go, and more."
    },
    {
      icon: <BarChart size={24} color="var(--foreground)" />,
      title: "Analytics",
      description: "Monitor performance metrics, query patterns, and usage statistics through a built-in dashboard."
    }
  ];

  return (
    <AnimatedSection paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <AnimatedHeading textAlign="center" marginBottom={64}>
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Powerful Features
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Everything you need for building AI-powered vector search applications
          </Paragraph>
        </AnimatedHeading>
        
        <AnimatedStaggerContainer display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} delayFactor={0.05}>
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </AnimatedStaggerContainer>
      </Box>
    </AnimatedSection>
  );
};

export default Features;
