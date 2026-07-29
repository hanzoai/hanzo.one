import { Anchor, Box as GuiBox, Grid, H2, H3, Helmet, Link, MotionBox, MotionText, Paragraph, Text, XStack, FILL} from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  Code2,
  Eye,
  Box,
  Video,
  Music,
  Zap,
  ExternalLink,
  Brain,
  Shield,
  Globe,
  Cpu,
  Layers,
  Clock,
} from "lucide-react";

// Model categories overview
const MODEL_CATEGORIES = [
  {
    icon: Brain,
    title: "Core Language Models",
    count: "6 models",
    description: "0.6B to 32B parameters for edge to cloud deployment. Optimized for real-time instruction following and reasoning.",
  },
  {
    icon: Eye,
    title: "Multimodal Models",
    count: "10 models",
    description: "Vision, audio, video, 3D generation, and spatial understanding. Seamless XR/VR platform integration.",
  },
  {
    icon: Code2,
    title: "Zen Coder",
    count: "5 models",
    description: "4B to 1T parameters trained on 8.47B tokens. State-of-the-art agentic coding and tool use.",
  },
  {
    icon: Shield,
    title: "Specialized Systems",
    count: "8 models",
    description: "Agent frameworks, safety guardrails, embeddings, and IDE tools for production AI.",
  },
];

// Key benefits
const BENEFITS = [
  {
    icon: Clock,
    title: "Real-Time Performance",
    description: "Sub-10ms latency with optimized quantization and edge deployment. Seamless XR integration.",
  },
  {
    icon: Globe,
    title: "Spatial Awareness",
    description: "Native 3D understanding, scene generation, and spatial audio for immersive environments.",
  },
  {
    icon: Layers,
    title: "Multimodal Fusion",
    description: "Unified understanding across vision, language, audio, and 3D. Real-time gesture and voice.",
  },
  {
    icon: Cpu,
    title: "Open Source",
    description: "Fully open models, training code, and infrastructure. Complete control and customization.",
  },
];

const BRAND_COLOR = "#8b5cf6"; // Purple for Zen

// Quick stats for the demo panel
const QUICK_STATS = [
  { label: "Models", value: "30+" },
  { label: "Params", value: "0.6B-1T" },
  { label: "Tokens", value: "8.47B" },
  { label: "Latency", value: "<10ms" },
];

const Zen = () => {
  return (
    <GuiBox minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Zen LM - Open Foundation Models for Agentic AI | Hanzo AI</title>
        <meta
          name="description"
          content="Real-time hyper-modal AI for XR/VR/Robotics. 30+ open models from 0.6B to 1T parameters across language, vision, audio, video, and 3D."
        />
      </Helmet>
      <Navbar />

      <main>
        {/* Hero Section */}
        <GuiBox render="section" position="relative" paddingTop={96} paddingBottom={64} paddingHorizontal={16} overflow="hidden" $md={{ paddingHorizontal: 32 }} $lg={{ paddingHorizontal: 48 }}>
          {/* Background gradient */}
          <GuiBox position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" zIndex={0} pointerEvents="none">
            <GuiBox
              position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)" opacity={0.2}
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </GuiBox>

          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
            <Grid display="grid" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 64 }}>
              {/* Left Column */}
              <div>
                <MotionBox
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  marginBottom={24}
                >
                  <Text display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" backgroundColor="rgb(255 255 255 / 0.1)" color="var(--foreground)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
                    <Zap size={12} />
                    Open Source AI
                  </Text>
                </MotionBox>

                <MotionText
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
                >
                  <Text color="var(--foreground)">Real-Time Hyper-Modal AI</Text>
                  <br />
                  <Text color="var(--neutral-400)">for XR/VR/Robotics</Text>
                </MotionText>

                <MotionText
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={32} maxWidth="36rem" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
                >
                  Zen LM powers next-generation XR/VR applications and robotic systems with real-time multimodal
                  understanding. Sub-10ms latency for seamless human-AI interaction.
                </MotionText>

                {/* CTAs */}
                <MotionBox
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" gap={16} marginBottom={32}
                >
                  <Link minHeight={44} 
                    to="/zen/models"
                    paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                    style={FILL}
                  >
                    Explore Models
                    <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></GuiBox>
                  </Link>
                  <Anchor minHeight={44} 
                    href="https://zenlm.org/research"
                    target="_blank"
                    rel="noopener noreferrer"
                    paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
                  >
                    <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><ExternalLink size={16} /></GuiBox>
                    Read Research
                  </Anchor>
                </MotionBox>

                {/* Quick links */}
                <MotionBox
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  flexDirection="row" display="flex" flexWrap="wrap" gap={12}
                >
                  <Anchor tap
                    href="https://huggingface.co/zenlm"
                    target="_blank"
                    rel="noopener noreferrer"
                    display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-400)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
                  >
                    🤗 HuggingFace
                  </Anchor>
                  <Anchor tap
                    href="https://github.com/zenlm"
                    target="_blank"
                    rel="noopener noreferrer"
                    display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-400)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
                  >
                    <Globe size={16} />
                    GitHub
                  </Anchor>
                  <Anchor tap
                    href="https://zenlm.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-400)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
                  >
                    <Globe size={16} />
                    zenlm.org
                  </Anchor>
                </MotionBox>
              </div>

              {/* Right Column: Stats Demo */}
              <MotionBox
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <GuiBox borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="var(--surface-overlay)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)">
                  <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)">
                    <XStack display="flex" gap={6}>
                      <GuiBox width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                      <GuiBox width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                      <GuiBox width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                    </XStack>
                    <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)" marginLeft={8}>zen-models</Text>
                  </XStack>
                  <GuiBox padding={24} backgroundColor="var(--neutral-950)">
                    <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} marginBottom={24}>
                      {QUICK_STATS.map((stat) => (
                        <GuiBox key={stat.label} padding={16} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" textAlign="center">
                          <GuiBox fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={4}>{stat.value}</GuiBox>
                          <GuiBox fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" textTransform="uppercase" letterSpacing="0.05em">{stat.label}</GuiBox>
                        </GuiBox>
                      ))}
                    </Grid>
                    <GuiBox rowGap={12}>
                      <XStack display="flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                        <Brain size={16} color="var(--foreground)" />
                        <Text color="var(--neutral-300)">Language • Vision • Audio • Video • 3D</Text>
                      </XStack>
                      <XStack display="flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                        <Code2 size={16} color="var(--foreground)" />
                        <Text color="var(--neutral-300)">Agentic coding with tool use</Text>
                      </XStack>
                      <XStack display="flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                        <Shield size={16} color="var(--foreground)" />
                        <Text color="var(--neutral-300)">Apache 2.0 • Open weights & training</Text>
                      </XStack>
                    </GuiBox>
                  </GuiBox>
                </GuiBox>
              </MotionBox>
            </Grid>
          </GuiBox>
        </GuiBox>

        {/* Complete AI Stack Section */}
        <GuiBox render="section" paddingVertical={80} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center" marginBottom={48}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={12} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                Complete AI Stack for Immersive Computing
              </H2>
            </MotionBox>

            <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              {MODEL_CATEGORIES.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <MotionBox
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    
                    padding={24} backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)", y: -4 }}
                  >
                    <XStack marginHorizontal="auto" width={48} height={48} marginBottom={16} display="flex" alignItems="center" justifyContent="center" borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
                      <Icon width={24} height={24} color="var(--foreground)" />
                    </XStack>
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={4}>{category.title}</H3>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" marginBottom={8}>{category.count}</Paragraph>
                    <Paragraph color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{category.description}</Paragraph>
                  </MotionBox>
                );
              })}
            </Grid>
          </GuiBox>
        </GuiBox>

        {/* Why Zen Section */}
        <GuiBox render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--surface-card-emphasis)" $md={{ paddingHorizontal: 32 }}>
          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center" marginBottom={48}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={12} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                Why Zen for XR/VR/Robotics?
              </H2>
            </MotionBox>

            <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              {BENEFITS.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <MotionBox
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    
                    padding={24} backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
                  >
                    <XStack marginHorizontal="auto" width={48} height={48} marginBottom={16} display="flex" alignItems="center" justifyContent="center" borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
                      <Icon width={24} height={24} color="var(--foreground)" />
                    </XStack>
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{benefit.title}</H3>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{benefit.description}</Paragraph>
                  </MotionBox>
                );
              })}
            </Grid>
          </GuiBox>
        </GuiBox>

        {/* Get Started Section */}
        <GuiBox render="section" paddingVertical={80} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center" marginBottom={48}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={12} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Get Started</H2>
            </MotionBox>

            <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              <MotionBox
                href="https://huggingface.co/zenlm"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                padding={24} backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)", y: -4 }}
              >
                <GuiBox fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" marginBottom={16}>🤗</GuiBox>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)" marginBottom={8}>HuggingFace</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Access all 30+ models via HuggingFace Hub</Paragraph>
              </MotionBox>

              <MotionBox
                href="https://github.com/zenlm"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                padding={24} backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)", y: -4 }}
              >
                <GuiBox fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" marginBottom={16}>💻</GuiBox>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)" marginBottom={8}>GitHub</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Training code, datasets, and documentation</Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                padding={24} backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)", y: -4 }}
              >
                <Link minHeight={44} to="/zen/models" display="block">
                  <GuiBox fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" marginBottom={16}>📚</GuiBox>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)" marginBottom={8}>Models</H3>
                  <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Full catalog with specs and downloads</Paragraph>
                </Link>
              </MotionBox>
            </Grid>
          </GuiBox>
        </GuiBox>

        {/* CTA Section */}
        <GuiBox render="section" paddingVertical={80} paddingHorizontal={16} borderTopWidth={1} borderColor="var(--neutral-800)" $md={{ paddingHorizontal: 32 }}>
          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center"
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16}>Ready to build with Zen?</H2>
              <Paragraph color="var(--neutral-400)" marginBottom={32} maxWidth="42rem" marginHorizontal="auto">
                All models are open source under Apache 2.0 or MIT license. Start building today.
              </Paragraph>
              <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
                <Link minHeight={44} 
                  to="/zen/models"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={FILL}
                >
                  Explore All Models
                  <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></GuiBox>
                </Link>
                <Link tap
                  to="/dev"
                  display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
                >
                  Try Hanzo Dev
                </Link>
                <Anchor minHeight={44} 
                  href="https://zenlm.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
                >
                  <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Globe size={16} /></GuiBox>
                  Visit zenlm.org
                </Anchor>
              </XStack>
            </MotionBox>
          </GuiBox>
        </GuiBox>
      </main>

      <Footer />
    </GuiBox>
  );
};

export default Zen;
