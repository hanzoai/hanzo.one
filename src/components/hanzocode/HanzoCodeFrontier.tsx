import { Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Brain, FlaskConical, Sparkles } from "lucide-react";

const HanzoCodeFrontier = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} alignItems="center" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
          >
            <YStack padding={32} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" minHeight={320}>
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={24}><Brain size={64} color="var(--foreground)" /></Box>
              <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" textAlign="center" marginBottom={16}>
                Frontier Intelligence
              </Box>
              <Box color="var(--neutral-300)" textAlign="center">
                Custom-trained models specifically optimized for software development
              </Box>
              <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} marginTop={32} width="100%">
                <XStack backgroundColor="rgb(0 0 0 / 0.3)" borderRadius="var(--radius-lg)" padding={16} display="flex" alignItems="center">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Cpu size={20} color="var(--foreground)" /></Box>
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Specialized Code Models</Text>
                </XStack>
                <XStack backgroundColor="rgb(0 0 0 / 0.3)" borderRadius="var(--radius-lg)" padding={16} display="flex" alignItems="center">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><FlaskConical size={20} color="var(--foreground)" /></Box>
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Research-Grade AI</Text>
                </XStack>
                <XStack backgroundColor="rgb(0 0 0 / 0.3)" borderRadius="var(--radius-lg)" padding={16} display="flex" alignItems="center">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Sparkles size={20} color="var(--foreground)" /></Box>
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Fine-tuned Reasoning</Text>
                </XStack>
                <XStack backgroundColor="rgb(0 0 0 / 0.3)" borderRadius="var(--radius-lg)" padding={16} display="flex" alignItems="center">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Brain size={20} color="var(--foreground)" /></Box>
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Continuous Learning</Text>
                </XStack>
              </Grid>
            </YStack>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24}>Beyond Standard AI Models</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
              Hanzo Code leverages custom-built AI models designed specifically for software development, not just repurposed general-purpose models.
            </Paragraph>
            
            <Box rowGap={24}>
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8} color="var(--foreground)">Multi-Model Architecture</H3>
                <Paragraph color="var(--neutral-300)">
                  Specialized models for different tasks: code generation, refactoring, debugging, testing, and optimization.
                </Paragraph>
              </div>
              
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8} color="var(--foreground)">Coding-Specific Training</H3>
                <Paragraph color="var(--neutral-300)">
                  Trained on billions of lines of code across all major languages, frameworks, and architectural patterns.
                </Paragraph>
              </div>
              
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8} color="var(--foreground)">Adaptive Intelligence</H3>
                <Paragraph color="var(--neutral-300)">
                  Learns from your codebase and coding style, becoming more personalized and effective over time.
                </Paragraph>
              </div>
              
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8} color="var(--foreground)">Edge Computing</H3>
                <Paragraph color="var(--neutral-300)">
                  Powerful models that can run locally for privacy, or leverage cloud infrastructure for more complex tasks.
                </Paragraph>
              </div>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoCodeFrontier;
