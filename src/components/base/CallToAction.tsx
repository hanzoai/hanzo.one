import { Box, Button, H2, MotionBox, Paragraph, Text, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="64rem" marginHorizontal="auto" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-tight)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Get Started Today
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-relaxed)" color="var(--neutral-300)" marginBottom={48} maxWidth="var(--container-prose)" marginHorizontal="auto">
            Launch your next-generation project instantly or request a custom demo to explore 
            Hanzo Base's powerful capabilities.
          </Paragraph>
          
          <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
            <Button size="lg" radius="full" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} backgroundColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
              <Text paddingVertical={4} lineHeight="var(--leading-relaxed)">Start Building</Text>
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Button>
            <Button size="lg" variant="outline" radius="full" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} color="var(--white)">
              <Text paddingVertical={4} lineHeight="var(--leading-relaxed)">Read Docs</Text>
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Button>
          </YStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
