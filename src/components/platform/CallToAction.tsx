import { Anchor, Box, Button, ChromeText, MotionBox, Paragraph, Text, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.3} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"></Box>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="64rem" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox 
          textAlign="center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Start building locally today
          </ChromeText>
          
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={48}>
            Join our community of developers building the future of AI applications with open source tools.
          </Paragraph>
          
          <YStack display="flex" flexDirection="column" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}>
            <Button 
              size="lg"
              color="var(--white)" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / .4)", backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} /></Box>
              <a href="https://github.com/hanzo/platform">Get on GitHub</a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              color="var(--white)" borderColor="var(--neutral-700)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" borderRadius="var(--radius-lg)" fontWeight="500" display="flex" alignItems="center" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            >
              <Text flex={1}>Read the Docs</Text>
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Button>
          </YStack>
          
          <Box marginTop={48} color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            Need enterprise features? <Anchor tap href="/cloud" color="var(--foreground)" textDecorationLine="underline" hoverStyle={{ color: "var(--foreground)" }}>Check out Hanzo Cloud</Anchor>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
