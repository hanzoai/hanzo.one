import { Box, H2, H3, MotionBox, Paragraph, Text, XStack, YStack, FILL} from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { Shield, Database, Brain, Rocket } from "lucide-react";

const layers = [
  {
    name: "Identity & Control Plane",
    icon: Shield,
    items: ["Hanzo Team", "Hanzo ID", "IAM", "KMS", "Audit"],
  },
  {
    name: "Data Plane",
    icon: Database,
    items: ["Vector", "SQL", "KV", "Streaming", "Workflows"],
  },
  {
    name: "AI Plane",
    icon: Brain,
    items: ["Models", "Inference", "Agents (Hanzo Dev)", "Evaluation"],
  },
  {
    name: "Deployment Plane",
    icon: Rocket,
    items: ["Local", "Kubernetes", "Cloud", "Edge"],
  },
];

const BRAND_COLOR = "var(--foreground)";

const VerticalStackSection = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" position="relative" overflow="hidden" $md={{ paddingHorizontal: 32 }}>
      {/* Background grid */}
      <Box
        position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.02}
        style={{
          backgroundImage: `radial-gradient(circle at center, ${BRAND_COLOR} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <Box maxWidth="56rem" marginHorizontal="auto" position="relative" zIndex={10}>
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <Paragraph
            display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
            style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
          >
            Architecture
          </Paragraph>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            The vertically integrated stack
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Identity to production in one platform.
          </Paragraph>
        </MotionBox>

        {/* Vertical Stack Diagram */}
        <Box position="relative">
          {/* Vertical connecting line */}
          <MotionBox
            position="absolute" left="50%" top={0} bottom={0} width={1} x="-50%" zIndex={0}
            style={{ backgroundColor: `${BRAND_COLOR}30` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Layer Cards */}
          <YStack position="relative" zIndex={10} display="flex" flexDirection="column" gap={24}>
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isLast = index === layers.length - 1;

              return (
                <MotionBox
                  key={layer.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  position="relative"
                >
                  {/* Connection dot */}
                  <MotionBox
                    position="absolute" left="50%" x="-50%" top={-12} width={12} height={12} borderRadius="var(--radius-full)" borderWidth={2} backgroundColor="var(--pure-black)" zIndex={20}
                    style={{ borderColor: BRAND_COLOR }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                  />

                  {/* Card */}
                  <MotionBox
                    position="relative" padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-overlay)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ borderColor: "var(--neutral-700)" }}
                    whileHover={{
                      boxShadow: `0 0 40px -10px ${BRAND_COLOR}40`,
                      borderColor: `${BRAND_COLOR}40`,
                    }}
                  >
                    {/* Layer Header */}
                    <XStack display="flex" alignItems="center" gap={16} marginBottom={16}>
                      <XStack
                        width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" flexShrink={0}
                        style={{ backgroundColor: `${BRAND_COLOR}20` }}
                      >
                        <Icon width={24} height={24} style={{ color: BRAND_COLOR }} />
                      </XStack>
                      <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}>
                        {layer.name}
                      </H3>
                    </XStack>

                    {/* Items */}
                    <XStack display="flex" flexWrap="wrap" gap={8} marginLeft={64}>
                      {layer.items.map((item) => (
                        <Text
                          key={item}
                          paddingHorizontal={12} paddingVertical={6} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" borderRadius="var(--radius-lg)" backgroundColor="var(--surface-overlay)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" cursor="default" hoverStyle={{ backgroundColor: "var(--neutral-700)", color: "var(--foreground)" }}
                        >
                          {item}
                        </Text>
                      ))}
                    </XStack>

                    {/* Flow arrow indicator */}
                    {!isLast && (
                      <MotionBox
                        position="absolute" bottom={-24} left="50%" x="-50%" color="var(--neutral-600)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                      >
                        <Box display="inline-block"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          render="svg" rotate="180deg"
                        >
                          <path
                            d="M6 0L12 8H0L6 0Z"
                            fill={BRAND_COLOR}
                            fillOpacity="0.5"
                          />
                        </Box>
                      </MotionBox>
                    )}
                  </MotionBox>
                </MotionBox>
              );
            })}
          </YStack>

          {/* Bottom endpoint */}
          <MotionBox
            position="absolute" left="50%" x="-50%" bottom={-16} width={16} height={16} borderRadius="var(--radius-full)" zIndex={20}
            style={FILL}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
        </Box>

        {/* Bottom tagline */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
          textAlign="center" marginTop={64}
        >
          <Paragraph color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            From identity management to edge deployment, every layer works together seamlessly.
          </Paragraph>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default VerticalStackSection;
