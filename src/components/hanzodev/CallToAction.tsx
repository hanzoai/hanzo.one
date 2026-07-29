import { Box, Button, H2, H3, Link, MotionBox, Paragraph, YStack } from '@/gui'
import React from "react";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const CallToAction = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" position="relative" overflow="hidden">
      {/* Background gradient */}
      <Box
        position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)" opacity={0.2}
        style={{
          background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
      />

      <Box maxWidth="56rem" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          textAlign="center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} color="var(--foreground)" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Create what's exciting.
            <br />
            <span style={{ color: BRAND_COLOR }}>Maintain what's essential.</span>
          </H2>

          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto" marginBottom={32}>
            Use Hanzo Dev where you work
          </Paragraph>

          <YStack display="flex" flexDirection="column" justifyContent="center" gap={16} marginBottom={64} $sm={{ flexDirection: "row" }}>
            <Button
              size="lg"
              color="var(--foreground)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32}
              style={{ backgroundColor: BRAND_COLOR }}
              asChild
            >
              <Link minHeight={44} to="/signup">
                Get Started
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="var(--neutral-700)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              asChild
            >
              <a href="https://docs.hanzo.ai/dev" target="_blank" rel="noopener noreferrer">
                Read the documentation
              </a>
            </Button>
          </YStack>

          {/* Newsletter signup */}
          <Box borderTopWidth={1} borderColor="var(--neutral-800)" paddingTop={48}>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)" marginBottom={8}>
              Get the developer newsletter
            </H3>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={24} maxWidth="32rem" marginHorizontal="auto">
              Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.
            </Paragraph>
            <YStack display="flex" flexDirection="column" gap={12} maxWidth="28rem" marginHorizontal="auto" $sm={{ flexDirection: "row" }}>
              <Box display="inline-block" minHeight={44}
                type="email"
                placeholder="Enter your email"
                render="input" flex={1} paddingHorizontal={16} paddingVertical={12} backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" color="var(--foreground)" placeholderTextColor="var(--neutral-500)" focusStyle={{ outlineStyle: "none", borderColor: "var(--border-strong)" }}
              />
              <Button
                color="var(--foreground)" paddingHorizontal={24}
                style={{ backgroundColor: BRAND_COLOR }}
              >
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Mail size={16} /></Box>
                Subscribe
              </Button>
            </YStack>
            <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginTop={16}>
              Please provide your email address if you'd like to receive our monthly developer newsletter.
              You can unsubscribe at any time.
            </Paragraph>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
