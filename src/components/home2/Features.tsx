import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Zap, Shield, Bot } from "lucide-react";

const features = [
  {
    icon: <Terminal size={24} />,
    title: "Developer-First",
    description: "Built by developers, for developers. Simple APIs with complete flexibility."
  },
  {
    icon: <Zap size={24} />,
    title: "Lightning Fast",
    description: "Optimized inference with custom routing and advanced caching."
  },
  {
    icon: <Shield size={24} />,
    title: "Enterprise Ready",
    description: "SOC 2, GDPR, and HIPAA compliant with 99.9% uptime SLA."
  },
  {
    icon: <Bot size={24} />,
    title: "Model Flexibility",
    description: "Use any model from OpenAI, Anthropic, or bring your own models."
  }
];

const Features = () => {
  return (
    <Box render="section" paddingVertical={80} position="relative">
      <Box marginHorizontal="auto" paddingHorizontal={16}>
        <Box textAlign="center" marginBottom={64}>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Everything You Need for AI Engineering
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            A complete platform to build, deploy, and scale AI applications
          </Paragraph>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
            >
              <XStack height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                {feature.icon}
              </XStack>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>{feature.title}</H3>
              <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
        
        <Box marginTop={64} backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} maxWidth="64rem" marginHorizontal="auto">
          <YStack display="flex" flexDirection="column" alignItems="center" $md={{ flexDirection: "row" }}>
            <Box flex={1} marginBottom={32} $md={{ marginBottom: 0, marginRight: 32 }}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Simple API. Powerful Results.</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Just a few lines of code to integrate state-of-the-art AI into your applications.
              </Paragraph>
            </Box>
            <Box flex={1} backgroundColor="var(--neutral-950)" padding={16} borderRadius="var(--radius-lg)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" overflow="auto">
              <Box render="pre" color="var(--neutral-300)">
                <code>
{`import { HanzoAI } from '@hanzo/ai';

const ai = new HanzoAI({
  apiKey: process.env.HANZO_API_KEY
});

const response = await ai.complete({
  model: 'gpt-4',
  prompt: 'Explain quantum computing',
  temperature: 0.7
});`}
                </code>
              </Box>
            </Box>
          </YStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
