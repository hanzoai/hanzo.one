import { Anchor, Box, Link, MotionBox, MotionText, Text, XStack, FILL} from '@/gui'
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";


const FooterCTA = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL hanzo.sh/install.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
        <MotionText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}
        >
          Ship faster. Keep control.
        </MotionText>

        <MotionText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={40} maxWidth="42rem" marginHorizontal="auto"
        >
          All coding agents in one workspace. Parallel execution, evidence-driven output,
          and policies you control.
        </MotionText>

        {/* CTAs */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16} marginBottom={32}
        >
          <Link minHeight={44} 
            to="/get-started"
            paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-base)" lineHeight="var(--leading-base)" hoverStyle={{ opacity: 0.9 }}
            style={FILL}
          >
            Start free
            <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
          </Link>
          <Anchor minHeight={44} 
            href="https://marketplace.visualstudio.com/items?itemName=hanzo.hanzo-dev"
            target="_blank"
            rel="noreferrer noopener"
            paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-base)" lineHeight="var(--leading-base)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
          >
            Install VS Code extension
            <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={20} /></Box>
          </Anchor>
        </MotionBox>

        {/* Install command */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          marginBottom={24}
        >
          <XStack display="inline-flex" alignItems="center" gap={12} paddingHorizontal={16} paddingVertical={12} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)">
            <Text render="code" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontFamily="var(--font-mono)" color="var(--neutral-300)">
              curl -fsSL hanzo.sh/install.sh | sh
            </Text>
            <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
              onClick={handleCopy}
              render="button" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
            >
              {copied ? (
                <Check size={16} color="var(--neutral-500)" />
              ) : (
                <Copy size={16} />
              )}
            </Box>
          </XStack>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Anchor tap
            href="https://docs.hanzo.ai/dev"
            target="_blank"
            rel="noreferrer noopener"
            fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
          >
            Read the documentation
          </Anchor>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default FooterCTA;
