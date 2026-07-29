import { Anchor, Box, Grid, H2, H3, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  GitPullRequest,
  Rocket,
  GitBranch,
  Layout,
  Search,
  Users,
  RefreshCw,
  Mic,
  Code,
  BarChart3,
  CreditCard,
  Puzzle,
  Ticket,
  MessageSquare,
  Terminal,
  Wrench,
  Bug,
  Brain,
  Keyboard,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const RECENTLY_SHIPPED = [
  {
    icon: Cloud,
    title: "Cloud Agents",
    description:
      "Run AI agents in the cloud without consuming local resources. Execute long-running tasks, complex workflows, and resource-intensive operations while your machine stays free for other work.",
    link: "https://docs.hanzo.ai/cloud-agents",
  },
  {
    icon: GitPullRequest,
    title: "Code Reviews",
    description:
      "Automated code review agents that analyze pull requests, suggest improvements, catch bugs, and ensure code quality standards. Get instant feedback before merging.",
    link: "https://docs.hanzo.ai/code-reviews",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "One-click deployment. Deploy your applications directly from Hanzo Dev with intelligent configuration detection and automated setup.",
    link: "https://docs.hanzo.ai/deploy",
  },
  {
    icon: GitBranch,
    title: "Parallel Agents (CLI)",
    description:
      "Run multiple AI agents simultaneously using git worktrees in the Hanzo Dev CLI. Coordinate complex tasks across different parts of your codebase and review results as pull requests.",
    link: "https://docs.hanzo.ai/parallel-agents",
  },
];

const ALL_FEATURES = [
  {
    icon: Layout,
    title: "App Builder",
    description:
      "Visual app builder that generates production-ready code. Design interfaces, define logic, and let Hanzo Dev create the implementation.",
  },
  {
    icon: Search,
    title: "Managed Indexing",
    description:
      "Deep semantic understanding of your entire codebase. Navigate, understand, and modify large projects with full context awareness.",
  },
  {
    icon: Users,
    title: "Agent Manager",
    description:
      "Run multiple AI agents simultaneously directly in your IDE. Coordinate complex tasks across different parts of your codebase.",
  },
  {
    icon: RefreshCw,
    title: "Sessions",
    description:
      "Start a session in one place and continue on another platform. Your AI agents, context, and progress follow you everywhere.",
  },
  {
    icon: Mic,
    title: "Voice Prompting",
    description:
      "Use natural voice commands to interact with AI agents directly in your IDE. Speak your requests instead of typing.",
  },
  {
    icon: Code,
    title: "Autocomplete in JetBrains",
    description:
      "AI-powered autocomplete and code suggestions directly in your JetBrains IDE with full codebase understanding.",
  },
  {
    icon: BarChart3,
    title: "AI Adoption Score",
    description:
      "Track and measure your team's AI adoption effectiveness. Understand usage patterns and optimize workflows.",
  },
  {
    icon: CreditCard,
    title: "Auto Top Ups",
    description:
      "Never run out of credits mid-task. Auto-replenish your balance automatically whenever it drops below $5.",
  },
  {
    icon: Puzzle,
    title: "Skills",
    description:
      "Extend Hanzo Dev with skills. Sharable packages of domain expertise, new capabilities, and repeatable workflows.",
  },
  {
    icon: Ticket,
    title: "Hanzo Pass",
    description:
      "Get up to 50% free credits on your AI subscription. Credits never expire, plus bonus credits on top.",
  },
  {
    icon: MessageSquare,
    title: "Hanzo for Slack",
    description:
      "Ask questions about your codebase, get explanations, or create PRs via cloud agents—all in Slack.",
  },
  {
    icon: Terminal,
    title: "Install where you work",
    description:
      "Terminal CLI, VS Code, JetBrains. Hanzo works wherever you do.",
  },
  {
    icon: Wrench,
    title: "Auto failure recovery",
    description:
      "Hanzo automatically detects errors, runs test suites and recovers on failure. No more explaining errors to AI.",
  },
  {
    icon: Search,
    title: "Hallucination-free code",
    description:
      "MCP marketplace with tools that automatically look up library documentation. AI follows best practices.",
  },
  {
    icon: Brain,
    title: "Context is king",
    description:
      "Hanzo searches for the right context automatically. Any context you add is bonus, not required.",
  },
  {
    icon: Bug,
    title: "Kickstart debugging",
    description:
      "Debug mode goes through your codebase with a fine-toothed comb to find bug sources.",
  },
  {
    icon: Brain,
    title: "Memory bank",
    description:
      "Stop re-explaining your app. AI keeps its own records of what it worked on and your preferences.",
  },
  {
    icon: Keyboard,
    title: "Tab autocomplete",
    description:
      "Fast inline completion including multiline suggestions. Intelligent completions that understand your codebase.",
  },
];

const Features = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        {/* Section header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Features
          </H2>
          <Paragraph color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Everything you need for agentic development
          </Paragraph>
        </MotionBox>

        {/* Recently Shipped */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          marginBottom={64}
        >
          <XStack display="flex" alignItems="center" gap={12} marginBottom={32}>
            <Box
              paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500"
              style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
            >
              Recently Shipped
            </Box>
          </XStack>

          <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {RECENTLY_SHIPPED.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <MotionBox
                  key={feature.title}
                  href={feature.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  
                  group backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
                >
                  <XStack display="flex" alignItems="flex-start" justifyContent="space-between" marginBottom={16}>
                    <XStack
                      width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center"
                      style={{ backgroundColor: `${BRAND_COLOR}20` }}
                    >
                      <Icon width={24} height={24} style={{ color: BRAND_COLOR }} />
                    </XStack>
                    <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" color="var(--foreground)">
                      New
                    </Text>
                  </XStack>
                  <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>
                    {feature.title}
                  </H3>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={16}>
                    {feature.description}
                  </Paragraph>
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" display="flex" alignItems="center" gap={4}>
                    View Documentation
                    <ExternalLink size={14} />
                  </Text>
                </MotionBox>
              );
            })}
          </Grid>
        </MotionBox>

        {/* All Features Grid */}
        <Grid display="grid" gap={16} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {ALL_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionBox
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={20} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
              >
                <XStack display="flex" alignItems="center" gap={12} marginBottom={12}>
                  <Icon width={20} height={20} color="var(--neutral-400)" />
                  <H4 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">
                    {feature.title}
                  </H4>
                </XStack>
                <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-relaxed)" color="var(--neutral-500)">
                  {feature.description}
                </Paragraph>
              </MotionBox>
            );
          })}
        </Grid>

        {/* See upcoming features link */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginTop={48}
        >
          <Anchor tap
            href="https://docs.hanzo.ai/roadmap"
            target="_blank"
            rel="noreferrer noopener"
            display="inline-flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
          >
            See upcoming features
            <ArrowRight size={16} />
          </Anchor>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Features;
