import { Box, Button, Grid, MotionBox, MotionText, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { LineChart, BarChart4, Activity } from "lucide-react";

const HeroSection = () => {
  return (
    <Box render="section" paddingTop={128} paddingBottom={80} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      {/* Gradient effects */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), transparent, transparent)" opacity={0.7}></Box>
      <Box position="absolute" top={160} left={80} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" filter="blur(100px)"></Box>
      <Box position="absolute" bottom={0} right={0} width={288} height={288} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" filter="blur(100px)"></Box>
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            flexDirection="row" display="flex" justifyContent="center" marginBottom={24}
          >
            <Box padding={12} borderRadius="var(--radius-lg)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))">
              <Activity size={32} color="var(--white)" />
            </Box>
          </MotionBox>
          
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--neutral-400))" $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
          >
            Unified Intelligence for AI Applications
          </MotionText>
          
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={40} maxWidth="var(--container-prose)" marginHorizontal="auto" $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}
          >
            Hanzo Observability provides end-to-end visibility and proactive insights designed specifically for debugging, optimizing, and improving your AI applications.
          </MotionText>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}
          >
            <Button size="lg" color="var(--white)" borderStyle="none" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-md)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" borderColor="var(--neutral-600)" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-md)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
              View Documentation
            </Button>
          </MotionBox>
        </Box>
        
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          marginTop={64} position="relative"
        >
          <Box position="absolute" top={0} right={0} bottom={0} left={0} zIndex={10} height={80} backgroundImage="linear-gradient(to top, var(--pure-black), transparent, transparent)"></Box>
          <Box padding={8} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--border-strong)" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" overflow="hidden" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))">
            <Grid display="grid" gridTemplateColumns="repeat(5, minmax(0, 1fr))" gap={12} padding={16} backgroundColor="rgb(0 0 0 / 0.6)" borderRadius="var(--radius-lg)">
              <Box gridColumn="span 1 / span 1" rowGap={16}>
                <Box height={32} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)"></Box>
                <Box height={32} backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-md)"></Box>
                <Box height={32} backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-md)"></Box>
                <Box height={32} backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-md)"></Box>
                <Box height={32} backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-md)"></Box>
                <Box height={128} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" marginTop={32}></Box>
              </Box>
              <Box gridColumn="span 4 / span 4" rowGap={16}>
                <Box height={48} backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-md)"></Box>
                <Box height={256} borderRadius="var(--radius-lg)" position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
                  <Box position="absolute" left={0} right={0} bottom={0} height={160}>
                    <Box display="inline-block" viewBox="0 0 500 150" preserveAspectRatio="none" render="svg" width="100%" height="100%">
                      <path
                        d="M0,150 L0,40 Q125,10 250,40 T500,40 L500,150 Z"
                        fill="rgba(124, 58, 237, 0.5)"
                      ></path>
                      <path
                        d="M0,150 L0,60 Q125,30 250,60 T500,60 L500,150 Z"
                        fill="rgba(37, 99, 235, 0.4)"
                      ></path>
                    </Box>
                  </Box>
                  <XStack position="absolute" top={16} left={16} display="flex" columnGap={8}>
                    <Box height={12} width={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                    <Box height={12} width={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                  </XStack>
                </Box>
                <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16}>
                  <Box height={128} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)"></Box>
                  <Box height={128} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)"></Box>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HeroSection;
