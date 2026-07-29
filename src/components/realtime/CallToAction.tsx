import { Anchor, Box, Button, MotionBox, MotionText, Text } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Activity, ArrowRight, ChevronRight } from "lucide-react";

const CallToAction = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          flexDirection="row" display="inline-flex" alignItems="center" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" marginBottom={24}
        >
          <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Activity size={16} color="var(--foreground)" /></Box>
          <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">Get Started Today</Text>
        </MotionBox>
        
        <MotionText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}
        >
          Build Real-time Experiences in Minutes
        </MotionText>
        
        <MotionText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}
        >
          Join thousands of developers building with Hanzo Realtime.
          No credit card required to get started.
        </MotionText>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}
        >
          <Button 
            size="lg" 
            backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" width="100%" hoverStyle={{ backgroundColor: "var(--neutral-700)" }} $sm={{ width: "auto" }}
          >
            Start Building <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            borderColor="var(--neutral-700)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" width="100%" hoverStyle={{ backgroundColor: "var(--neutral-800)" }} $sm={{ width: "auto" }}
          >
            <Anchor href="https://docs.hanzo.ai" display="flex" alignItems="center">
              Documentation <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={20} /></Box>
            </Anchor>
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
