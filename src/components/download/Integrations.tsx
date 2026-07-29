import { Box, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, CalendarDays, FileEdit, Trello, MessageSquare, Code } from "lucide-react";

const IntegrationCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <XStack display="flex" alignItems="flex-start" columnGap={16} padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
    <Box flexShrink={0}>
      {icon}
    </Box>
    <div>
      <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={4}>{title}</H3>
      <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{description}</Paragraph>
    </div>
  </XStack>
);

const Integrations = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="rgb(0 0 0 / 0.5)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          textAlign="center" marginBottom={48}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} color="var(--white)" $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Connect your own tools & datasources
          </H2>
        </MotionBox>
        
        <MotionBox 
          display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <IntegrationCard 
            icon={<Github size={32} color="var(--neutral-500)" />}
            title="GitHub"
            description="Automatically manage development work and more"
          />
          
          <IntegrationCard 
            icon={<FileEdit size={32} color="var(--neutral-500)" />}
            title="Notion"
            description="Seamlessly sync notes and tasks with your Notion workspace"
          />
          
          <IntegrationCard 
            icon={<CalendarDays size={32} color="var(--neutral-500)" />}
            title="Google Calendar"
            description="Connect your calendar to automate meeting workflows"
          />
          
          <IntegrationCard 
            icon={<Trello size={32} color="var(--neutral-500)" />}
            title="Linear"
            description="Create Linear issues directly from any context"
          />
          
          <IntegrationCard 
            icon={<MessageSquare size={32} color="var(--neutral-500)" />}
            title="Slack"
            description="Summarize channels and post meeting notes to Slack"
          />
          
          <IntegrationCard 
            icon={<Code size={32} color="var(--neutral-500)" />}
            title="MCP"
            description="Add your own tooling securely using Model Context Protocol"
          />
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Integrations;
