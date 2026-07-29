import { Anchor, Box, Grid, H2, H3, H4, Helmet, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformHero from "@/components/platform/PlatformHero";
import PaaSCapabilities from "@/components/platform/PaaSCapabilities";
import TrustedBy from "@/components/platform/TrustedBy";
import DeveloperLove from "@/components/platform/DeveloperLove";
import CallToAction from "@/components/platform/CallToAction";
import ZenBackground from "@/components/zen/ZenBackground";
import ZenQuoteSection from "@/components/zen/ZenQuoteSection";
import { motion } from "framer-motion";
import { Github, Cloud, Server, Lock, Code2, Network, Terminal, ArrowRight } from "lucide-react";


const BRAND_COLOR = "var(--foreground)";

const DeploymentOptions = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} color="var(--foreground)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Deploy Your Way
          </H2>
          <Paragraph color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Same codebase, same APIs, your choice of infrastructure.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {/* Self-Hosted */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack
              width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
              style={{ backgroundColor: `${BRAND_COLOR}20` }}
            >
              <Server size={24} style={{ color: BRAND_COLOR }} />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>Self-Hosted</H3>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>
              Run on your own servers, VMs, or containers. Full control, complete data sovereignty.
            </Paragraph>
            <Box render="ul" rowGap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Text color="var(--foreground)">✓</Text> Docker & Kubernetes ready
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Text color="var(--foreground)">✓</Text> Air-gapped deployments
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Text color="var(--foreground)">✓</Text> No external dependencies
              </XStack>
            </Box>
            <Anchor minHeight={44} 
              href="https://github.com/hanzoai/platform"
              target="_blank"
              rel="noreferrer noopener"
              marginTop={24} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ color: "#fd6666" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box>
              View on GitHub
            </Anchor>
          </MotionBox>

          {/* Hanzo Cloud */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack
              width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
              style={{ backgroundColor: "#3b82f620" }}
            >
              <Cloud size={24} color="var(--neutral-500)" />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>Hanzo Cloud</H3>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>
              Fully managed platform with global edge deployment and automatic scaling.
            </Paragraph>
            <Box render="ul" rowGap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Text color="var(--neutral-500)">✓</Text> 35+ global regions
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Text color="var(--neutral-500)">✓</Text> Zero-config deployments
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Text color="var(--neutral-500)">✓</Text> 99.99% SLA
              </XStack>
            </Box>
            <Link minHeight={44} 
              to="/cloud"
              marginTop={24} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}
            >
              Explore Cloud
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Link>
          </MotionBox>

          {/* Hybrid */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack
              width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
              style={{ backgroundColor: "#8b5cf620" }}
            >
              <Network size={24} color="var(--neutral-500)" />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>Hybrid</H3>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>
              Keep sensitive data on-premise while leveraging cloud for global reach.
            </Paragraph>
            <Box render="ul" rowGap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Text color="var(--neutral-500)">✓</Text> Data residency compliance
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Text color="var(--neutral-500)">✓</Text> Edge + origin architecture
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Text color="var(--neutral-500)">✓</Text> Unified management
              </XStack>
            </Box>
            <Link minHeight={44} 
              to="/enterprise"
              marginTop={24} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}
            >
              Contact Sales
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Link>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

const OpenSourceBenefits = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-700)" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), rgb(255 255 255 / 0.08))"
        >
          <XStack display="flex" alignItems="center" gap={16} marginBottom={32}>
            <Github size={32} color="var(--foreground)" />
            <div>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">100% Open Source</H3>
              <Paragraph color="var(--neutral-400)">MIT Licensed. Fork, modify, contribute.</Paragraph>
            </div>
          </XStack>

          <Grid display="grid" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            <Box rowGap={16}>
              <Code2 size={40} color="var(--foreground)" />
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700" color="var(--foreground)">MIT Licensed</H4>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                Use it commercially, modify it freely. No vendor lock-in, no surprise licensing changes.
              </Paragraph>
            </Box>

            <Box rowGap={16}>
              <Lock size={40} color="var(--foreground)" />
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700" color="var(--foreground)">Data Sovereignty</H4>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                Your code, your data, your infrastructure. Complete control over your stack.
              </Paragraph>
            </Box>

            <Box rowGap={16}>
              <Terminal size={40} color="var(--foreground)" />
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700" color="var(--foreground)">Developer First</H4>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                Built by developers, for developers. Extensive docs, active community, responsive maintainers.
              </Paragraph>
            </Box>
          </Grid>

          <Box marginTop={32} paddingTop={32} borderTopWidth={1} borderColor="var(--neutral-700)" textAlign="center">
            <Anchor minHeight={44} 
              href="https://github.com/hanzoai/platform"
              target="_blank"
              rel="noreferrer noopener"
              paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-600)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box>
              Star on GitHub
            </Anchor>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

const Platform = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)" overflowX="hidden">
      <Helmet>
        <title>Hanzo Platform - Open Source Backend-as-a-Service</title>
        <meta
          name="description"
          content="Build production applications with Auth, Database, Storage, Functions, and more. Self-host or deploy to Hanzo Cloud."
        />
      </Helmet>

      <ZenBackground />
      <Navbar />

      <main>
        <PlatformHero />
        <PaaSCapabilities />
        <ZenQuoteSection
          quote="The wise engineer owns their tools, lest their tools own them."
          attribution="Principle 14"
        />
        <DeploymentOptions />
        <OpenSourceBenefits />
        <TrustedBy />
        <DeveloperLove />
        <CallToAction />
      </main>

      <Footer />
    </Box>
  );
};

export default Platform;
