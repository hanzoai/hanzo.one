import { Box, Grid, H2, H3, Paragraph } from '@/gui'

import React from "react";
import { Server, Database, Shield, Zap, Layers, GitBranch } from "lucide-react";

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechCard = ({ icon, title, description }: TechCardProps) => {
  return (
    <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24} transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ borderColor: "var(--border-strong)" }}>
      <Box marginBottom={16}>
        {icon}
      </Box>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>{title}</H3>
      <Paragraph color="var(--neutral-400)">{description}</Paragraph>
    </Box>
  );
};

const TechStack = () => {
  const techItems = [
    {
      icon: <Server size={32} color="var(--foreground)" />,
      title: "Cloud-Native Architecture",
      description: "Built on serverless infrastructure that scales automatically with your business demands."
    },
    {
      icon: <Database size={32} color="var(--foreground)" />,
      title: "Real-time Data",
      description: "Access to real-time inventory, pricing, and customer data across all sales channels."
    },
    {
      icon: <Shield size={32} color="var(--foreground)" />,
      title: "Enterprise Security",
      description: "PCI-compliant infrastructure with encryption at rest and in transit for all sensitive data."
    },
    {
      icon: <Zap size={32} color="var(--foreground)" />,
      title: "High Performance",
      description: "Low latency APIs with global CDN distribution for lightning-fast experiences."
    },
    {
      icon: <Layers size={32} color="var(--foreground)" />,
      title: "Composable Architecture",
      description: "Mix and match components to create custom solutions tailored to your specific needs."
    },
    {
      icon: <GitBranch size={32} color="var(--foreground)" />,
      title: "Developer Workflow",
      description: "Full CI/CD support with staging environments and version control integration."
    }
  ];

  return (
    <Box render="section" paddingVertical={64} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))">
      <Box marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" marginBottom={48}>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">Technology Stack</H2>
          <Paragraph marginTop={16} color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Built on modern technologies for performance, security, and scalability.
          </Paragraph>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {techItems.map((item, index) => (
            <TechCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TechStack;
