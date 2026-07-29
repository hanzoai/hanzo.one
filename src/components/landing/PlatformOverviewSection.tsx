import { Box, Grid, H2, H3, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Zap,
  Users,
  Clock,
  Eye,
  ArrowRight,
  GitBranch,
  TestTube,
  FileCheck,
  Rocket,
  Shield,
  Lock,
  ChevronRight,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

// AI providers we support for multi-agent execution
const aiProviders = [
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Anthropic", logo: "/logos/anthropic.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Qwen", logo: "/logos/qwen.svg" },
  { name: "Gemini", logo: "/logos/gemini.svg" },
  { name: "Mistral", logo: "/logos/mistral.svg" },
  { name: "Kimi", logo: "/logos/kimi.svg" },
  { name: "Moonshot", logo: "/logos/moonshot.svg" },
];

const multiAgentFeatures = [
  {
    icon: Zap,
    title: "Multi-agent runs",
    description: "One prompt, many implementations across agents/models.",
  },
  {
    icon: Users,
    title: "Consensus selection",
    description: "Compare diffs, benchmarks, and test logs; select the strongest patch.",
  },
  {
    icon: Clock,
    title: "Long-running sandboxes",
    description: "Install deps, refactor safely, run suites, iterate until green.",
  },
  {
    icon: Eye,
    title: "Team visibility",
    description: "Shared workspace for runs, artifacts, decisions, and audit links.",
  },
];

const autonomyModes = [
  {
    id: "plan",
    title: "Plan-only",
    description: "Proposal + file list + risk notes + diff preview",
    icon: FileCheck,
  },
  {
    id: "implement",
    title: "Implement",
    description: "Coherent multi-file edits with repo context",
    icon: GitBranch,
  },
  {
    id: "test",
    title: "Implement + test",
    description: "Suites run automatically; logs attached",
    icon: TestTube,
  },
  {
    id: "deploy",
    title: "Implement + deploy",
    description: "Approvals + policy checks + audit trail",
    icon: Rocket,
  },
];

const PlatformOverviewSection = () => {
  const [activeMode, setActiveMode] = useState("plan");

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        {/* Multi-Agent Remote Execution */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          marginBottom={128}
        >
          <Paragraph
            display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
            style={{ color: BRAND_COLOR, borderColor: `var(--foreground)4d` }}
          >
            Core Differentiator
          </Paragraph>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Parallel execution. One best outcome.
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginBottom={32}>
            Dispatch the same task to multiple agents (Hanzo + external), then pick the winner based on diff quality + test evidence, not vibes.
          </Paragraph>

          {/* AI Provider logos */}
          <XStack display="flex" flexWrap="wrap" alignItems="center" gap={24} marginBottom={48} padding={16} borderRadius="var(--radius-xl)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)">
            <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" textTransform="uppercase" letterSpacing="0.05em" fontWeight="500">Supported agents:</Text>
            {aiProviders.map((provider) => (
              <XStack
                key={provider.name}
                display="flex" alignItems="center" gap={8} color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                title={provider.name}
              >
                <Box display="inline-block"
                  src={provider.logo}
                  alt={provider.name}
                  render="img" width={20} height={20} opacity={0.6} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ opacity: 1 }}
                  style={{ filter: 'grayscale(100%) brightness(2)' }}
                />
                <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" display="none" $sm={{ display: "inline" }}>{provider.name}</Text>
              </XStack>
            ))}
          </XStack>

          <Grid display="grid" gap={24} marginBottom={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {multiAgentFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <MotionBox
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  padding={20} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)"
                >
                  <XStack
                    width={40} height={40} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
                    style={{ backgroundColor: `var(--foreground)15` }}
                  >
                    <Icon width={20} height={20} style={{ color: BRAND_COLOR }} />
                  </XStack>
                  <H3 fontSize="var(--text-base)" lineHeight="var(--leading-base)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{feature.title}</H3>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{feature.description}</Paragraph>
                </MotionBox>
              );
            })}
          </Grid>

          <Link minHeight={44} 
            to="/dev"
            paddingHorizontal={20} paddingVertical={10} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
          >
            Run your first task
            <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
          </Link>
        </MotionBox>

        {/* Controllable Autonomy */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Paragraph
            display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
            style={{ color: BRAND_COLOR, borderColor: `var(--foreground)4d` }}
          >
            Your Wedge
          </Paragraph>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Autonomy you can dial. Evidence you can trust.
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginBottom={48}>
            Move fast without giving agents the keys. Every step is explicit, reviewable, and enforceable.
          </Paragraph>

          {/* Mode Selector */}
          <Grid display="grid" gap={16} marginBottom={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {autonomyModes.map((mode, index) => {
              const Icon = mode.icon;
              const isActive = activeMode === mode.id;
              return (
                <MotionBox
                  key={mode.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  
                  onClick={() => setActiveMode(mode.id)}
                  padding={20} borderRadius="var(--radius-xl)" borderWidth={1} textAlign="left" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderColor={isActive ? "var(--foreground)" : "var(--neutral-800)"} backgroundColor={isActive ? "rgb(255 255 255 / 0.1)" : "rgb(255 255 255 / 0.5)"} hoverStyle={isActive ? undefined : { borderColor: "var(--neutral-700)" }}
                >
                  <XStack display="flex" alignItems="flex-start" gap={12}>
                    <XStack
                      width={32} height={32} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" flexShrink={0} backgroundColor={isActive ? "rgb(255 255 255 / 0.2)" : "var(--neutral-800)"}
                    >
                      <Icon width={16} height={16} color={isActive ? "var(--foreground)" : "var(--neutral-400)"} />
                    </XStack>
                    <div>
                      <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="600" marginBottom={4} color={isActive ? "var(--foreground)" : "var(--neutral-300)"}>
                        {mode.title}
                      </H3>
                      <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{mode.description}</Paragraph>
                    </div>
                  </XStack>
                  {isActive && (
                    <MotionBox
                      layoutId="activeIndicator"
                      flexDirection="row" marginTop={12} display="flex" alignItems="center" color="var(--foreground)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500"
                    >
                      <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><ChevronRight size={12} /></Box>
                      Selected
                    </MotionBox>
                  )}
                </MotionBox>
              );
            })}
          </Grid>

          {/* Signature line */}
          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            flexDirection="row" display="flex" alignItems="center" gap={12} padding={16} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" maxWidth="28rem"
          >
            <XStack width={40} height={40} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
              <Lock size={20} color="var(--neutral-400)" />
            </XStack>
            <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
              <Text fontWeight="500" color="var(--foreground)">Agents don't get admin.</Text>{" "}
              They get policies.
            </Paragraph>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default PlatformOverviewSection;
