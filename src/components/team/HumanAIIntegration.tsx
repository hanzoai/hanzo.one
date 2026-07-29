import { Box, Card, CardContent, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { 
  Video, 
  Monitor, 
  MessageSquare, 
  Lightbulb, 
  Workflow,
  Users
} from "lucide-react";

const HumanAIIntegration = () => {
  const features = [
    {
      icon: <Video size={40} color="var(--foreground)" />,
      title: "Train via Zoom",
      description: "Simply have a Zoom call with your AI agents. They learn by watching and listening, just like a human team member would."
    },
    {
      icon: <Monitor size={40} color="var(--foreground)" />,
      title: "Watch Them Work",
      description: "View your AI agents' work in real-time through a virtual desktop. Provide feedback and guidance as needed."
    },
    {
      icon: <MessageSquare size={40} color="var(--foreground)" />,
      title: "Seamless Communication",
      description: "Chat with your AI team members through your existing communication channels like Slack, Teams, or email."
    },
    {
      icon: <Lightbulb size={40} color="var(--foreground)" />,
      title: "Proactive Suggestions",
      description: "AI agents will proactively offer insights and suggestions based on their observations of your workflow."
    },
    {
      icon: <Workflow size={40} color="var(--foreground)" />,
      title: "Workflow Automation",
      description: "Agents learn your repetitive tasks and offer to automate them, saving you time for more creative work."
    },
    {
      icon: <Users size={40} color="var(--foreground)" />,
      title: "Human Escalation",
      description: "When tasks require human judgment, agents automatically escalate to the appropriate team member."
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <XStack display="inline-flex" padding={8} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" marginBottom={16}>
              <Users size={24} />
            </XStack>
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Human-AI Integration
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
              Our AI agents are designed to work alongside your human team, 
              creating a seamless integration that enhances productivity and creativity.
            </Paragraph>
            
            <Box position="relative" aspectRatio={1.7777777777777777} borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(0 0 0 / 0.5)">
              <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
                {/* This would be a real video in production */}
                <Box textAlign="center" padding={32}>
                  <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={16} opacity={0.7}><Video size={64} color="var(--foreground)" /></Box>
                  <Paragraph color="var(--neutral-400)">Interactive demo video would be here</Paragraph>
                </Box>
              </XStack>
            </Box>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  backgroundColor="rgb(0 0 0 / 0.4)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" overflow="hidden"
                >
                  <CardContent padding={24}>
                    <XStack backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-lg)" display="inline-flex" marginBottom={16}>
                      {feature.icon}
                    </XStack>
                    <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>{feature.title}</H3>
                    <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default HumanAIIntegration;
