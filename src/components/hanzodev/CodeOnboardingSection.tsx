import { Box, Grid, H3, H4, MotionBox, Paragraph, Text, XStack, FILL} from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { GitBranch, GitPullRequest, Zap } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const CodebaseDemo = () => {
  return (
    <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
      {/* Chat interface */}
      <Box padding={24}>
        {/* User message */}
        <XStack display="flex" gap={12} marginBottom={24}>
          <XStack width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-600)" display="flex" alignItems="center" justifyContent="center" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" flexShrink={0}>
            &gt;
          </XStack>
          <Box backgroundColor="var(--neutral-800)" borderRadius="var(--radius-lg)" paddingHorizontal={16} paddingVertical={12} maxWidth="32rem">
            <Paragraph color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">I'm new to this codebase. Can you explain it to me?</Paragraph>
          </Box>
        </XStack>

        {/* AI response */}
        <XStack display="flex" gap={12}>
          <XStack
            width={32} height={32} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" flexShrink={0}
            style={FILL}
          >
            ⏺
          </XStack>
          <Box flex={1}>
            <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={12}>
              I'll analyze the Excalidraw codebase structure and provide a high-level overview.
            </Paragraph>

            <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={16} marginBottom={16} borderWidth={1} borderColor="var(--neutral-800)">
              <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={8}>
                ⏺ Analyze(what: "Excalidraw codebase structure and provide a high-level overview...")
              </Paragraph>
            </Box>

            <Box rowGap={16} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
              <Paragraph color="var(--neutral-300)">
                Excalidraw is an open-source virtual whiteboard application with a hand-drawn style. It's designed for creating diagrams, wireframes, and collaborative drawings.
              </Paragraph>

              <div>
                <H4 color="var(--foreground)" fontWeight="600" marginBottom={8}>## Purpose</H4>
                <Box render="ul" color="var(--neutral-400)" rowGap={4} marginLeft={16}>
                  <li>• Web-based drawing tool with infinite canvas</li>
                  <li>• Hand-drawn aesthetic with support for shapes, arrows, text</li>
                  <li>• End-to-end encrypted collaboration</li>
                  <li>• Works offline as a PWA (Progressive Web App)</li>
                </Box>
              </div>

              <div>
                <H4 color="var(--foreground)" fontWeight="600" marginBottom={8}>## Architecture</H4>
                <Paragraph color="var(--neutral-400)" marginBottom={8}>The project is organized as a monorepo with these main components:</Paragraph>
                <Box marginLeft={16} rowGap={8}>
                  <div>
                    <Text color="var(--foreground)">1. Core Package</Text>
                    <Text color="var(--neutral-500)"> (packages/excalidraw)</Text>
                  </div>
                  <div>
                    <Text color="var(--foreground)">2. Web Application</Text>
                    <Text color="var(--neutral-500)"> (excalidraw-app/)</Text>
                  </div>
                  <div>
                    <Text color="var(--foreground)">3. Support Packages</Text>
                    <Text color="var(--neutral-500)"> - common, element, math, utils</Text>
                  </div>
                </Box>
              </div>

              <div>
                <H4 color="var(--foreground)" fontWeight="600" marginBottom={8}>## Technology Stack</H4>
                <Box render="ul" color="var(--neutral-400)" rowGap={4} marginLeft={16}>
                  <li>• React for UI</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Firebase for collaboration backend</li>
                  <li>• Jotai for state management</li>
                  <li>• Vite for development and building</li>
                </Box>
              </div>
            </Box>
          </Box>
        </XStack>
      </Box>
    </Box>
  );
};

const features = [
  {
    icon: GitBranch,
    title: "Code onboarding",
    description: "Hanzo Dev maps and explains entire codebases in seconds. It uses agentic search to understand project structure and dependencies without you having to manually select context files.",
  },
  {
    icon: GitPullRequest,
    title: "Turn issues into PRs",
    description: "Stop bouncing between tools. Hanzo Dev integrates with GitHub, GitLab, and your command line tools to handle the entire workflow—reading issues, writing code, running tests, and submitting PRs—all from your terminal.",
  },
  {
    icon: Zap,
    title: "Make powerful edits",
    description: "Hanzo Dev's understanding of your codebase and dependencies enables it to make powerful, multi-file edits that work.",
  },
];

const CodeOnboardingSection = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)">
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        {/* Demo */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          marginBottom={64}
        >
          <CodebaseDemo />
        </MotionBox>

        {/* Feature cards */}
        <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionBox
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
              >
                <XStack
                  width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
                  style={{ backgroundColor: `${BRAND_COLOR}20` }}
                >
                  <Icon width={24} height={24} style={{ color: BRAND_COLOR }} />
                </XStack>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{feature.title}</H3>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{feature.description}</Paragraph>
              </MotionBox>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default CodeOnboardingSection;
