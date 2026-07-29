import { Box, ChromeText, Grid as GuiGrid, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Zap, Scale, Shield, Grid, DatabaseIcon, Activity } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay: number;
}) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32}
  >
    <XStack height={48} width={48} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={24}>
      <Icon height={24} width={24} color="var(--foreground)" />
    </XStack>
    <ChromeText as="h3" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>
      {title}
    </ChromeText>
    <Paragraph color="var(--neutral-400)">
      {description}
    </Paragraph>
  </MotionBox>
);

const KeyFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Blazing Fast",
      description: "Processes analytical queries faster than traditional row and column oriented systems."
    },
    {
      icon: Scale,
      title: "Linearly Scalable",
      description: "Scales efficiently with hardware resources horizontally and vertically to petabyte scale."
    },
    {
      icon: Shield,
      title: "Highly Reliable",
      description: "Supports asyncronous replication and can be deployed across multiple datacenters."
    },
    {
      icon: Grid,
      title: "Flexible Architecture",
      description: "Supports shared-nothing clusters as well as separation of storage and compute."
    },
    {
      icon: DatabaseIcon,
      title: "Feature-rich",
      description: "The most complete analytical datastore with support for joins, federated queries, and more."
    },
    {
      icon: Activity,
      title: "Easy to Use",
      description: "Simplifies writing queries with a user-friendly SQL dialect, optimized for common analytical use cases."
    }
  ];

  return (
    <Box id="features" render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <Box textAlign="center" marginBottom={80}>
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Key Features
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            A powerful datastore built for modern analytical applications
          </Paragraph>
        </Box>
        
        <GuiGrid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * (index + 1)}
            />
          ))}
        </GuiGrid>
      </Box>
    </Box>
  );
};

export default KeyFeatures;
