import { Anchor, Box, Button, Grid, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, MessageSquare } from "lucide-react";

const Community = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Community and Support</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Join us in building the future of autonomous AI agents with Hanzo!
          </Paragraph>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" $md={{ padding: 48 }}
        >
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} alignItems="center" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <div>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={16}>Next Steps</H3>
              <Box render="ul" rowGap={16}>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={4} borderRadius="var(--radius)" color="var(--foreground)" marginRight={12} marginTop={2}>
                    <XStack width={16} height={16} display="flex" alignItems="center" justifyContent="center">1</XStack>
                  </Box>
                  <div>
                    <Text color="var(--white)" fontWeight="500">Create Your First Agent</Text>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginTop={4}>Follow our guide to build your first AI agent</Paragraph>
                  </div>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={4} borderRadius="var(--radius)" color="var(--foreground)" marginRight={12} marginTop={2}>
                    <XStack width={16} height={16} display="flex" alignItems="center" justifyContent="center">2</XStack>
                  </Box>
                  <div>
                    <Text color="var(--white)" fontWeight="500">Understand Core Concepts</Text>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginTop={4}>Learn about the key components of the Hanzo Bot framework</Paragraph>
                  </div>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={4} borderRadius="var(--radius)" color="var(--foreground)" marginRight={12} marginTop={2}>
                    <XStack width={16} height={16} display="flex" alignItems="center" justifyContent="center">3</XStack>
                  </Box>
                  <div>
                    <Text color="var(--white)" fontWeight="500">Explore Advanced Features</Text>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginTop={4}>Discover how to leverage the full potential of your agents</Paragraph>
                  </div>
                </XStack>
              </Box>
            </div>
            
            <Box rowGap={24}>
              <YStack display="flex" flexDirection="column" rowGap={16}>
                <Button 
                  size="sm"
                  backgroundColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
                >
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} /></Box>
                  <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">
                    Open Source: Contribute on GitHub
                  </a>
                </Button>
                
                <Button 
                  size="sm"
                  variant="outline"
                  borderColor="var(--neutral-700)" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                >
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><MessageSquare size={20} /></Box>
                  <a href="https://discord.gg/XthHQQj" target="_blank" rel="noopener noreferrer">
                    Join Discord Community
                  </a>
                </Button>
              </YStack>
              
              <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                <Paragraph marginBottom={8}>Looking for examples?</Paragraph>
                <Anchor tap href="#" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>
                  View ready-to-use character templates and implementations →
                </Anchor>
              </Box>
            </Box>
          </Grid>
        </MotionBox>
        
        <Box marginTop={48} textAlign="center" color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
          Last updated on Feb 20, 2025 by jin
        </Box>
      </Box>
    </Box>
  );
};

export default Community;
