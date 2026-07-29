import { Box, Button, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, Users, Code } from "lucide-react";

const CommunitySection = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Join Our Community
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Connect with thousands of developers building with Hanzo
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} textAlign="center"
          >
            <XStack backgroundColor="rgb(255 255 255 / 0.1)" height={64} width={64} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginHorizontal="auto" marginBottom={24}>
              <Users size={32} color="var(--foreground)" />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={12}>Discord Community</H3>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Join 12,000+ developers discussing Hanzo projects and AI development.
            </Paragraph>
            <Button width="100%" backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }} size="sm">
              <a href="https://discord.gg/XthHQQj" target="_blank" rel="noopener noreferrer">Join Discord</a>
            </Button>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} textAlign="center"
          >
            <XStack backgroundColor="rgb(255 255 255 / 0.1)" height={64} width={64} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginHorizontal="auto" marginBottom={24}>
              <Github size={32} color="var(--foreground)" />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={12}>GitHub Discussions</H3>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Ask questions, share ideas, and collaborate on code with our maintainers.
            </Paragraph>
            <Button width="100%" backgroundColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }} size="sm">
              <a href="https://github.com/hanzoai/platform/discussions" target="_blank" rel="noopener noreferrer">Go to Discussions</a>
            </Button>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} textAlign="center"
          >
            <XStack backgroundColor="rgb(255 255 255 / 0.1)" height={64} width={64} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginHorizontal="auto" marginBottom={24}>
              <Code size={32} color="var(--foreground)" />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={12}>Contribute</H3>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Help us improve Hanzo by contributing code, documentation, or ideas.
            </Paragraph>
            <Button width="100%" backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }} size="sm">
              <a href="https://github.com/hanzoai/platform/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributor Guide</a>
            </Button>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default CommunitySection;
