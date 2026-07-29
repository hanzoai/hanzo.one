import { Box, Grid, H2, H3, H4, MotionBox, Paragraph, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import {
  RefreshCw,
  Smartphone,
  Eye,
  Rocket,
  Users,
  Brain,
  Keyboard,
  Settings,
  Shield,
  BarChart3,
  CreditCard,
  Copy,
} from "lucide-react";


const VALUE_PROPS = [
  {
    title: "Stay in your flow",
    subtitle: "The all-in-one agentic engineering platform",
    color: "#3b82f6",
    features: [
      {
        icon: Smartphone,
        title: "Sync across every interface",
        description:
          "Start a task on your mobile device and finish it in VS Code, JetBrains, or the CLI without missing a beat.",
      },
      {
        icon: RefreshCw,
        title: "Persist your context",
        description:
          "Never lose state. Your session history, active agents, and variables follow you automatically across devices and environments.",
      },
      {
        icon: Eye,
        title: "Open the black box",
        description:
          "Hanzo is open source so you can inspect, customize, and integrate to meet your specific needs.",
      },
      {
        icon: Rocket,
        title: "Ship without friction",
        description:
          'Move from "commit" to "live" in one motion. Get AI code reviews and deployments without leaving your IDE.',
      },
    ],
  },
  {
    title: "1000x every dev",
    subtitle: "Multiply your engineering output",
    color: "#10b981",
    features: [
      {
        icon: Users,
        title: "Multiply your output",
        description:
          "Use Orchestrator Mode and Code Review to plan, build, and audit simultaneously. Be everywhere at once.",
      },
      {
        icon: Brain,
        title: "Externalize your context",
        description:
          "Stop repeating yourself. Use Memory Bank to store architectural decisions and onboard the team automatically.",
      },
      {
        icon: Keyboard,
        title: "Code at thought speed",
        description:
          "Eliminate boilerplate. Use intelligent Tab Autocomplete to ship PRs faster than you can type them.",
      },
      {
        icon: Settings,
        title: "Use the best model for the job",
        description:
          "With 500+ models, you can control the right tradeoffs between latency, cost, context, and reasoning for each task.",
      },
    ],
  },
  {
    title: "Accelerate AI ROI",
    subtitle: "Enterprise-grade AI management",
    color: "#8b5cf6",
    features: [
      {
        icon: Shield,
        title: "Stop AI sprawl",
        description:
          "Centralize usage to prevent shadow IT, security risks, and wasted credits before they spiral.",
      },
      {
        icon: BarChart3,
        title: "Track and improve velocity",
        description:
          "Use the AI Management Dashboard to track adoption rates, measure new hire speed, and prove ROI.",
      },
      {
        icon: CreditCard,
        title: "Centralize management",
        description:
          "Simplify administration with pooled credits, unified billing, and enterprise-grade data privacy controls.",
      },
      {
        icon: Copy,
        title: "Duplicate your best devs",
        description:
          'Build a managed index to speed up onboarding. Capture individual "superpowers" into custom modes the whole team can use.',
      },
    ],
  },
];

const WhyHanzo = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        {/* Section header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Why Hanzo
          </H2>
          <Paragraph color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            The all-in-one agentic engineering platform
          </Paragraph>
        </MotionBox>

        {/* Value Props */}
        <Box rowGap={80}>
          {VALUE_PROPS.map((prop, propIndex) => (
            <MotionBox
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: propIndex * 0.1 }}
            >
              {/* Prop Header */}
              <Box marginBottom={32}>
                <H3
                  fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}
                  style={{ color: prop.color }}
                >
                  {prop.title}
                </H3>
                <Paragraph color="var(--neutral-400)">{prop.subtitle}</Paragraph>
              </Box>

              {/* Features Grid */}
              <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                {prop.features.map((feature, featureIndex) => {
                  const Icon = feature.icon;
                  return (
                    <MotionBox
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      
                      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
                    >
                      <XStack
                        width={40} height={40} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
                        style={{ backgroundColor: `${prop.color}20` }}
                      >
                        <Icon width={20} height={20} style={{ color: prop.color }} />
                      </XStack>
                      <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>
                        {feature.title}
                      </H4>
                      <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                        {feature.description}
                      </Paragraph>
                    </MotionBox>
                  );
                })}
              </Grid>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhyHanzo;
