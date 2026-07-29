import { Box, Button, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Chrome, Code } from "lucide-react";

const Extensions = () => {
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
            Available everywhere you code
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="42rem" marginHorizontal="auto">
            Use Hanzo in your browser or directly in VS Code for a seamless development experience
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <XStack display="flex" alignItems="center" marginBottom={24}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={16}><Chrome size={40} color="var(--neutral-500)" /></Box>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)">Browser Extensions</H3>
            </XStack>
            
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Access Hanzo AI directly in your browser for seamless web development and browsing assistance.
            </Paragraph>
            
            <XStack display="flex" flexWrap="wrap" gap={12}>
              <Button variant="outline" borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Chrome size={16} /></Box>
                Chrome Extension
              </Button>
              <Button variant="outline" borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Chrome size={16} /></Box>
                Firefox Add-on
              </Button>
              <Button variant="outline" borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Chrome size={16} /></Box>
                Edge Extension
              </Button>
            </XStack>
          </MotionBox>
          
          <MotionBox
            backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <XStack display="flex" alignItems="center" marginBottom={24}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={16}><Code size={40} color="var(--neutral-500)" /></Box>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)">VS Code Extension</H3>
            </XStack>
            
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Supercharge your development workflow with Hanzo AI integrated directly in VS Code.
            </Paragraph>
            
            <XStack display="flex" flexWrap="wrap" gap={12}>
              <Button backgroundColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Code size={16} /></Box>
                Install for VS Code
              </Button>
              <Button variant="outline" borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
                Learn more about Hanzo Code
              </Button>
            </XStack>
            
            <Paragraph color="var(--neutral-400)" marginTop={24} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
              Hanzo Code offers dedicated features for developers. Explore our separate Hanzo Code editor for an even more powerful experience.
            </Paragraph>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default Extensions;
