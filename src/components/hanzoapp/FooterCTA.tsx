import { Anchor, Box, H2, Link, MotionBox, Paragraph, YStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import { ArrowRight, Download } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const FooterCTA = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" position="relative" overflow="hidden" $md={{ paddingHorizontal: 32 }}>
      {/* Background gradient */}
      <Box
        position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)" opacity={0.2}
        style={{
          background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
      />

      <Box maxWidth="56rem" marginHorizontal="auto" position="relative" zIndex={10} textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Start building today
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" marginBottom={32} maxWidth="42rem" marginHorizontal="auto">
            Web, desktop, local, or decentralized. Choose your way.
          </Paragraph>

          <YStack display="flex" flexDirection="column" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}>
            <Anchor minHeight={44} 
              href="https://hanzo.app"
              target="_blank"
              rel="noreferrer noopener"
              justifyContent="center" paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" color="var(--foreground)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ opacity: 0.9 }}
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Open hanzo.app
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Anchor>
            <Link minHeight={44} 
              to="/download"
              justifyContent="center" paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" color="var(--foreground)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" borderWidth={1} borderColor="var(--neutral-700)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Download size={20} /></Box>
              Download desktop
            </Link>
          </YStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default FooterCTA;
