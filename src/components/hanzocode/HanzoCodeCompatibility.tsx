import { Box, Grid, H2, H3, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Check, Code2, PanelLeft, Plug, Settings, Shield } from "lucide-react";

const HanzoCodeCompatibility = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Universal Compatibility</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Enhance any VS Code-compatible editor with Hanzo's intelligence
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-700)" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--neutral-800))"
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={24} color="var(--foreground)">Works With Your Favorite Editors</H3>
            
            <Box render="ul" rowGap={16}>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12} marginTop={4}><Check size={24} color="var(--foreground)" /></Box>
                <div>
                  <Text fontWeight="600" color="var(--white)">VS Code:</Text>
                  <Text color="var(--neutral-300)" marginLeft={8}>Native integration with full feature support</Text>
                </div>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12} marginTop={4}><Check size={24} color="var(--foreground)" /></Box>
                <div>
                  <Text fontWeight="600" color="var(--white)">Cursor:</Text>
                  <Text color="var(--neutral-300)" marginLeft={8}>Augment Cursor's AI capabilities with Hanzo's advanced agentic features</Text>
                </div>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12} marginTop={4}><Check size={24} color="var(--foreground)" /></Box>
                <div>
                  <Text fontWeight="600" color="var(--white)">Windsurf:</Text>
                  <Text color="var(--neutral-300)" marginLeft={8}>Add Hanzo's intelligence layer on top of Windsurf's editor experience</Text>
                </div>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12} marginTop={4}><Check size={24} color="var(--foreground)" /></Box>
                <div>
                  <Text fontWeight="600" color="var(--white)">Void:</Text>
                  <Text color="var(--neutral-300)" marginLeft={8}>Perfect complement to Void's streamlined experience</Text>
                </div>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12} marginTop={4}><Check size={24} color="var(--foreground)" /></Box>
                <div>
                  <Text fontWeight="600" color="var(--white)">Any VS Code-compatible editor:</Text>
                  <Text color="var(--neutral-300)" marginLeft={8}>If it supports VS Code extensions, it supports Hanzo Code</Text>
                </div>
              </XStack>
            </Box>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={24}>
              <Box backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-lg)" padding={24} borderWidth={1} borderColor="var(--neutral-800)">
                <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><PanelLeft size={40} color="var(--foreground)" /></Box>
                <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8}>Extension API</H4>
                <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Seamless integration with standard VS Code extension API</Paragraph>
              </Box>
              
              <Box backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-lg)" padding={24} borderWidth={1} borderColor="var(--neutral-800)">
                <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Code2 size={40} color="var(--foreground)" /></Box>
                <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8}>Native Experience</H4>
                <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Feels like a native part of your existing editor</Paragraph>
              </Box>
              
              <Box backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-lg)" padding={24} borderWidth={1} borderColor="var(--neutral-800)">
                <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Plug size={40} color="var(--foreground)" /></Box>
                <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8}>Plugin System</H4>
                <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Extend with custom plugins for your workflow</Paragraph>
              </Box>
              
              <Box backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-lg)" padding={24} borderWidth={1} borderColor="var(--neutral-800)">
                <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Shield size={40} color="var(--foreground)" /></Box>
                <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8}>Enterprise Ready</H4>
                <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Security and compliance features for teams</Paragraph>
              </Box>
            </Grid>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoCodeCompatibility;
