import { Box, Button, H2, MotionBox, Paragraph, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="rgb(0 0 0 / 0.3)" />
      
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        maxWidth="64rem" marginHorizontal="auto" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-2xl)" padding={40} position="relative" zIndex={10}
      >
        <Box textAlign="center">
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Ready to Build the Future with AI?
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
            Join thousands of developers using Hanzo to build powerful, 
            transparent AI applications that users love.
          </Paragraph>
          
          <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
            <Button 
              size="sm"
              backgroundColor="var(--white)" color="var(--pure-black)" borderWidth={1} borderColor="transparent" borderRadius="var(--radius-full)" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "transparent", color: "var(--white)", borderColor: "var(--white)" }}
            >
              Get Started
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Button>
            
            <Button 
              size="sm"
              variant="outline"
              color="var(--white)" borderColor="var(--neutral-700)" borderRadius="var(--radius-full)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box>
              Star on GitHub
            </Button>
          </YStack>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default CallToAction;
