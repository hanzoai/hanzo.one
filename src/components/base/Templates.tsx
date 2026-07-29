import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, MessageSquare, Globe, Phone, RefreshCw, Code } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      title: "Stripe Subscriptions Starter",
      description: "Complete SaaS subscription management with Stripe integration",
      icon: CreditCard,
    },
    {
      title: "Next.js App Router with Authentication",
      description: "Secure, fast Next.js application with built-in authentication",
      icon: Globe,
    },
    {
      title: "AI Chatbot Template",
      description: "Intelligent chatbot with natural language processing capabilities",
      icon: MessageSquare,
    },
    {
      title: "LangChain and Next.js Starter",
      description: "LLM-powered application with LangChain and Next.js integration",
      icon: RefreshCw,
    },
    {
      title: "Flutter User Management",
      description: "Cross-platform Flutter app with complete user management",
      icon: Phone,
    },
    {
      title: "Expo React Native Starter",
      description: "Mobile-first React Native application with Expo framework",
      icon: Code,
    }
  ];

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--surface-card-emphasis)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16}>Ready-to-Use Templates</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Jump-start your development with production-ready templates
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {templates.map((template, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              group backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" overflow="hidden" borderWidth={1} borderColor="var(--border-strong)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
            >
              <Box height={8}></Box>
              <Box padding={24}>
                <XStack display="flex" alignItems="center" marginBottom={16}>
                  <template.icon width={24} height={24} marginRight={12} color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--white)" }} />
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">{template.title}</H3>
                </XStack>
                <Paragraph color="var(--neutral-300)">{template.description}</Paragraph>
              </Box>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Templates;
