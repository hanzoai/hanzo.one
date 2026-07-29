import { Anchor, Box, Grid, H2, H3, Link, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import { Check, ArrowRight, Sparkles } from "lucide-react";

const freeFeatures = [
  "100K API calls / month",
  "1GB vector storage",
  "10GB file storage",
  "Community support",
  "All core features",
  "Unlimited projects",
];

const PricingPreviewSection = () => {
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
            style={{ color: "var(--foreground)", borderColor: "rgba(253, 68, 68, 0.3)" }}
          >
            Pricing
          </Paragraph>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Scale forever
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)">
            No credit card required. Upgrade when you're ready.
          </Paragraph>
        </MotionBox>

        {/* Pricing card */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          position="relative"
        >
          {/* Glow effect */}
          <Box
            position="absolute" top={0} right={0} bottom={0} left={0} borderRadius="var(--radius-2xl)" filter="blur(24px)" opacity={0.2}
            style={{ background: "linear-gradient(135deg, var(--foreground), #8b5cf6)" }}
          />

          <Box position="relative" padding={32} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-overlay)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" $md={{ padding: 48 }}>
            <Grid display="grid" gap={32} alignItems="center" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {/* Left: Free tier info */}
              <div>
                <XStack display="flex" alignItems="center" gap={8} marginBottom={16}>
                  <Sparkles size={20} color="var(--foreground)" />
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">Free Forever</Text>
                </XStack>
                <H3 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={8} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                  $0<Text fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="400" color="var(--neutral-500)">/month</Text>
                </H3>
                <Paragraph color="var(--neutral-400)" marginBottom={24}>
                  Everything you need to start building. No strings attached.
                </Paragraph>

                <Box render="ul" rowGap={12}>
                  {freeFeatures.map((feature) => (
                    <XStack key={feature} render="li" display="flex" alignItems="center" gap={12}>
                      <XStack width={20} height={20} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                        <Check size={12} color="var(--foreground)" />
                      </XStack>
                      <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{feature}</Text>
                    </XStack>
                  ))}
                </Box>
              </div>

              {/* Right: CTAs */}
              <YStack display="flex" flexDirection="column" alignItems="center" gap={16} $md={{ alignItems: "flex-end" }}>
                <Anchor minHeight={44} 
                  href="https://iam.hanzo.ai/sign-up"
                  width="100%" justifyContent="center" paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" color="var(--foreground)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $md={{ width: "auto" }} hoverStyle={{ opacity: 0.9 }}
                  style={{ backgroundColor: "var(--neutral-800)" }}
                >
                  Start Building Free
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
                </Anchor>

                <Link tap
                  to="/pricing"
                  display="inline-flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                >
                  View all plans
                  <ArrowRight size={16} />
                </Link>

                <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-600)" textAlign="center" marginTop={16} $md={{ textAlign: "right" }}>
                  No credit card required
                  <br />
                  Cancel anytime
                </Paragraph>
              </YStack>
            </Grid>
          </Box>
        </MotionBox>

        {/* Enterprise callout */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          marginTop={32} textAlign="center"
        >
          <Paragraph color="var(--neutral-500)">
            Need custom limits, SLAs, or dedicated support?{" "}
            <Link tap
              to="/enterprise"
              color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}
            >
              Talk to sales
            </Link>
          </Paragraph>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default PricingPreviewSection;
