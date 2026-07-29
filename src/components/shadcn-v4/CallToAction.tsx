import { Box, Button, H2, MotionBox, Paragraph, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const CallToAction = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="64rem" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={40} textAlign="center"
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} color="var(--foreground)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Ready to Get Started?
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
            Upgrade your projects to Tailwind v4 and React 19 today and take advantage
            of the latest features and improvements.
          </Paragraph>
          
          <YStack display="flex" flexDirection="column" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}>
            <Button 
              size="lg" 
              backgroundColor="var(--neutral-600)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            >
              Get Started Guide
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} /></Box>
              Star on GitHub
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
              onClick={() => window.open("https://ui.shadcn.com", "_blank")}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ExternalLink size={20} /></Box>
              Documentation
            </Button>
          </YStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
