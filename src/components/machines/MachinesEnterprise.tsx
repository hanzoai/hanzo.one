import { Box, ChromeText, Grid, H3, Paragraph, YStack } from '@/gui'

import React from 'react';
import { Shield, Database, Server } from "lucide-react";

const EnterpriseFeature = ({ icon: Icon, title, description }) => {
  return (
    <YStack backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={24} display="flex" flexDirection="column" alignItems="center" textAlign="center">
      <Icon height={48} width={48} color="var(--foreground)" marginBottom={16} />
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>{title}</H3>
      <Paragraph color="var(--neutral-300)">
        {description}
      </Paragraph>
    </YStack>
  );
};

const MachinesEnterprise = () => {
  const features = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "SOC 2, HIPAA, and GDPR compliant infrastructure with hardware-level isolation."
    },
    {
      icon: Database,
      title: "Data Sovereignty",
      description: "Regional deployment options to meet data residency and sovereignty requirements."
    },
    {
      icon: Server,
      title: "Reserved Capacity",
      description: "Guaranteed availability with capacity reservations for critical workloads."
    }
  ];

  return (
    <Box render="section" paddingVertical={80}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" marginBottom={64}>
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
            Enterprise-Grade Infrastructure
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Built for organizations with the most demanding requirements
          </Paragraph>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <EnterpriseFeature
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

export default MachinesEnterprise;
