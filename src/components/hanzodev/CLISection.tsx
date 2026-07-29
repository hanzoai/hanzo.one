import { Box, Button, Grid, H2, H3, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import { ArrowRight, Terminal, Sparkles, Bug, Rocket, Layers } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Code Generation",
    description: "Generate APIs, scripts, components, and features directly from your terminal using simple natural-language prompts.",
  },
  {
    icon: Bug,
    title: "Smart Debugging & Fixes",
    description: "Identify bugs, understand errors, and apply AI-generated fixes automatically without leaving the CLI.",
  },
  {
    icon: Rocket,
    title: "End-to-End Project Automation",
    description: "Set up projects, generate tests, configure CI/CD, and manage deployments — all from one CLI.",
  },
  {
    icon: Layers,
    title: "Works Across Any Stack",
    description: "Use the CLI with Python, JavaScript, React, Node.js, databases, and more — no framework lock-in.",
  },
];

const tools = [
  "Ramp", "Cred", "Zapier", "GitHub", "Docker", "Kubernetes",
  "AWS", "GCP", "Azure", "Terraform", "Ansible", "Jenkins",
];

const CLISection = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))">
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <XStack
            display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" borderWidth={1} marginBottom={24}
            style={{ borderColor: `${BRAND_COLOR}4d` }}
          >
            <Terminal size={16} style={{ color: BRAND_COLOR }} />
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" style={{ color: BRAND_COLOR }}>Hanzo CLI</Text>
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            AI-powered development,
            <br />
            right from your terminal.
          </H2>
          <Button
            size="lg"
            marginTop={16} color="var(--foreground)"
            style={{ backgroundColor: BRAND_COLOR }}
            asChild
          >
            <Link to="/download">
              Get Started Now
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Link>
          </Button>
        </MotionBox>

        {/* Feature cards */}
        <Grid display="grid" gap={24} marginBottom={96} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionBox
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
              >
                <XStack
                  width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
                  style={{ backgroundColor: `${BRAND_COLOR}20` }}
                >
                  <Icon width={24} height={24} style={{ color: BRAND_COLOR }} />
                </XStack>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{feature.title}</H3>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{feature.description}</Paragraph>
              </MotionBox>
            );
          })}
        </Grid>

        {/* Tools Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center"
        >
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
            Connects with your favorite command line tools
          </H3>
          <Paragraph color="var(--neutral-400)" marginBottom={32} maxWidth="42rem" marginHorizontal="auto">
            Your terminal is where real work happens. Hanzo Dev connects with the tools that power development—deployment, databases, monitoring, version control. Rather than adding another interface to juggle, it enhances your existing stack.
          </Paragraph>

          {/* Tool logos marquee */}
          <XStack display="flex" justifyContent="center" gap={24} flexWrap="wrap">
            {tools.map((tool) => (
              <Box
                key={tool}
                paddingHorizontal={16} paddingVertical={8} backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
              >
                {tool}
              </Box>
            ))}
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CLISection;
