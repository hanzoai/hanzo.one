import { Box, Grid, H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const Integrations = () => {
  const tools = [
    "LangChain", "LlamaIndex", "OpenAI", "HuggingFace", 
    "DSPy", "Haystack", "Ragas", "MemGPT", 
    "ChromaDB", "Pinecone", "Weaviate", "Qdrant"
  ];
  
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Plays Nicely With Your Favorite AI Dev Tools
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Seamlessly integrate Hanzo Vector with popular AI frameworks, libraries, and platforms.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}>
          {tools.map((tool, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              group backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} display="flex" flexDirection="column" alignItems="center" justifyContent="center" aspectRatio={1} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
            >
              <Box fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>
                {tool}
              </Box>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Integrations;
