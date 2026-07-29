import { Box, Grid, H3, Paragraph } from '@/gui'
import React from "react";
import ModelCategoryCard from "./ModelCategoryCard";

interface ModelData {
  name: string;
  provider: string;
  features: string[];
  description?: string;
}

interface ModelCategoryProps {
  category: {
    name: string;
    description: string;
    models: ModelData[];
  };
  categoryIndex: number;
}

const ModelCategory = ({ category, categoryIndex }: ModelCategoryProps) => {
  return (
    <Box key={categoryIndex} marginBottom={80}>
      <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={16}>{category.name}</H3>
      <Paragraph color="var(--neutral-300)" marginBottom={32}>{category.description}</Paragraph>
      
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        {category.models.map((model, modelIndex) => (
          <ModelCategoryCard 
            key={modelIndex} 
            model={model} 
            modelIndex={modelIndex} 
            categoryIndex={categoryIndex}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ModelCategory;