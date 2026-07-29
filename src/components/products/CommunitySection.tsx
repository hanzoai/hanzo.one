import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'
import { motion } from "framer-motion";
import { ExternalLink, Github, MessageCircle, Users, BookOpen } from "lucide-react";

interface CommunityLink {
  type: "discord" | "github" | "docs" | "discussions" | "twitter" | "slack";
  url: string;
  label?: string;
}

interface CommunitySectionProps {
  productName: string;
  links: CommunityLink[];
  contributors?: number;
  stars?: string;
}

const iconMap = {
  discord: MessageCircle,
  github: Github,
  docs: BookOpen,
  discussions: Users,
  twitter: () => (
    <Box display="inline-block" render="svg" width={20} height={20} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </Box>
  ),
  slack: () => (
    <Box display="inline-block" render="svg" width={20} height={20} fill="currentColor" viewBox="0 0 24 24">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </Box>
  ),
};

const labelMap = {
  discord: "Join Discord",
  github: "Star on GitHub",
  docs: "Read Docs",
  discussions: "Discussions",
  twitter: "Follow on X",
  slack: "Join Slack",
};

export function CommunitySection({ productName, links, contributors, stars }: CommunitySectionProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      paddingVertical={64} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}
    >
      <Box maxWidth="56rem" marginHorizontal="auto">
        <XStack display="flex" alignItems="center" gap={8} marginBottom={8}>
          <Users size={20} color="var(--foreground)" />
          <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)" textTransform="uppercase" letterSpacing="0.05em">
            Community
          </Text>
        </XStack>

        <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={8} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
          Join the {productName} Community
        </H2>
        <Paragraph color="var(--neutral-400)" marginBottom={32}>
          Get help, share ideas, and contribute to the project
        </Paragraph>

        {/* Stats */}
        {(contributors || stars) && (
          <XStack display="flex" gap={24} marginBottom={32}>
            {stars && (
              <XStack display="flex" alignItems="center" gap={8}>
                <Text fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">{stars}</Text>
                <Text color="var(--neutral-400)">GitHub Stars</Text>
              </XStack>
            )}
            {contributors && (
              <XStack display="flex" alignItems="center" gap={8}>
                <Text fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">{contributors}+</Text>
                <Text color="var(--neutral-400)">Contributors</Text>
              </XStack>
            )}
          </XStack>
        )}

        {/* Links Grid */}
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {links.map((link, index) => {
            const Icon = iconMap[link.type];
            const label = link.label || labelMap[link.type];

            return (
              <MotionBox
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                flexDirection="row" display="flex" alignItems="center" gap={12} padding={16} backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))"
              >
                <XStack width={40} height={40} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
                  {typeof Icon === "function" ? <Icon /> : <Icon width={20} height={20} color="var(--neutral-300)" />}
                </XStack>
                <Box flex={1}>
                  <Text fontWeight="500" color="var(--foreground)">{label}</Text>
                </Box>
                <ExternalLink size={16} color="var(--neutral-500)" />
              </MotionBox>
            );
          })}
        </Grid>

        {/* Contribute CTA */}
        <Box marginTop={32} padding={24} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.1), transparent)">
          <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>
            Want to Contribute?
          </H3>
          <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>
            We welcome contributions of all kinds: bug reports, feature requests, documentation improvements, and code contributions.
          </Paragraph>
          <Anchor tap
            href={links.find(l => l.type === "github")?.url + "/blob/main/CONTRIBUTING.md"}
            target="_blank"
            rel="noopener noreferrer"
            display="inline-flex" alignItems="center" gap={8} color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "rgb(255 255 255 / 0.8)" }}
          >
            Read our Contributing Guide
            <ExternalLink size={12} />
          </Anchor>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default CommunitySection;
