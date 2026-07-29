import { Box, Button, Grid, H2, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const WebinarCard = ({ title, partner, image, logos = [] }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      
      group backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" overflow="hidden" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
    >
      <Box height={192} backgroundColor="var(--neutral-800)" position="relative">
        <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center" color="var(--neutral-500)">
          {title}
        </XStack>
      </Box>
      <Box padding={24}>
        <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={16}>
          <Box fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600">{title}</Box>
          <Box color="var(--neutral-500)">{partner}</Box>
        </XStack>
        <Button width="100%" backgroundColor="var(--neutral-800)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
          Learn More
        </Button>
      </Box>
    </MotionBox>
  );
};

const HanzoAppWebinars = () => {
  const webinars = [
    {
      title: "How to Build No-Code SQL Chatbots using Hanzo AI",
      partner: "SingleStore",
      logos: ["SingleStore"],
      image: "/webinar-placeholder-1.jpg" // Added image property
    },
    {
      title: "LlamaIndex Webinar: Build No-Code RAG with Hanzo AI",
      partner: "Milvus",
      logos: ["Milvus"],
      image: "/webinar-placeholder-2.jpg" // Added image property
    },
    {
      title: "How to Build a NoCode AWS Bedrock LLM App on Hanzo AI",
      partner: "AWS",
      logos: ["SingleStore", "AWS"],
      image: "/webinar-placeholder-3.jpg" // Added image property
    },
    {
      title: "Drag and Drop LLMs: Simplifying RAG with Hanzo AI and Milvus",
      partner: "Milvus",
      logos: ["Milvus"],
      image: "/webinar-placeholder-4.jpg" // Added image property
    },
    {
      title: "LangChain Weekly Webinar - Low-Code/No-Code LLM",
      partner: "Langchain",
      logos: ["Langchain"],
      image: "/webinar-placeholder-5.jpg" // Added image property
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Webinars</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
            Learn how to use Hanzo AI from different webinar series with our partners
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {webinars.map((webinar, index) => (
            <WebinarCard 
              key={index}
              title={webinar.title}
              partner={webinar.partner}
              logos={webinar.logos}
              image={webinar.image}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoAppWebinars;
