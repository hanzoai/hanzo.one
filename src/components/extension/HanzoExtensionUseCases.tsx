import { Box, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { FileText, Search, Code, ShoppingCart } from "lucide-react";

const UseCaseCard = ({ icon: Icon, title, description }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32}
    >
      <Icon height={40} width={40} color="var(--foreground)" marginBottom={16} />
      <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8}>{title}</H3>
      <Paragraph color="var(--neutral-300)">{description}</Paragraph>
    </MotionBox>
  );
};

const HanzoExtensionUseCases = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Use Cases</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Discover how the Hanzo Extension can enhance your daily workflows
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <UseCaseCard 
            icon={FileText}
            title="Content Research"
            description="Quickly summarize articles, extract key insights, and save information to your knowledge base while browsing."
          />
          
          <UseCaseCard 
            icon={Search}
            title="Enhanced Web Search"
            description="Get more relevant search results with AI-powered refinements and suggestions based on your context."
          />
          
          <UseCaseCard 
            icon={Code}
            title="Developer Assistance"
            description="Get code explanations, documentation lookups, and debugging suggestions while reviewing technical content."
          />
          
          <UseCaseCard 
            icon={ShoppingCart}
            title="Shopping Assistant"
            description="Compare products, find better deals, and get instant reviews while shopping online."
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoExtensionUseCases;
