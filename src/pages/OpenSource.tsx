import { Anchor, Box, Helmet, Link, MotionBox, MotionText, Text, FILL} from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import { Github, Star, GitFork, Heart, ArrowRight, ExternalLink, Code, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OSSCatalog from "@/components/oss/OSSCatalog";

const BRAND_COLOR = "var(--foreground)";

const stats = [
  { label: "Open Source Projects", value: "260+", icon: Code },
  { label: "GitHub Stars", value: "50K+", icon: Star },
  { label: "Contributors", value: "500+", icon: Users },
  { label: "Forks", value: "10K+", icon: GitFork },
];

const OpenSource = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Open Source - Hanzo AI</title>
        <meta
          name="description"
          content="Explore Hanzo AI's open source projects. 260+ repositories powering AI infrastructure, developer tools, and blockchain technology."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <Box render="section" position="relative" paddingTop={96} paddingBottom={64} paddingHorizontal={16} overflow="hidden" $md={{ paddingHorizontal: 32 }} $lg={{ paddingHorizontal: 48 }}>
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
            <Box textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                flexDirection="row" display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={24}
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <Github size={14} />
                Open Source First
              </MotionBox>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
              >
                <Text color="var(--foreground)">Building in the</Text>
                <br />
                <Text color="var(--neutral-400)">open.</Text>
              </MotionText>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={40} maxWidth="var(--container-prose)" marginHorizontal="auto" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
              >
                We believe in the power of open source. Our tools, libraries, and infrastructure
                are freely available for the developer community.
              </MotionText>

              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16} marginBottom={48}
              >
                <Anchor minHeight={44} 
                  href="https://github.com/hanzoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={FILL}
                >
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box>
                  View on GitHub
                </Anchor>
                <Anchor minHeight={44} 
                  href="https://github.com/hanzoai/hanzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
                >
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Star size={16} /></Box>
                  Star Our Repos
                </Anchor>
              </MotionBox>

              {/* Stats */}
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} $md={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}
              >
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <Box
                      key={stat.label}
                      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={16}
                    >
                      <Icon width={20} height={20} color="var(--neutral-500)" marginBottom={8} marginHorizontal="auto" />
                      <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">{stat.value}</Box>
                      <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{stat.label}</Box>
                    </Box>
                  );
                })}
              </MotionBox>
            </Box>
          </Box>
        </Box>

        {/* OSS Catalog */}
        <OSSCatalog />

        {/* CTA Section */}
        <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $md={{ paddingHorizontal: 32 }}>
          <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" pointerEvents="none" />
          <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)" pointerEvents="none" />

          <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center" position="relative" zIndex={10}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              flexDirection="row" display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={24} backgroundColor="rgb(255 255 255 / 0.2)" color="var(--foreground)"
            >
              <Heart size={14} />
              Join the Community
            </MotionBox>

            <MotionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}
            >
              Contribute to open source
            </MotionText>

            <MotionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={40} maxWidth="42rem" marginHorizontal="auto"
            >
              We welcome contributions of all kinds - code, documentation, bug reports, and feature requests.
              Join our community of developers building the future of AI.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16}
            >
              <Anchor minHeight={44} 
                href="https://github.com/hanzoai/hanzo/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-base)" lineHeight="var(--leading-base)" hoverStyle={{ opacity: 0.9 }}
                style={FILL}
              >
                Start Contributing
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
              </Anchor>
              <Anchor minHeight={44} 
                href="https://discord.gg/hanzo"
                target="_blank"
                rel="noopener noreferrer"
                paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-base)" lineHeight="var(--leading-base)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                Join Discord
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={20} /></Box>
              </Anchor>
            </MotionBox>
          </Box>
        </Box>
      </main>

      <Footer />
    </Box>
  );
};

export default OpenSource;
