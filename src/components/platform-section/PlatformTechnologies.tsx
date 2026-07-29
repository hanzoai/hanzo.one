import { Grid, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const PlatformTechnologies: React.FC = () => {
  return (
    <MotionBox 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      marginTop={64} textAlign="center"
    >
      <Paragraph color="var(--neutral-400)" marginBottom={32} maxWidth="var(--container-prose)" marginHorizontal="auto">
        Join the global pioneers who are 100x-ing their capabilities with the world's most comprehensive AI platform.
      </Paragraph>
      
      <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" columnGap={48} rowGap={24} $sm={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
        <XStack display="flex" alignItems="center" justifyContent="center" height={32}>
          <Text backgroundImage="linear-gradient(180deg, var(--foreground), var(--neutral-500))" backgroundClip="text" color="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">OPEN SOURCE</Text>
        </XStack>
        <XStack display="flex" alignItems="center" justifyContent="center" height={32}>
          <Text backgroundImage="linear-gradient(180deg, var(--foreground), var(--neutral-500))" backgroundClip="text" color="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">INFERENCE</Text>
        </XStack>
        <XStack display="flex" alignItems="center" justifyContent="center" height={32}>
          <Text backgroundImage="linear-gradient(180deg, var(--foreground), var(--neutral-500))" backgroundClip="text" color="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">FINE-TUNING</Text>
        </XStack>
        <XStack display="flex" alignItems="center" justifyContent="center" height={32}>
          <Text backgroundImage="linear-gradient(180deg, var(--foreground), var(--neutral-500))" backgroundClip="text" color="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">PRIVATE CLOUD</Text>
        </XStack>
        <XStack display="flex" alignItems="center" justifyContent="center" height={32}>
          <Text backgroundImage="linear-gradient(180deg, var(--foreground), var(--neutral-500))" backgroundClip="text" color="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">RAG</Text>
        </XStack>
        <XStack display="flex" alignItems="center" justifyContent="center" height={32}>
          <Text backgroundImage="linear-gradient(180deg, var(--foreground), var(--neutral-500))" backgroundClip="text" color="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">MODEL DISTILLATION</Text>
        </XStack>
        <XStack display="flex" alignItems="center" justifyContent="center" height={32}>
          <Text backgroundImage="linear-gradient(180deg, var(--foreground), var(--neutral-500))" backgroundClip="text" color="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">EDGE DEPLOYMENT</Text>
        </XStack>
        <XStack display="flex" alignItems="center" justifyContent="center" height={32}>
          <Text backgroundImage="linear-gradient(180deg, var(--foreground), var(--neutral-500))" backgroundClip="text" color="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">AGENTIC WORKFLOWS</Text>
        </XStack>
      </Grid>
    </MotionBox>
  );
};

export default PlatformTechnologies;
