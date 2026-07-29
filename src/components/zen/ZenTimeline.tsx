import { Box, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2013",
    title: "The Spark",
    description: "Launched SKULLY AR-1 helmet, the most successful campaign in Indiegogo's history."
  },
  {
    year: "2017",
    title: "Foundation",
    description: "Hanzo AI established with a vision of democratizing access to artificial intelligence."
  },
  {
    year: "2019",
    title: "First Platform",
    description: "Released the first version of Hanzo Cloud, focusing on simplicity and developer experience."
  },
  {
    year: "2021",
    title: "Open Source",
    description: "Launched Hanzo DX, our open-source, self-hostable platform for AI application development."
  },
  {
    year: "2023",
    title: "Global Scale",
    description: "Reached planetary scale with infrastructure spanning 65+ regions and 200+ edge locations."
  },
  {
    year: "2025",
    title: "Today",
    description: "Leading the AI revolution with our comprehensive suite of products and services."
  }
];

const ZenTimeline: React.FC = () => {
  return (
    <Box position="relative" paddingVertical={64}>
      <Box position="absolute" left="50%" height="100%" width={2} x="-50%" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0), rgb(255 255 255 / 0.08), rgb(255 255 255 / 0))"></Box>
      
      <Box maxWidth="64rem" marginHorizontal="auto">
        {timelineEvents.map((event, index) => (
          <MotionBox
            key={event.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            flexDirection="row" position="relative" marginBottom={64} display="flex" justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
          >
            <Box position="absolute" left="50%" top={20} width={20} height={20} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" x="-50%" zIndex={10}></Box>
            
            <Box width="41.666667%" paddingRight={index % 2 === 0 ? 48 : undefined} paddingLeft={index % 2 === 0 ? undefined : 48}>
              <Box backgroundColor="rgb(0 0 0 / 0.3)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={24}>
                <Box color="var(--foreground)" fontWeight="700" marginBottom={8}>{event.year}</Box>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--white)" fontWeight="700" marginBottom={8}>{event.title}</H3>
                <Paragraph color="var(--neutral-300)">{event.description}</Paragraph>
              </Box>
            </Box>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};

export default ZenTimeline;
