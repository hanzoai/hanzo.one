import { Box, Grid } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import IndustryCard from "./IndustryCard";
import ViewAllButton from "./ViewAllButton";

const IndustriesSection: React.FC = () => {
  const industryCards = [
    {
      name: "Financial Services",
      description: "AI-driven solutions for risk assessment, fraud detection, and personalized banking experiences."
    },
    {
      name: "Healthcare",
      description: "Transform patient care with AI-powered diagnostics, medical research, and operational efficiency."
    },
    {
      name: "Manufacturing",
      description: "Optimize production workflows, predictive maintenance, and quality control with AI automation."
    },
    {
      name: "Retail",
      description: "Enhance customer experiences with intelligent recommendations, inventory management, and pricing."
    },
    {
      name: "Technology",
      description: "Build next-generation products and services with AI-enhanced features and capabilities."
    },
    {
      name: "Energy",
      description: "Improve sustainability and operational efficiency with AI-powered grid management and analytics."
    }
  ];

  return (
    <Box marginBottom={64}>
      <SectionHeader
        badge="Industry Solutions"
        title="AI-Powered Solutions for Every Industry"
        description="Transform your business operations with tailored AI solutions designed for your industry's unique challenges."
      />

      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginBottom={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        {industryCards.map((industry, index) => (
          <IndustryCard 
            key={index}
            name={industry.name}
            description={industry.description}
            index={index}
          />
        ))}
      </Grid>

      <ViewAllButton 
        href="/solutions"
        text="View all industries"
      />
    </Box>
  );
};

export default IndustriesSection;
