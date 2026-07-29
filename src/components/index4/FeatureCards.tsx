import { ArchitecturalBox, Box, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Database } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <ArchitecturalBox
      backdropFilter="blur(16px)" WebkitBackdropFilter="blur(16px)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24} transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ borderColor: "var(--border-strong)" }}
      showCorners={true}
      cornerColor="rgba(100, 100, 100, 0.2)"
      cornerSize={20}
    >
      <XStack marginBottom={16} padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" width={40} height={40} display="flex" alignItems="center" justifyContent="center">
        {icon}
      </XStack>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={8} color="var(--white)">{title}</H3>
      <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-relaxed)">
        {description}
      </Paragraph>
    </ArchitecturalBox>
  );
};

const FeatureCards = () => {
  const features = [
    {
      icon: <Terminal size={20} color="var(--neutral-300)" />,
      title: "Developer Experience",
      description: "Intuitive CLI and dashboard designed for efficient workflow and rapid development."
    },
    {
      icon: <Code size={20} color="var(--neutral-300)" />,
      title: "Instant Deployments",
      description: "From code to production in seconds with automatic builds and zero downtime updates."
    },
    {
      icon: <Database size={20} color="var(--neutral-300)" />,
      title: "Global Infrastructure",
      description: "Scale effortlessly with our distributed network optimized for performance and reliability."
    }
  ];

  return (
    <Box render="section" maxWidth="var(--container-wide)" marginHorizontal="auto" marginBottom={128} paddingHorizontal={16}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
      >
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </MotionBox>
    </Box>
  );
};

export default FeatureCards;
