import { Box, Grid, H2, H3, MotionBox, Paragraph, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Code, Zap, MessageSquare, Globe, Bot, FileCode, Infinity, Network } from "lucide-react";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} height="100%"
    >
      <YStack display="flex" flexDirection="column" height="100%">
        <Box marginBottom={24}>
          {icon}
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={16} marginBottom={8}>{title}</H3>
          <Paragraph color="var(--neutral-300)" marginBottom={16}>{description}</Paragraph>
        </Box>
      </YStack>
    </MotionBox>
  );
};

const HanzoCodeFeatures = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }} id="features">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Beyond Other AI Editors</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
            Capabilities that leave Cursor, Windsurf, and other AI editors far behind
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          <FeatureCard 
            title="Holistic Understanding"
            description="Unlike others, we analyze your entire codebase, not just the current file or context window"
            icon={<Code size={40} color="var(--foreground)" />}
          />
          
          <FeatureCard 
            title="Parallel Execution"
            description="Run multiple autonomous agents simultaneously to solve different parts of your project"
            icon={<Zap size={40} color="var(--foreground)" />}
          />
          
          <FeatureCard 
            title="Advanced Reasoning"
            description="Complex problem solving with multi-step reasoning that other AI tools can't match"
            icon={<MessageSquare size={40} color="var(--foreground)" />}
          />
          
          <FeatureCard 
            title="Multi-repo Context"
            description="Understand dependencies across multiple repositories and codebases simultaneously"
            icon={<Globe size={40} color="var(--foreground)" />}
          />
          
          <FeatureCard 
            title="Complete Autonomy"
            description="Agents can work independently, making decisions without constant human guidance"
            icon={<Bot size={40} color="var(--foreground)" />}
          />
          
          <FeatureCard 
            title="Full System Access"
            description="Agents have controlled access to your file system, dev environment, and tooling"
            icon={<FileCode size={40} color="var(--foreground)" />}
          />
          
          <FeatureCard 
            title="Unlimited Context"
            description="No token limits or context windows - process entire codebases at once"
            icon={<Infinity size={40} color="var(--foreground)" />}
          />
          
          <FeatureCard 
            title="Agent Collaboration"
            description="Multiple agents working together with different roles and responsibilities"
            icon={<Network size={40} color="var(--foreground)" />}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoCodeFeatures;
