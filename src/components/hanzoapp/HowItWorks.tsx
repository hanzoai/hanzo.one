import { Box, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { Download, Settings, Rocket, ArrowRight } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install or open",
    description: "Download the desktop app, open hanzo.app in your browser, or install via CLI.",
    code: "curl -fsSL hanzo.sh | sh",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure your mode",
    description: "Choose web, desktop, local AI, or node mode. Connect your accounts and preferences.",
    code: "hanzo config --mode local --model qwen3-32b",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start building",
    description: "Create, code, and ship with AI assistance. Your work syncs across all devices.",
    code: "hanzo dev \"Build a payment API with Stripe\"",
  },
];

const HowItWorks = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="64rem" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Get started in minutes
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Three steps to productive AI-assisted development.
          </Paragraph>
        </MotionBox>

        <Box rowGap={48}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <MotionBox
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                display="grid" gap={32} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
              >
                <Box $lg={isEven ? { order: 2 } : undefined}>
                  <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
                    <XStack
                      width={32} height={32} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center"
                      style={{ backgroundColor: `${BRAND_COLOR}20` }}
                    >
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="700" style={{ color: BRAND_COLOR }}>
                        {step.number}
                      </Text>
                    </XStack>
                    <Icon width={20} height={20} color="var(--neutral-400)" />
                  </XStack>
                  <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={12}>{step.title}</H3>
                  <Paragraph color="var(--neutral-400)" marginBottom={16}>{step.description}</Paragraph>
                </Box>

                <Box $lg={isEven ? { order: 1 } : undefined}>
                  <Box backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={16}>
                    <XStack display="flex" alignItems="center" gap={8} marginBottom={12}>
                      <XStack display="flex" gap={6}>
                        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                      </XStack>
                      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">terminal</Text>
                    </XStack>
                    <Box fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                      <Text color="var(--neutral-500)">$ </Text>
                      <Text color="var(--foreground)">{step.code}</Text>
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;
