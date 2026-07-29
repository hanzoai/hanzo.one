import { Box, Link, MotionBox, MotionText, Text, XStack, FILL} from '@/gui'
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx hanzo-dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box render="section" position="relative" paddingTop={96} paddingBottom={80} paddingHorizontal={16} overflow="hidden" $md={{ paddingHorizontal: 32 }} $lg={{ paddingHorizontal: 48 }}>
      {/* Background gradient */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" zIndex={0} pointerEvents="none">
        <Box
          position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)" opacity={0.15}
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />
      </Box>

      <Box maxWidth="64rem" marginHorizontal="auto" position="relative" zIndex={10}>
        {/* Main content - centered */}
        <Box textAlign="center">
          {/* Badge */}
          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            flexDirection="row" display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={24}
            style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
          >
            Get up to 50% free credits with Hanzo Pass
          </MotionBox>

          <MotionText
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
          >
            <Text color="var(--foreground)">Move at Hanzo Speed</Text>
          </MotionText>

          <MotionText
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={40} maxWidth="var(--container-prose)" marginHorizontal="auto" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
          >
            Build, ship, and iterate faster with the most popular open source coding agent.
          </MotionText>

          {/* CTAs */}
          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16} marginBottom={32}
          >
            <Link minHeight={44} 
              to="/get-started"
              paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
              style={FILL}
            >
              Get Started with Hanzo
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Link>
            <Link tap
              to="/contact"
              display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
            >
              Talk to an Expert
            </Link>
          </MotionBox>

          {/* Install command */}
          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            marginBottom={48}
          >
            <XStack display="inline-flex" alignItems="center" gap={12} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)">
              <Text render="code" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontFamily="var(--font-mono)" color="var(--neutral-300)">
                npx hanzo-dev
              </Text>
              <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                onClick={handleCopy}
                render="button" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
              >
                {copied ? (
                  <Check size={14} color="var(--neutral-500)" />
                ) : (
                  <Copy size={14} />
                )}
              </Box>
            </XStack>
          </MotionBox>

        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
