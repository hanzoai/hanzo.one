import { Box, Button, H2, MotionBox, Paragraph, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

const CTA = () => {
  return (
    <Box render="section" paddingVertical={80} position="relative" overflow="hidden">
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), var(--pure-black))"></Box>
      
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10}
      >
        <Box maxWidth="56rem" marginHorizontal="auto" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-2xl)" padding={40} textAlign="center" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))">
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Ready to Build the Future with AI?
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={40} maxWidth="42rem" marginHorizontal="auto">
            Join thousands of developers and start building powerful AI applications today.
          </Paragraph>
          
          <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
            <Button 
              size="sm"
              color="var(--white)" borderRadius="var(--radius-full)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}
            >
              Get Started Free
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
          
          <Paragraph color="var(--neutral-400)" marginTop={32}>
            No credit card required. Start with our free tier.
          </Paragraph>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default CTA;
