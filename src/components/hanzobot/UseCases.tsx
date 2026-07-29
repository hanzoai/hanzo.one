import { Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { HeadsetIcon, MessageCircle, BookOpen, FilePlus } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: HeadsetIcon,
      title: "AI Assistants",
      examples: ["Customer support agents", "Community moderators", "Personal assistants"]
    },
    {
      icon: MessageCircle,
      title: "Social Media Personas",
      examples: ["Automated content creators", "Brand representatives", "Influencers"]
    },
    {
      icon: BookOpen,
      title: "Knowledge Workers",
      examples: ["Research assistants", "Content analysts", "Document processors"]
    },
    {
      icon: FilePlus,
      title: "Interactive Characters",
      examples: ["Role-playing characters", "Educational tutors", "Entertainment bots"]
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Use Cases</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Hanzo Bot can be used to create a wide variety of autonomous agents
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {useCases.map((useCase, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "var(--border-strong)" }}
            >
              <Box backgroundColor="rgb(255 255 255 / 0.1)" padding={12} borderRadius="var(--radius-lg)" display="inline-block" marginBottom={16}>
                <useCase.icon height={24} width={24} color="var(--foreground)" />
              </Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={16}>{useCase.title}</H3>
              <Box render="ul" rowGap={8}>
                {useCase.examples.map((example, i) => (
                  <XStack key={i} render="li" color="var(--neutral-400)" display="flex" alignItems="center">
                    <Text width={8} height={8} backgroundColor="var(--neutral-500)" borderRadius="var(--radius-full)" marginRight={8}></Text>
                    {example}
                  </XStack>
                ))}
              </Box>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UseCases;
