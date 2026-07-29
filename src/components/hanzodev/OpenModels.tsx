import { Anchor, Box, Grid, H2, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const SUPPORTED_PROVIDERS = [
  "OpenAI",
  "Anthropic",
  "Google",
  "Mistral",
  "Cohere",
  "Together AI",
  "Groq",
  "Fireworks",
  "Ollama",
  "LM Studio",
];

const OpenModels = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <Grid display="grid" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {/* Left: Text content */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Open Models
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
              Switch between 500+ custom, local, and frontier LLMs.
            </Paragraph>
            <Paragraph color="var(--neutral-400)" marginBottom={32}>
              Hanzo is the best gateway to discover and compare models. Use new
              models the day they come out and try stealth models for free.
            </Paragraph>

            <XStack display="flex" flexWrap="wrap" gap={16}>
              <Anchor
                href="https://hanzo.ai/leaderboard"
                target="_blank"
                rel="noreferrer noopener"
                display="inline-flex" alignItems="center" paddingHorizontal={20} paddingVertical={10} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                View leaderboard
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Anchor>
              <Anchor tap
                href="https://hanzo.ai/models/compare"
                target="_blank"
                rel="noreferrer noopener"
                display="inline-flex" alignItems="center" paddingHorizontal={20} paddingVertical={10} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                Compare models
              </Anchor>
            </XStack>
          </MotionBox>

          {/* Right: Providers */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" overflow="hidden"
          >
            <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)">
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">
                Supported Providers
              </Text>
            </Box>

            <Box padding={16}>
              <XStack display="flex" flexWrap="wrap" gap={8}>
                {SUPPORTED_PROVIDERS.map((provider, index) => (
                  <MotionText
                    key={provider}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    paddingHorizontal={12} paddingVertical={6} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)"
                  >
                    {provider}
                  </MotionText>
                ))}
                <Text paddingHorizontal={12} paddingVertical={6} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
                  + many more
                </Text>
              </XStack>
            </Box>

            <Box padding={16} borderTopWidth={1} borderColor="var(--neutral-800)" textAlign="center">
              <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">
                Bring your own API keys or use Hanzo Gateway
              </Text>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default OpenModels;
