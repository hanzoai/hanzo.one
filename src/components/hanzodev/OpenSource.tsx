import { Anchor, Box, H2, MotionBox, Paragraph, XStack, FILL} from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, MessageCircle } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const OpenSource = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="56rem" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-700)" textAlign="center" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), rgb(255 255 255 / 0.08))" $md={{ padding: 48 }}
        >
          <XStack display="flex" justifyContent="center" marginBottom={24}>
            <XStack
              width={64} height={64} borderRadius="var(--radius-2xl)" display="flex" alignItems="center" justifyContent="center"
              style={{ backgroundColor: `${BRAND_COLOR}20` }}
            >
              <Github size={32} style={{ color: BRAND_COLOR }} />
            </XStack>
          </XStack>

          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Open Source
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
            Inspect, control, contribute
          </Paragraph>

          <Paragraph color="var(--neutral-400)" marginBottom={32} maxWidth="42rem" marginHorizontal="auto" lineHeight="var(--leading-relaxed)">
            The complete plugin is open-source and licensed under Apache-2.0.
            You can see, control, and modify how Hanzo works. Hanzo does not
            have an auto model, so you always know exactly what model is being
            used. No silent context compression or cut-off. You can see the
            context window size on each request, along with the full prompts.
          </Paragraph>

          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16} marginBottom={32}>
            <Anchor minHeight={44} 
              href="https://github.com/hanzoai/hanzo-dev"
              target="_blank"
              rel="noreferrer noopener"
              paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
              style={FILL}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box>
              Star on GitHub
            </Anchor>
            <Anchor minHeight={44} 
              href="https://discord.gg/hanzo"
              target="_blank"
              rel="noreferrer noopener"
              paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><MessageCircle size={16} /></Box>
              Join Discord
            </Anchor>
          </XStack>

          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
            Join our community on Discord and contribute to help shape Hanzo's
            future.
          </Paragraph>
        </MotionBox>

      </Box>
    </Box>
  );
};

export default OpenSource;
