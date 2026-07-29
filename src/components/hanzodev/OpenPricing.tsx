import { Anchor, Box, Grid, H2, H3, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";


const BRAND_COLOR = "var(--foreground)";

const GATEWAY_FEATURES = [
  "Choose from more than 60 providers",
  "Use more than 500 models",
  "Pay the exact list price of Anthropic, OpenAI, and Google",
  "No commission or hidden fees, we make money on Teams/Enterprise",
  "Pay as you go, no subscriptions, no waste",
  "No need to wait for a daily reset, no slow pool, no rate limits!",
  "Get Hanzo Pass - Get up to 50% bonus free credits",
];

const ALTERNATIVE_FEATURES = [
  "Other Gateways (OpenRouter, Vercel, Requesty)",
  "Managed Services (AWS Bedrock, Azure OpenAI, Google AI Studio)",
  "Free, stealth, and budget models (Llama, Mistral, etc.)",
  "Fallback when you hit a quota limit with our virtual provider",
  "Bring your own API keys (BYOK) for any provider/subscription",
  "Run models locally (Ollama, LM Studio)",
];

const OpenPricing = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        {/* Section header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Open Pricing
          </H2>
          <Paragraph color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Run AI where you want and pay as you go
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gap={32} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {/* Hanzo Gateway */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32}
          >
            <XStack display="flex" alignItems="center" gap={12} marginBottom={24}>
              <Box
                paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500"
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                Recommended
              </Box>
            </XStack>

            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>
              Hanzo Gateway
            </H3>
            <Paragraph color="var(--neutral-400)" marginBottom={24}>Open & transparent</Paragraph>

            <Box render="ul" rowGap={12} marginBottom={32}>
              {GATEWAY_FEATURES.map((feature, index) => (
                <XStack key={index} render="li" display="flex" alignItems="flex-start" gap={12}>
                  <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><Check size={20} color="var(--foreground)" /></Box>
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">{feature}</Text>
                </XStack>
              ))}
            </Box>

            <Link
              to="/pricing"
              display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" width="100%" justifyContent="center" hoverStyle={{ opacity: 0.9 }}
              style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
            >
              View Pricing
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Link>
          </MotionBox>

          {/* Alternatives */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32}
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>
              Or use any alternative
            </H3>
            <Paragraph color="var(--neutral-400)" marginBottom={24}>For AI inference</Paragraph>

            <Box render="ul" rowGap={12} marginBottom={32}>
              {ALTERNATIVE_FEATURES.map((feature, index) => (
                <XStack key={index} render="li" display="flex" alignItems="flex-start" gap={12}>
                  <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><Check size={20} color="var(--neutral-500)" /></Box>
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{feature}</Text>
                </XStack>
              ))}
            </Box>

            <Anchor
              href="https://docs.hanzo.ai/byok"
              target="_blank"
              rel="noreferrer noopener"
              display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" width="100%" justifyContent="center" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            >
              Learn about BYOK
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Anchor>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default OpenPricing;
