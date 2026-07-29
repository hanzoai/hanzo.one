import { Anchor, Box, Grid, H2, H3, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import { Github, ExternalLink, Heart, ArrowRight, Rocket, Network } from "lucide-react";

// GitHub organizations
const githubOrgs = [
  { name: "hanzoai", label: "Hanzo AI", description: "AI infrastructure and models", url: "https://github.com/hanzoai" },
  { name: "hanzo-js", label: "Hanzo JS", description: "JavaScript & TypeScript SDKs", url: "https://github.com/hanzo-js" },
  { name: "hanzo-apps", label: "Hanzo Apps", description: "Templates and starters", url: "https://github.com/hanzo-apps" },
];

// Repos organized by org
const repos = {
  hanzoai: [
    { name: "hanzo", description: "The complete AI platform. Deploy anywhere.", language: "TypeScript", featured: true },
    { name: "mcp", description: "260+ Model Context Protocol tools and servers", language: "TypeScript", featured: true },
    { name: "llm", description: "Unified gateway to 100+ AI models", language: "Python", featured: true },
    { name: "dev", description: "AI coding agent for the terminal", language: "TypeScript" },
    { name: "auto", description: "Workflow automation with AI agents", language: "TypeScript" },
    { name: "flow", description: "Visual AI/LLM workflow builder", language: "TypeScript" },
  ],
  "hanzo-js": [
    { name: "hanzo.js", description: "Core JavaScript SDK for Hanzo platform", language: "TypeScript" },
    { name: "ui", description: "React component library for AI apps", language: "TypeScript" },
    { name: "kv", description: "Redis-compatible key-value store client", language: "TypeScript" },
    { name: "mq", description: "High-performance message queue client", language: "TypeScript" },
  ],
  "hanzo-apps": [
    { name: "ai-chat", description: "Full-featured AI chat application", language: "TypeScript", template: true },
    { name: "rag-starter", description: "RAG application with vector search", language: "TypeScript", template: true },
    { name: "agent-toolkit", description: "Multi-agent application starter", language: "TypeScript", template: true },
  ],
};

const features = [
  {
    icon: "100%",
    title: "Open Source Core",
    description: "Every core component is open source and MIT/Apache 2.0 licensed",
  },
  {
    icon: <Heart size={20} />,
    title: "Community Driven",
    description: "Built with and for the developer community",
  },
  {
    icon: <Github size={20} />,
    title: "Self-Hostable",
    description: "Run the entire platform on your own infrastructure",
  },
];

const OpenSourceSection = () => {
  // Show featured repos from hanzoai
  const featuredRepos = repos.hanzoai.slice(0, 6);
  // Show templates from hanzo-apps
  const templates = repos["hanzo-apps"].slice(0, 3);

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" position="relative" $md={{ paddingHorizontal: 32 }}>
      {/* Subtle background pattern */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.03}>
        <Box
          position="absolute" top={0} right={0} bottom={0} left={0}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </Box>

      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <XStack display="inline-flex" alignItems="center" gap={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
               style={{ color: "var(--foreground)", borderColor: "rgba(253, 68, 68, 0.3)" }}>
            <Github size={16} />
            Open Source
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Built in the open
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            We believe the future of AI infrastructure should be open. View our code, contribute, or self-host the entire platform.
          </Paragraph>
        </MotionBox>

        {/* GitHub Organizations */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" gap={16} marginBottom={48}
        >
          {githubOrgs.map((org) => (
            <Anchor
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              group display="flex" alignItems="center" gap={12} paddingHorizontal={20} paddingVertical={12} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-900)", borderColor: "var(--neutral-700)" }}
            >
              <Github size={20} color="var(--neutral-400)" />
              <div>
                <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>{org.label}</Box>
                <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{org.description}</Box>
              </div>
              <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ color: "var(--neutral-400)" }}><ExternalLink size={14} color="var(--neutral-600)" /></Box>
            </Anchor>
          ))}
        </MotionBox>

        {/* Features row */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginBottom={64} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          {features.map((feature, index) => (
            <MotionBox
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              textAlign="center" padding={24}
            >
              <XStack width={48} height={48} borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.1)" display="flex" alignItems="center" justifyContent="center" marginHorizontal="auto" marginBottom={16} color="var(--foreground)" fontWeight="700">
                {typeof feature.icon === "string" ? feature.icon : feature.icon}
              </XStack>
              <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{feature.title}</H3>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{feature.description}</Paragraph>
            </MotionBox>
          ))}
        </MotionBox>

        {/* Featured Repos grid - 3x2 on desktop */}
        <Box marginBottom={64}>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" color="var(--foreground)" marginBottom={24} textAlign="center">Core Infrastructure</H3>
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {featuredRepos.map((repo, index) => (
              <MotionBox
                key={repo.name}
                href={`https://github.com/hanzoai/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                group padding={20} borderRadius="var(--radius-xl)" borderWidth={1} backgroundColor="var(--surface-card-emphasis)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderColor={repo.featured ? "rgb(255 255 255 / 0.3)" : "var(--neutral-800)"} hoverStyle={{ ...({ backgroundColor: "var(--neutral-900)" }), ...(repo.featured ? { borderColor: "var(--border-strong)" } : { borderColor: "var(--neutral-700)" }) }}
              >
                <XStack display="flex" alignItems="flex-start" justifyContent="space-between" marginBottom={12}>
                  <XStack display="flex" alignItems="center" gap={8}>
                    <Github size={16} color="var(--neutral-400)" />
                    <Text fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">hanzoai/{repo.name}</Text>
                  </XStack>
                  <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ color: "var(--neutral-400)" }}><ExternalLink size={14} color="var(--neutral-600)" /></Box>
                </XStack>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={12} WebkitLineClamp={2} display="-webkit-box" WebkitBoxOrient="vertical" overflow="hidden">{repo.description}</Paragraph>
                <XStack display="flex" alignItems="center" gap={12}>
                  <Text fontSize="11px" paddingHorizontal={6} paddingVertical={2} borderRadius="var(--radius)" backgroundColor="var(--neutral-800)" color="var(--neutral-500)">{repo.language}</Text>
                </XStack>
              </MotionBox>
            ))}
          </Grid>
        </Box>

        {/* Templates Section */}
        <Box marginBottom={64}>
          <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={24}>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" color="var(--foreground)">Templates &amp; Starters</H3>
            <Anchor tap
              href="https://github.com/hanzo-apps"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" gap={4} hoverStyle={{ color: "var(--foreground)" }}
            >
              View all templates
              <ExternalLink size={14} />
            </Anchor>
          </XStack>
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {templates.map((template, index) => (
              <MotionBox
                key={template.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                group padding={20} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-900)", borderColor: "var(--neutral-700)" }}
              >
                <XStack display="flex" alignItems="flex-start" justifyContent="space-between" marginBottom={12}>
                  <XStack display="flex" alignItems="center" gap={8}>
                    <Rocket size={16} color="var(--foreground)" />
                    <Text fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">{template.name}</Text>
                  </XStack>
                </XStack>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={16} WebkitLineClamp={2} display="-webkit-box" WebkitBoxOrient="vertical" overflow="hidden">{template.description}</Paragraph>
                <XStack display="flex" alignItems="center" gap={8}>
                  <Anchor tap
                    href={`https://hanzo.app/new?template=${template.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    flex={1} textAlign="center" paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-800)" color="var(--foreground)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}
                  >
                    Launch in Hanzo
                  </Anchor>
                  <Anchor tap
                    href={`https://github.com/hanzo-apps/${template.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-700)" color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                  >
                    <Github size={16} />
                  </Anchor>
                </XStack>
              </MotionBox>
            ))}
          </Grid>
        </Box>

        {/* Hanzo Network Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--border-strong)" padding={32} marginBottom={48} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), transparent)"
        >
          <Grid display="grid" gap={32} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <div>
              <XStack display="inline-flex" alignItems="center" gap={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={16}
                   style={{ color: "var(--foreground)", borderColor: "rgba(253, 68, 68, 0.3)" }}>
                <Network size={16} />
                Hanzo Network
              </XStack>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
                Decentralized AI compute
              </H3>
              <Paragraph color="var(--neutral-400)" marginBottom={24}>
                Join the Hanzo Network to contribute GPU power for AI inference and training. Earn rewards while powering the next generation of AI applications.
              </Paragraph>
              <XStack display="flex" flexWrap="wrap" gap={12}>
                <Anchor tap
                  href="https://hanzo.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" backgroundColor="var(--neutral-800)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ opacity: 0.9 }}
                >
                  Learn more
                  <ArrowRight size={16} />
                </Anchor>
                <Anchor tap
                  href="https://github.com/hanzoai/network"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" borderWidth={1} borderColor="var(--neutral-700)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
                >
                  <Github size={16} />
                  View source
                </Anchor>
              </XStack>
            </div>
            <XStack display="flex" alignItems="center" justifyContent="center">
              <XStack width={128} height={128} borderRadius="var(--radius-2xl)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center">
                <Network size={64} color="var(--foreground)" />
              </XStack>
            </XStack>
          </Grid>
        </MotionBox>

        {/* Research Link */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          textAlign="center" marginBottom={48}
        >
          <Paragraph color="var(--neutral-400)" marginBottom={16}>
            Read our research papers and technical specifications
          </Paragraph>
          <Anchor tap
            href="https://zenlm.org"
            target="_blank"
            rel="noopener noreferrer"
            display="inline-flex" alignItems="center" gap={8} color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}
          >
            zenlm.org - AI Research &amp; Philosophy
            <ExternalLink size={16} />
          </Anchor>
        </MotionBox>

        {/* CTAs */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}
        >
          <Link tap
            to="/open-source"
            display="inline-flex" alignItems="center" gap={8} paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" color="var(--foreground)" backgroundColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}
          >
            Browse all projects
            <ArrowRight size={16} />
          </Link>
          <Anchor tap
            href="https://github.com/hanzoai"
            target="_blank"
            rel="noopener noreferrer"
            display="inline-flex" alignItems="center" gap={8} paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" color="var(--foreground)" borderWidth={1} borderColor="var(--neutral-700)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
          >
            <Github size={20} />
            View on GitHub
            <ExternalLink size={16} />
          </Anchor>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default OpenSourceSection;
