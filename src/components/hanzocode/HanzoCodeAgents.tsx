import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, GitBranch, Braces, Users, Brain, Server, Maximize } from "lucide-react";

interface FeatureCardProps {
  icon: React.FC<{  }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}
    >
      <Icon height={40} width={40} color="var(--foreground)" marginBottom={16} />
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>{title}</H3>
      <Paragraph color="var(--neutral-300)">{description}</Paragraph>
    </MotionBox>
  );
};

const HanzoCodeAgents: React.FC = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Autonomous Agentic Control</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Harness the full power of intelligent agents that can operate your editor alongside you
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          <FeatureCard 
            icon={Bot}
            title="Superagents"
            description="AI agents that understand your codebase at a deep level and can autonomously edit, refactor, and optimize code"
          />
          
          <FeatureCard 
            icon={Cpu}
            title="Full Environment Control"
            description="Agents can access and control your entire development environment, including terminal commands and external tools"
          />
          
          <FeatureCard 
            icon={GitBranch}
            title="Parallel Work Streams"
            description="Create multiple agents working on different branches simultaneously to tackle complex problems"
          />
          
          <FeatureCard 
            icon={Braces}
            title="Code Generation"
            description="Generate entire modules, components, or services with detailed specifications in plain English"
          />
        </Grid>
        
        <Box borderRadius="var(--radius-2xl)" padding={32} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <div>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={24}>Massively Parallel Development</H3>
              <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" marginBottom={32}>
                Hanzo Code can create up to 1,000,000 parallel instances of your development environment, each with its own agent, to tackle the largest and most complex coding challenges.
              </Paragraph>
              
              <Box rowGap={16}>
                <XStack display="flex" alignItems="flex-start">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={12} marginTop={4}><Users size={20} color="var(--foreground)" /></Box>
                  <Paragraph color="var(--neutral-300)">True pair programming with agents that have full system access</Paragraph>
                </XStack>
                
                <XStack display="flex" alignItems="flex-start">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={12} marginTop={4}><Brain size={20} color="var(--foreground)" /></Box>
                  <Paragraph color="var(--neutral-300)">Agents learn your coding style and project patterns over time</Paragraph>
                </XStack>
                
                <XStack display="flex" alignItems="flex-start">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={12} marginTop={4}><Server size={20} color="var(--foreground)" /></Box>
                  <Paragraph color="var(--neutral-300)">Scale from a single helper to a massive distributed workforce</Paragraph>
                </XStack>
                
                <XStack display="flex" alignItems="flex-start">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={12} marginTop={4}><Maximize size={20} color="var(--foreground)" /></Box>
                  <Paragraph color="var(--neutral-300)">Tackle enterprise-scale projects that would normally require entire teams</Paragraph>
                </XStack>
              </Box>
            </div>
            
            <Box backgroundColor="rgb(0 0 0 / 0.4)" borderRadius="var(--radius-xl)" padding={24} borderWidth={1} borderColor="var(--neutral-800)">
              <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontFamily="var(--font-mono)" color="var(--neutral-300)" rowGap={8}>
                <Box color="var(--foreground)">// Creating a team of agents to refactor an entire codebase</Box>
                <Box color="var(--white)">const project = await HanzoCode.createProject('./my-app');</Box>
                <Box color="var(--white)">const agents = await project.createAgentTeam({"{"}</Box>
                <Box color="var(--white)" marginLeft={16}>size: 12,</Box>
                <Box color="var(--white)" marginLeft={16}>task: 'Refactor to React 18 with TypeScript',</Box>
                <Box color="var(--white)" marginLeft={16}>coordination: 'hierarchical',</Box>
                <Box color="var(--white)" marginLeft={16}>parallelization: true</Box>
                <Box color="var(--white)">{"}"});</Box>
                <Box color="var(--white)">await agents.execute();</Box>
                <Box color="var(--white)">// Agents will work together, with some focusing on</Box>
                <Box color="var(--white)">// component logic, others on types, others on tests</Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HanzoCodeAgents;
