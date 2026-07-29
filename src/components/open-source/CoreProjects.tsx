import { Anchor, Box, Button, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitBranch, Terminal, Server, Bot } from "lucide-react";

const CoreProjects = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="rgb(0 0 0 / 0.5)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Core Projects
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Our flagship open source technologies that power the Hanzo Platform
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {/* Platform Project */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={32} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack display="flex" alignItems="center" marginBottom={16}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={16}><Server size={48} color="var(--foreground)" /></Box>
              <div>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)">Hanzo Platform</H3>
                <XStack display="flex" alignItems="center" marginTop={4}>
                  <Anchor tap href="https://github.com/hanzoai/platform" target="_blank" rel="noopener noreferrer" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>github.com/hanzoai/platform</Anchor>
                </XStack>
              </div>
            </XStack>
            <Paragraph color="var(--neutral-300)" marginBottom={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
              The free, forever, open-source version of our cloud infrastructure. Run the entire Hanzo stack locally with a single command.
            </Paragraph>
            <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={24}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Star size={20} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)">5.2k stars</Text>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><GitBranch size={20} color="var(--neutral-400)" /></Box>
                <Text color="var(--neutral-300)">742 forks</Text>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box height={12} width={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" marginRight={8}></Box>
                <Text color="var(--neutral-300)">Active</Text>
              </XStack>
            </XStack>
            <XStack display="flex" columnGap={12}>
              <Button 
                flex={1} backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
                size="sm"
              >
                <Anchor href="https://github.com/hanzoai/platform" target="_blank" rel="noopener noreferrer" display="flex" alignItems="center" justifyContent="center" width="100%">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box> Repository
                </Anchor>
              </Button>
              <Button 
                flex={1}
                variant="outline"
                size="sm"
              >
                <Anchor href="/platform" display="flex" alignItems="center" justifyContent="center" width="100%">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Terminal size={16} /></Box> Learn More
                </Anchor>
              </Button>
            </XStack>
          </MotionBox>

          {/* Bot Project */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={32} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack display="flex" alignItems="center" marginBottom={16}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={16}><Bot size={48} color="var(--foreground)" /></Box>
              <div>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)">Hanzo Bot</H3>
                <XStack display="flex" alignItems="center" marginTop={4}>
                  <Anchor tap href="https://github.com/hanzoai/bot" target="_blank" rel="noopener noreferrer" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>github.com/hanzoai/bot</Anchor>
                </XStack>
              </div>
            </XStack>
            <Paragraph color="var(--neutral-300)" marginBottom={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
              Agentic framework for building advanced AI assistants with custom tool integration. Create powerful workflows with LLMs.
            </Paragraph>
            <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={24}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Star size={20} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)">4.8k stars</Text>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><GitBranch size={20} color="var(--neutral-400)" /></Box>
                <Text color="var(--neutral-300)">623 forks</Text>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box height={12} width={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" marginRight={8}></Box>
                <Text color="var(--neutral-300)">Active</Text>
              </XStack>
            </XStack>
            <XStack display="flex" columnGap={12}>
              <Button 
                flex={1} backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
                size="sm"
              >
                <Anchor href="https://github.com/hanzoai/bot" target="_blank" rel="noopener noreferrer" display="flex" alignItems="center" justifyContent="center" width="100%">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box> Repository
                </Anchor>
              </Button>
              <Button 
                flex={1}
                variant="outline"
                size="sm"
              >
                <Anchor href="/bot" display="flex" alignItems="center" justifyContent="center" width="100%">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Terminal size={16} /></Box> Learn More
                </Anchor>
              </Button>
            </XStack>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default CoreProjects;
