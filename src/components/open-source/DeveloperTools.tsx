import { Anchor, Box, Button, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitBranch, GitMerge, Code, Users, Terminal } from "lucide-react";

const DeveloperTools = () => {
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
            Developer Tools
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Tools and libraries that enhance developer productivity
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {/* Dev Project */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack display="flex" alignItems="center" marginBottom={16}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Code size={32} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">Hanzo Dev</H3>
            </XStack>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              AI-powered software engineering assistant that helps you write, debug, and document code.
            </Paragraph>
            <XStack display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={20}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Star size={16} /></Box>
                <span>3.2k stars</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitBranch size={16} /></Box>
                <span>412 forks</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitMerge size={16} /></Box>
                <span>TypeScript</span>
              </XStack>
            </XStack>
            <Button 
              size="sm" 
              width="100%" backgroundColor="var(--surface-overlay)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }}
            >
              <Anchor minHeight={44} href="https://github.com/hanzoai/dev" target="_blank" rel="noopener noreferrer" display="flex" justifyContent="center" width="100%">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box> View Repository
              </Anchor>
            </Button>
          </MotionBox>

          {/* Team Project */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack display="flex" alignItems="center" marginBottom={16}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Users size={32} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">Hanzo Team</H3>
            </XStack>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              An integrated collaboration platform with AI-powered tools for remote teams.
            </Paragraph>
            <XStack display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={20}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Star size={16} /></Box>
                <span>2.7k stars</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitBranch size={16} /></Box>
                <span>289 forks</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitMerge size={16} /></Box>
                <span>TypeScript</span>
              </XStack>
            </XStack>
            <Button 
              size="sm" 
              width="100%" backgroundColor="var(--surface-overlay)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }}
            >
              <Anchor minHeight={44} href="https://github.com/hanzoai/team" target="_blank" rel="noopener noreferrer" display="flex" justifyContent="center" width="100%">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box> View Repository
              </Anchor>
            </Button>
          </MotionBox>

          {/* CLI Project */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack display="flex" alignItems="center" marginBottom={16}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Terminal size={32} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">Hanzo CLI</H3>
            </XStack>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Command-line interface for scaffolding and managing Hanzo applications. Create, deploy, and manage with ease.
            </Paragraph>
            <XStack display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={20}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Star size={16} /></Box>
                <span>1.9k stars</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitBranch size={16} /></Box>
                <span>213 forks</span>
              </XStack>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><GitMerge size={16} /></Box>
                <span>JavaScript</span>
              </XStack>
            </XStack>
            <Button 
              size="sm" 
              width="100%" backgroundColor="var(--surface-overlay)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }}
            >
              <Anchor minHeight={44} href="https://github.com/hanzoai/cli" target="_blank" rel="noopener noreferrer" display="flex" justifyContent="center" width="100%">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box> View Repository
              </Anchor>
            </Button>
          </MotionBox>
        </Grid>

        <Box textAlign="center" marginTop={48}>
          <Button size="lg" variant="outline" borderColor="var(--border-strong)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
            <Anchor minHeight={44} href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" display="flex" >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} /></Box> View All Projects
            </Anchor>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DeveloperTools;
