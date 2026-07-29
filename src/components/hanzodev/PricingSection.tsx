import { Box, Button, Grid, H2, H3, Link, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import { ArrowRight, Check, Sparkles } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const plans = [
  {
    name: "Pro",
    highlight: false,
    description: "Hanzo Dev is included in your Pro plan. Perfect for short coding sprints in small codebases with access to both Sonnet 4.5 and Opus 4.5.",
    price: "$17",
    period: "Per month with annual subscription discount ($200 billed up front). $20 if billed monthly.",
    features: [
      "Access to Sonnet 4.5 and Opus 4.5",
      "Terminal, IDE, and web access",
      "Codebase context understanding",
      "Standard usage limits",
    ],
  },
  {
    name: "Max 5x",
    highlight: true,
    description: "Hanzo Dev is included in your Max plan. Great value for everyday use in larger codebases.",
    price: "$100",
    period: "Per person billed monthly",
    features: [
      "Everything in Pro",
      "5x more usage",
      "Large codebase support",
      "Priority model access",
      "Slack integration",
    ],
  },
  {
    name: "Max 20x",
    highlight: false,
    description: "Even more Hanzo Dev included in your Max plan. Great value for power users with the most access to Hanzo models.",
    price: "$200",
    period: "Per person billed monthly",
    features: [
      "Everything in Max 5x",
      "20x more usage",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
    ],
  },
];

const PricingSection = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)">
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <Paragraph
            display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
            style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
          >
            Pricing
          </Paragraph>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Choose your plan
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Start building with Hanzo Dev today. Scale as your needs grow.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {plans.map((plan, index) => (
            <MotionBox
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              position="relative" borderRadius="var(--radius-2xl)" padding={32} borderColor="var(--neutral-800)" borderWidth={plan.highlight ? 2 : 1} backgroundImage={plan.highlight ? "linear-gradient(to bottom, rgb(255 255 255 / 0.2), transparent)" : undefined} backgroundColor={plan.highlight ? undefined : "rgb(255 255 255 / 0.5)"}
              style={plan.highlight ? { borderColor: BRAND_COLOR } : {}}
            >
              {plan.highlight && (
                <Box
                  position="absolute" top={-12} left="50%" x="-50%" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" color="var(--foreground)"
                  style={{ backgroundColor: BRAND_COLOR }}
                >
                  Most Popular
                </Box>
              )}

              <Box marginBottom={24}>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{plan.name}</H3>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{plan.description}</Paragraph>
              </Box>

              <Box marginBottom={24}>
                <XStack display="flex" alignItems="baseline" gap={4}>
                  <Text fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" color="var(--foreground)">{plan.price}</Text>
                </XStack>
                <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginTop={8}>{plan.period}</Paragraph>
              </Box>

              <Button
                width="100%" marginBottom={24} color={plan.highlight ? "var(--foreground)" : "var(--foreground)"} backgroundColor={plan.highlight ? undefined : "rgb(255 255 255 / 0.1)"} hoverStyle={plan.highlight ? undefined : { backgroundColor: "rgb(255 255 255 / 0.2)" }}
                style={plan.highlight ? { backgroundColor: BRAND_COLOR } : {}}
                asChild
              >
                <Link minHeight={44} to="/signup">
                  Try Hanzo
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
                </Link>
              </Button>

              <Box render="ul" rowGap={12}>
                {plan.features.map((feature) => (
                  <XStack key={feature} render="li" display="flex" alignItems="flex-start" gap={12}>
                    <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><Check size={20} color="var(--neutral-500)" /></Box>
                    <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">{feature}</Text>
                  </XStack>
                ))}
              </Box>
            </MotionBox>
          ))}
        </Grid>

        <MotionText
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          textAlign="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" marginTop={32}
        >
          Extra usage limits apply. Prices shown don't include applicable tax.
        </MotionText>
      </Box>
    </Box>
  );
};

export default PricingSection;
