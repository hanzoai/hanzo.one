import { Anchor, Box, Button, ChromeText, H1, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Chrome, Globe } from "lucide-react";

const HanzoExtensionHero = () => {
  return (
    <Box render="section" paddingTop={128} paddingBottom={80} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      {/* Background elements */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.3} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"></Box>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="64rem" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
        >
          <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            Hanzo <Text color="var(--foreground)">Extension</Text>
          </H1>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={48} $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>
            Access Hanzo AI directly in your browser
            <br />for a seamless web experience
          </Paragraph>
          
          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16} marginBottom={48}>
            <Button 
              size="lg"
              color="var(--white)" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
            >
              <Anchor href="#browsers" display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Chrome size={20} /></Box>
                Add to Chrome
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
              </Anchor>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              borderColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            >
              <Anchor href="#browsers" display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Globe size={20} /></Box>
                Get Firefox Add-on
              </Anchor>
            </Button>
          </XStack>
          
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box position="relative" width="100%" maxWidth="56rem" marginHorizontal="auto" borderRadius="var(--radius-xl)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)">
              <Box display="inline-block" 
                src="/placeholder.svg" 
                alt="Hanzo Extension Preview" 
                render="img" width="100%" height="auto"
              />
              <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to top, rgb(0 0 0 / 0.7), transparent)"></Box>
            </Box>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HanzoExtensionHero;
