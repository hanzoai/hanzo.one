import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Code } from "lucide-react";

interface PhilosophyItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const PhilosophyItem: React.FC<PhilosophyItemProps> = ({ icon, title, description, delay }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      display="flex" flexDirection="column" alignItems="center" textAlign="center"
    >
      <XStack width={64} height={64} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
        {icon}
      </XStack>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8} color="var(--white)">{title}</H3>
      <Paragraph color="var(--neutral-300)">{description}</Paragraph>
    </MotionBox>
  );
};

const PhilosophySection: React.FC = () => {
  const items = [
    {
      icon: <Shield size={32} color="var(--foreground)" />,
      title: "Developer-First",
      description: "Built by developers for developers, with a focus on exceptional DX and intuitive APIs."
    },
    {
      icon: <Zap size={32} color="var(--foreground)" />,
      title: "Open Source",
      description: "Complete transparency with our core tools open source and free forever."
    },
    {
      icon: <Code size={32} color="var(--foreground)" />,
      title: "Complete Control",
      description: "No black boxes. You own your data, models, and infrastructure with full control."
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Box textAlign="center" marginBottom={64}>
          <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
            Our Philosophy
          </Box>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Building AI, the Right Way
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            We believe AI should be powerful, transparent, and fully under your control.
            Our platform is built with these principles at its core.
          </Paragraph>
        </Box>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={48} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {items.map((item, index) => (
            <PhilosophyItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PhilosophySection;
