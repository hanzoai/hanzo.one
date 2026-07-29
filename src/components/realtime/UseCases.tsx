import { Box, Button, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Users, Edit, GamepadIcon, ChartBar, Code, Heart, ArrowRight } from "lucide-react";

interface UseCaseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      
      borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))" hoverStyle={{ borderColor: "var(--border-strong)" }}
    >
      <XStack backgroundColor="rgb(255 255 255 / 0.2)" height={40} width={40} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
        <Icon height={20} width={20} color="var(--foreground)" />
      </XStack>
      <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>{title}</H3>
      <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{description}</Paragraph>
    </MotionBox>
  );
};

const UseCases = () => {
  const useCases = [
    {
      icon: MessageSquare,
      title: "Chat Applications",
      description: "Build messaging apps with real-time delivery, typing indicators, and read receipts."
    },
    {
      icon: Users,
      title: "Collaborative Workspaces",
      description: "Create shared workspaces where multiple users can collaborate simultaneously."
    },
    {
      icon: Edit,
      title: "Collaborative Editing",
      description: "Implement Google Docs-like collaborative document editing with conflict resolution."
    },
    {
      icon: GamepadIcon,
      title: "Multiplayer Games",
      description: "Develop low-latency multiplayer games with synchronized game state across players."
    },
    {
      icon: ChartBar,
      title: "Live Dashboards",
      description: "Build dashboards that update in real-time as new data becomes available."
    },
    {
      icon: Code,
      title: "Dev Tooling",
      description: "Create collaborative coding environments with real-time changes and execution."
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.1))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <XStack display="inline-flex" alignItems="center" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" marginBottom={24}>
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Heart size={16} color="var(--foreground)" /></Box>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">Popular Use Cases</Text>
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Build Interactive Experiences
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Hanzo Realtime powers a wide range of applications that demand immediate data updates
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginBottom={48} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              index={index}
            />
          ))}
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          textAlign="center"
        >
          <Button backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
            Explore All Use Cases <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default UseCases;
