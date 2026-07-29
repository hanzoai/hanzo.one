import { Box, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Bot, Braces, Users, Database, FileText, Image, Code, Layers } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Platform Integration",
      description: "Clients for Discord, X (Twitter), Telegram, and many other platforms"
    },
    {
      icon: Braces,
      title: "Flexible Model Support",
      description: "Use Deepseek, Ollama, Grok, OpenAI, Anthropic, Gemini, LLama, and more"
    },
    {
      icon: Users,
      title: "Character System",
      description: "Create diverse agents using characterfiles with unique personalities"
    },
    {
      icon: Layers,
      title: "Multi-Agent Architecture",
      description: "Manage multiple unique AI personalities simultaneously"
    },
    {
      icon: Database,
      title: "Memory Management",
      description: "Easily ingest and interact with documents using RAG for better context"
    },
    {
      icon: Image,
      title: "Media Processing",
      description: "PDF, URLs, Audio, Video, Image analysis, and Conversation summarization"
    },
    {
      icon: Code,
      title: "Technical Foundation",
      description: "100% TypeScript implementation with modular, extensible architecture"
    },
    {
      icon: FileText,
      title: "Comprehensive API",
      description: "Well-documented interfaces for extending and customizing behavior"
    }
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
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Key Features</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Designed with flexibility and extensibility in mind to power the next generation of AI agents
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)", borderColor: "var(--border-strong)" }}
            >
              <feature.icon height={40} width={40} color="var(--neutral-500)" marginBottom={16} />
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>{feature.title}</H3>
              <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
