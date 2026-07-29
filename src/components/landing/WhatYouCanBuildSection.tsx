import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { Bot, Globe, Link2, ArrowRight } from "lucide-react";

interface BuildCard {
  icon: React.ElementType;
  title: string;
  sentence: string;
  bullets: string[];
  linkText: string;
  linkHref: string;
}

const buildCards: BuildCard[] = [
  {
    icon: Bot,
    title: "AI Apps",
    sentence: "Build intelligent applications with cutting-edge AI.",
    bullets: ["RAG APIs", "Agent backends", "Multimodal pipelines"],
    linkText: "View templates",
    linkHref: "/templates?category=ai",
  },
  {
    icon: Globe,
    title: "Modern Web Apps",
    sentence: "Ship full-stack apps with auth, data, and realtime.",
    bullets: ["Authentication + data", "Realtime subscriptions", "Edge deployment"],
    linkText: "View templates",
    linkHref: "/templates?category=web",
  },
  {
    icon: Link2,
    title: "Web3 Apps",
    sentence: "Build decentralized apps with identity and proofs.",
    bullets: ["Wallet integration", "Chain deployments", "Indexing + proofs"],
    linkText: "View templates",
    linkHref: "/templates?category=web3",
  },
];

const WhatYouCanBuildSection: React.FC = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        {/* Section Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            What you can build
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Templates and primitives for any stack.
          </Paragraph>
        </MotionBox>

        {/* Cards Grid */}
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {buildCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <MotionBox
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                group
              >
                <Box height="100%" padding={32} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "var(--surface-card)", borderColor: "var(--neutral-700)" }}>
                  {/* Icon */}
                  <XStack
                    width={48} height={48} borderRadius="var(--radius-xl)" display="flex" alignItems="center" justifyContent="center" marginBottom={24}
                    style={{ backgroundColor: "rgba(253, 68, 68, 0.1)" }}
                  >
                    <Icon width={24} height={24} style={{ color: "var(--foreground)" }} />
                  </XStack>

                  {/* Title */}
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)" marginBottom={12}>
                    {card.title}
                  </H3>

                  {/* Sentence */}
                  <Paragraph color="var(--neutral-400)" marginBottom={24} lineHeight="var(--leading-relaxed)">
                    {card.sentence}
                  </Paragraph>

                  {/* Bullets */}
                  <Box render="ul" rowGap={10} marginBottom={32}>
                    {card.bullets.map((bullet) => (
                      <XStack key={bullet} render="li" display="flex" alignItems="center" gap={12} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                        <Box
                          width={6} height={6} borderRadius="var(--radius-full)" flexShrink={0}
                          style={{ backgroundColor: "var(--neutral-800)" }}
                        />
                        <Text color="var(--neutral-300)">{bullet}</Text>
                      </XStack>
                    ))}
                  </Box>

                  {/* Link */}
                  <Anchor
                    href={card.linkHref}
                    display="inline-flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ opacity: 0.8 }}
                    style={{ color: "var(--foreground)" }}
                  >
                    {card.linkText}
                    <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ x: 4 }}><ArrowRight size={16} /></Box>
                  </Anchor>
                </Box>
              </MotionBox>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhatYouCanBuildSection;
