import { Box, Grid, H2, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const features = [
  { name: "Multi-agent parallelism + consensus", hanzo: "full", others: "none", desc: "Best patch wins" },
  { name: "Policy / approvals / audit by default", hanzo: "full", others: "none", desc: "Humans + agents" },
  { name: "Self-host and air-gapped options", hanzo: "full", others: "partial", desc: "On-prem ready" },
  { name: "Evidence-driven output", hanzo: "full", others: "partial", desc: "Diffs + tests + traces, not screenshots" },
  { name: "Long-running sandboxes", hanzo: "full", others: "partial", desc: "Install, refactor, iterate" },
];

const renderStatus = (status: string) => {
  switch (status) {
    case "full":
      return (
        <XStack display="flex" alignItems="center" justifyContent="center">
          <Check size={20} color="var(--neutral-500)" />
        </XStack>
      );
    case "partial":
      return (
        <XStack display="flex" alignItems="center" justifyContent="center">
          <Minus size={20} color="var(--neutral-500)" />
        </XStack>
      );
    case "none":
      return (
        <XStack display="flex" alignItems="center" justifyContent="center">
          <X size={20} color="var(--neutral-600)" />
        </XStack>
      );
    default:
      return null;
  }
};

const UseCasesSection = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="56rem" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={48}
        >
          <Paragraph
            display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
            style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
          >
            Comparison
          </Paragraph>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Why Hanzo vs agents + glue
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)">
            Production software needs more than autocomplete.
          </Paragraph>
        </MotionBox>

        {/* Comparison Table */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden"
        >
          {/* Header */}
          <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={16} padding={16} backgroundColor="var(--neutral-900)" borderBottomWidth={1} borderColor="var(--neutral-800)">
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-500)">Capability</Box>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" textAlign="center" style={{ color: BRAND_COLOR }}>Hanzo</Box>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-500)" textAlign="center">Others</Box>
          </Grid>

          {/* Rows */}
          {features.map((feature, index) => (
            <MotionBox
              key={feature.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              
              display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={16} padding={16} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }} borderBottomWidth={index !== features.length - 1 ? 1 : undefined} borderColor={index !== features.length - 1 ? "var(--neutral-800)" : undefined}
            >
              <div>
                <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" fontWeight="500">{feature.name}</Box>
                <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginTop={2}>{feature.desc}</Box>
              </div>
              <XStack display="flex" justifyContent="center" alignItems="center">{renderStatus(feature.hanzo)}</XStack>
              <XStack display="flex" justifyContent="center" alignItems="center">{renderStatus(feature.others)}</XStack>
            </MotionBox>
          ))}
        </MotionBox>

        {/* Legend */}
        <XStack display="flex" justifyContent="center" gap={24} marginTop={24}>
          <XStack display="flex" alignItems="center" gap={8}>
            <Check size={16} color="var(--neutral-500)" />
            <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Full support</Text>
          </XStack>
          <XStack display="flex" alignItems="center" gap={8}>
            <Minus size={16} color="var(--neutral-500)" />
            <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Partial / varies</Text>
          </XStack>
          <XStack display="flex" alignItems="center" gap={8}>
            <X size={16} color="var(--neutral-600)" />
            <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Not available</Text>
          </XStack>
        </XStack>
      </Box>
    </Box>
  );
};

export default UseCasesSection;
