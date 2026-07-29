import { Box as GuiBox, Button, Grid, H3, H4, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Brain, MessageSquare, Box, Database } from "lucide-react";

const AdditionalFeatures = () => {
  return (
    <GuiBox borderRadius="var(--radius-2xl)" padding={32} borderWidth={1} borderColor="var(--border-strong)" marginTop={48} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
      <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={16}>Single API for Everything</H3>
      <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" marginBottom={32}>
        Our unified API provides seamless access to all AI capabilities through a consistent, developer-friendly interface
      </Paragraph>
      
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
        <GuiBox backgroundColor="rgb(0 0 0 / 0.3)" padding={16} borderRadius="var(--radius-lg)">
          <GuiBox render="span" display="inline-flex" alignItems="center" marginBottom={12}><Brain size={32} color="var(--foreground)" /></GuiBox>
          <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Model Routing</H4>
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
            Smart routing to optimal models based on task, cost, and performance requirements
          </Paragraph>
        </GuiBox>
        
        <GuiBox backgroundColor="rgb(0 0 0 / 0.3)" padding={16} borderRadius="var(--radius-lg)">
          <GuiBox render="span" display="inline-flex" alignItems="center" marginBottom={12}><MessageSquare size={32} color="var(--foreground)" /></GuiBox>
          <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Document Processing</H4>
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
            Built-in document parsing, chunking, and semantic analysis capabilities
          </Paragraph>
        </GuiBox>
        
        <GuiBox backgroundColor="rgb(0 0 0 / 0.3)" padding={16} borderRadius="var(--radius-lg)">
          <GuiBox render="span" display="inline-flex" alignItems="center" marginBottom={12}><Box size={32} color="var(--foreground)" /></GuiBox>
          <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Vector Search</H4>
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
            Integrated vector database for semantic search and retrieval augmented generation
          </Paragraph>
        </GuiBox>
        
        <GuiBox backgroundColor="rgb(0 0 0 / 0.3)" padding={16} borderRadius="var(--radius-lg)">
          <GuiBox render="span" display="inline-flex" alignItems="center" marginBottom={12}><Database size={32} color="var(--foreground)" /></GuiBox>
          <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Knowledge Base</H4>
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
            Create, manage and query custom knowledge bases for your AI applications
          </Paragraph>
        </GuiBox>
      </Grid>

      <GuiBox marginTop={32} textAlign="center">
        <Button backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={24} paddingVertical={8} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
          Explore the API
        </Button>
      </GuiBox>
    </GuiBox>
  );
};

export default AdditionalFeatures;
