import { Box, Grid, H2, H3, Link, MotionBox, Paragraph, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import { Bot, Cloud, Rocket, Database, ArrowRight } from "lucide-react";

const entryPoints = [
  {
    icon: Bot,
    title: "Hanzo Dev",
    tagline: "AI engineer",
    description: "Ship code with an AI agent that respects your policies.",
    link: "/products/apps/agent",
  },
  {
    icon: Cloud,
    title: "Hanzo Cloud",
    tagline: "UI + control plane",
    description: "Manage your entire stack from one dashboard.",
    link: "/products/apps/cloud",
  },
  {
    icon: Rocket,
    title: "Deploy Anywhere",
    tagline: "k8s / cloud / edge",
    description: "One command to deploy to any target.",
    link: "/products/platform/platform",
  },
  {
    icon: Database,
    title: "Data & Vector",
    tagline: "RAG-ready",
    description: "SQL, Vector, KV—everything for AI data.",
    link: "/products/data",
  },
];

const CuratedEntryPointsSection = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" position="relative" overflow="hidden" $md={{ paddingHorizontal: 32 }}>
      {/* Background grid */}
      <Box
        position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.02}
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Start building
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)">
            Four paths into the platform.
          </Paragraph>
        </MotionBox>

        {/* Entry Points Grid */}
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {entryPoints.map((entry, index) => {
            const Icon = entry.icon;
            return (
              <MotionBox
                key={entry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={entry.link} group display="block" height="100%">
                  <MotionBox
                    height="100%" padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" position="relative" overflow="hidden" hoverStyle={{ borderColor: "var(--border-strong)" }}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 0 40px -10px rgba(253, 68, 68, 0.3)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Icon */}
                    <XStack
                      width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
                      style={{ backgroundColor: "rgba(253, 68, 68, 0.1)" }}
                    >
                      <Icon
                        width={24} height={24}
                        style={{ color: "var(--foreground)" }}
                      />
                    </XStack>

                    {/* Title */}
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={4} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>
                      {entry.title}
                    </H3>

                    {/* Tagline */}
                    <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" color="var(--neutral-500)" marginBottom={12}>
                      {entry.tagline}
                    </Paragraph>

                    {/* Description */}
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)">
                      {entry.description}
                    </Paragraph>

                    {/* Hover accent line */}
                    <MotionBox
                      position="absolute" bottom={0} left={0} height="2px" borderRadius="var(--radius-full)"
                      style={{ backgroundColor: "var(--neutral-800)" }}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </MotionBox>
                </Link>
              </MotionBox>
            );
          })}
        </Grid>

        {/* View All Products Link */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          textAlign="center" marginTop={40}
        >
          <Link
            to="/products"
            display="inline-flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
          >
            View all products
            <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ x: 4 }}><ArrowRight size={16} /></Box>
          </Link>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CuratedEntryPointsSection;
