import { Box, Grid, H2, H3, Paragraph, XStack } from '@/gui'

import React from "react";
import { MessageSquare, Bot, Settings } from "lucide-react";

const ChatFeatures: React.FC = () => {
  return (
    <Box marginTop={40} marginBottom={64}>
      <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" textAlign="center" marginBottom={32}>Enhanced Chat Capabilities</H2>
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        <Box padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.05))" hoverStyle={{ borderColor: "var(--border-strong)" }}>
          <XStack backgroundColor="rgb(255 255 255 / 0.1)" width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
            <MessageSquare size={24} color="var(--foreground)" />
          </XStack>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8} color="var(--white)">Multimodal Conversations</H3>
          <Paragraph color="var(--neutral-300)">Chat with text, images, audio, and video in natural conversations with our AI assistants.</Paragraph>
        </Box>
        
        <Box padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.05))" hoverStyle={{ borderColor: "var(--border-strong)" }}>
          <XStack backgroundColor="rgb(255 255 255 / 0.1)" width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
            <Bot size={24} color="var(--foreground)" />
          </XStack>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8} color="var(--white)">Specialized Assistants</H3>
          <Paragraph color="var(--neutral-300)">Access domain-specific experts for coding, design, marketing, legal, and more fields.</Paragraph>
        </Box>
        
        <Box padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.05))" hoverStyle={{ borderColor: "var(--border-strong)" }}>
          <XStack backgroundColor="rgb(255 255 255 / 0.1)" width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
            <Settings size={24} color="var(--foreground)" />
          </XStack>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8} color="var(--white)">Customizable Workflows</H3>
          <Paragraph color="var(--neutral-300)">Connect your data sources, APIs, and tools to create powerful AI-powered workflows.</Paragraph>
        </Box>
      </Grid>
    </Box>
  );
};

export default ChatFeatures;
