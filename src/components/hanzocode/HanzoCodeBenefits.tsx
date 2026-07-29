import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, Tabs, TabsContent, TabsList, TabsTrigger, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const HanzoCodeBenefits = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} alignItems="center" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24}>Like Cursor & Windsurf, But Better</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
              Hanzo Code gives you all the features you love from Cursor and Windsurf, with intelligence that goes beyond tab completion.
            </Paragraph>
            
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} marginTop={48}>Advanced Code Understanding</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
              Unlike other AI coding assistants, Hanzo Code builds a complete understanding of your entire codebase, not just the current file.
            </Paragraph>
            
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} marginTop={48}>Natural Language & Contextual Awareness</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
              Rewrite entire modules with plain English instructions. Our AI understands your context and project architecture better than any other tool.
            </Paragraph>
            
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} marginTop={48}>True Force Multiplier</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
              Hanzo Code isn't just an assistant—it's a force multiplier that can scale your productivity by orders of magnitude.
            </Paragraph>
            
            <Anchor tap href="#features" color="var(--foreground)" fontWeight="500" hoverStyle={{ color: "var(--foreground)" }}>
              See how we compare
            </Anchor>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" overflow="hidden"
          >
            <XStack height={384} backgroundColor="var(--neutral-900)" display="flex" alignItems="center" justifyContent="center" padding={32}>
              <Box rowGap={16} textAlign="left" width="100%">
                <Box borderLeftWidth={4} borderColor="var(--neutral-500)" paddingLeft={16} paddingVertical={8}>
                  <H3 fontWeight="600" color="var(--white)">What Cursor/Windsurf Users Say:</H3>
                  <Paragraph color="var(--neutral-300)" fontStyle="italic">"I switched to Hanzo Code and my productivity jumped 3x. The agent capabilities are on another level."</Paragraph>
                </Box>
                
                <Box borderLeftWidth={4} borderColor="var(--neutral-500)" paddingLeft={16} paddingVertical={8}>
                  <Paragraph color="var(--neutral-300)" fontStyle="italic">"Using my favorite VS Code setup with Hanzo's AI has transformed how I approach complex programming tasks."</Paragraph>
                </Box>
                
                <Box borderLeftWidth={4} borderColor="var(--neutral-500)" paddingLeft={16} paddingVertical={8}>
                  <Paragraph color="var(--neutral-300)" fontStyle="italic">"Running parallel agent instances to solve different parts of the same problem simultaneously is a game-changer."</Paragraph>
                </Box>
              </Box>
            </XStack>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoCodeBenefits;
