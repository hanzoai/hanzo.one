import { Anchor, Box, Button, Grid, H2, H3, MotionBox, Paragraph, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Github } from "lucide-react";

const HanzoCodeCTA = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={32}>Upgrade Your Editor Today</H2>
          
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={48} maxWidth="42rem" marginHorizontal="auto">
            Transform your VS Code, Cursor, Windsurf, or Void experience with the most advanced AI coding tools available.
          </Paragraph>
          
          <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="center" rowGap={16} marginBottom={64} $sm={{ flexDirection: "row", rowGap: 0, columnGap: 16 }}>
            <Button 
              size="sm"
              backgroundColor="var(--neutral-600)" color="var(--white)" width="100%" hoverStyle={{ backgroundColor: "var(--neutral-500)" }} $sm={{ width: "auto" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Download size={16} /></Box>
              Download Hanzo Code
            </Button>
            
            <Button 
              size="sm" 
              variant="outline"
              backgroundColor="transparent" borderColor="var(--border-strong)" color="var(--white)" width="100%" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }} $sm={{ width: "auto" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ExternalLink size={16} /></Box>
              VS Code Extension
            </Button>
            
            <Button 
              size="sm" 
              variant="outline"
              backgroundColor="transparent" borderColor="var(--neutral-600)" color="var(--white)" width="100%" hoverStyle={{ backgroundColor: "var(--neutral-800)" }} $sm={{ width: "auto" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box>
              GitHub
            </Button>
          </YStack>
          
          <Box backgroundColor="rgb(0 0 0 / 0.4)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" marginBottom={48}>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={16}>Already Using Cursor or Windsurf?</H3>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Install Hanzo Code alongside your current editor and supercharge it with our agentic capabilities. No need to switch or change your workflow.
            </Paragraph>
            <Button 
              size="sm"
              color="var(--white)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--neutral-500))" }}
            >
              One-Click Integration
            </Button>
          </Box>
          
          <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" $md={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            <Anchor tap href="#" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Pricing</Anchor>
            <Anchor tap href="#" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Downloads</Anchor>
            <Anchor tap href="#" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Docs</Anchor>
            <Anchor tap href="#" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Forum</Anchor>
            <Anchor tap href="#" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Careers</Anchor>
            <Anchor tap href="#" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Company</Anchor>
            <Anchor tap href="#" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Security</Anchor>
            <Anchor tap href="#" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>Privacy</Anchor>
          </Grid>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HanzoCodeCTA;
