import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Monitor,
  Cpu,
  Shield,
  Cloud,
  Lock,
  Zap,
  Users,
  HardDrive,
  Coins,
  Wifi,
  RefreshCw,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

const modes = [
  {
    id: "web",
    icon: Globe,
    title: "Web App",
    tagline: "Build from anywhere",
    description: "Access Hanzo from any browser. Your workspace syncs across devices automatically.",
    features: [
      { icon: Cloud, text: "Cloud-synced workspaces" },
      { icon: Users, text: "Real-time collaboration" },
      { icon: RefreshCw, text: "Auto-save and versioning" },
    ],
    color: "#3b82f6", // blue
  },
  {
    id: "desktop",
    icon: Monitor,
    title: "Desktop App",
    tagline: "Native performance",
    description: "Full-featured native app for macOS, Windows, and Linux with system integrations.",
    features: [
      { icon: Zap, text: "Native speed and UI" },
      { icon: Wifi, text: "Works offline" },
      { icon: HardDrive, text: "Local file access" },
    ],
    color: "#10b981", // green
  },
  {
    id: "local",
    icon: Cpu,
    title: "Local AI",
    tagline: "Private and offline",
    description: "Run AI models locally on your hardware. Zero data leaves your machine.",
    features: [
      { icon: Lock, text: "Complete privacy" },
      { icon: Cpu, text: "GPU accelerated" },
      { icon: Zap, text: "Zero latency" },
    ],
    color: "#8b5cf6", // purple
  },
  {
    id: "node",
    icon: Shield,
    title: "Hanzo Node",
    tagline: "Earn while you build",
    description: "Connect to the decentralized network. Contribute compute, earn rewards.",
    features: [
      { icon: Coins, text: "Earn LUX tokens" },
      { icon: Shield, text: "Proof of AI consensus" },
      { icon: Users, text: "Decentralized network" },
    ],
    color: BRAND_COLOR,
  },
];

const WhyHanzoApp = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Four ways to Hanzo
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Choose how you want to work. All modes sync seamlessly when connected.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <MotionBox
                key={mode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                group backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
              >
                <XStack display="flex" alignItems="flex-start" gap={16}>
                  <XStack
                    width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" flexShrink={0}
                    style={{ backgroundColor: `${mode.color}20` }}
                  >
                    <Icon width={24} height={24} style={{ color: mode.color }} />
                  </XStack>
                  <Box flex={1}>
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={4}>{mode.title}</H3>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={12} style={{ color: mode.color }}>{mode.tagline}</Paragraph>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={16}>{mode.description}</Paragraph>
                    <Box rowGap={8}>
                      {mode.features.map((feature) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <XStack key={feature.text} display="flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                            <FeatureIcon width={16} height={16} color="var(--neutral-500)" />
                            <span>{feature.text}</span>
                          </XStack>
                        );
                      })}
                    </Box>
                  </Box>
                </XStack>
              </MotionBox>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyHanzoApp;
