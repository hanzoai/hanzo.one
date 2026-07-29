import { Anchor, Box, Button, ChromeText, Grid, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LineChart } from "lucide-react";

const HeroSection = () => {
  return (
    <XStack render="section" position="relative" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" paddingHorizontal={16} paddingVertical={128} overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="var(--black)" zIndex={0} />
      
      {/* Animated dots/points background */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" opacity={0.3}>
        {Array(20).fill(0).map((_, i) => (
          <MotionBox
            key={i}
            position="absolute" height={4} width={4} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </Box>
      
      <Box position="relative" zIndex={10} maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          marginBottom={32} textAlign="center"
        >
          <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
            AI-Powered Analytics for Next-Generation Growth
          </Box>
          <ChromeText as="h1" fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" letterSpacing="var(--tracking-tight)" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            Hanzo Analytics
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Precise, real-time insights into user behavior, product performance, and business outcomes, 
            enabling you to optimize faster, smarter, and at scale.
          </Paragraph>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          display="flex" flexDirection="column" gap={16} justifyContent="center" marginTop={40} $sm={{ flexDirection: "row" }}
        >
          <Button size="lg" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} borderStyle="none" backgroundImage="linear-gradient(to right, var(--neutral-700), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-600), var(--foreground))" }}>
            <a href="#start-free-trial">Start Free Trial</a>
          </Button>
          <Button size="lg" variant="outline" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32}>
            <Anchor href="#request-demo" display="flex" alignItems="center">
              Request Demo <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Anchor>
          </Button>
        </MotionBox>
        
        <MotionBox 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          marginTop={64} maxWidth="64rem" marginHorizontal="auto" position="relative"
        >
          <Box padding={16} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" overflow="hidden" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))">
            <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={16} borderBottomWidth={1} borderColor="var(--neutral-800)" paddingBottom={8}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><LineChart size={20} color="var(--foreground)" /></Box>
                <Text color="var(--white)" fontWeight="500">Hanzo Analytics Dashboard</Text>
              </XStack>
              <XStack display="flex" columnGap={4}>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
              </XStack>
            </XStack>
            <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={16}>
              <Box gridColumn="span 2 / span 2" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={16} height={256}>
                {/* Animated chart lines */}
                <Box height="100%" width="100%" position="relative">
                  <Box position="absolute" bottom={0} left={0} width="100%" height="1px" backgroundColor="var(--neutral-700)"></Box>
                  <Box position="absolute" left={0} top={0} height="100%" width="1px" backgroundColor="var(--neutral-700)"></Box>
                  
                  {/* Chart line */}
                  <Box display="inline-block" render="svg" height="100%" width="100%" viewBox="0 0 100 50">
                    <motion.path
                      d="M0,50 L10,40 L20,45 L30,35 L40,38 L50,25 L60,30 L70,20 L80,15 L90,10 L100,5"
                      fill="none"
                      stroke="#9b87f5"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.path
                      d="M0,50 L10,42 L20,40 L30,38 L40,30 L50,32 L60,25 L70,28 L80,20 L90,18 L100,15"
                      fill="none"
                      stroke="#33C3F0"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.8 }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box rowGap={16}>
                <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={16} height="30%">
                  <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Users</Box>
                  <MotionBox 
                    fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginTop={4}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    127,543
                  </MotionBox>
                  <Box color="var(--foreground)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" marginTop={4}>+12.4% vs last week</Box>
                </Box>
                <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={16} height="30%">
                  <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Conversion Rate</Box>
                  <MotionBox 
                    fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginTop={4}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    4.87%
                  </MotionBox>
                  <Box color="var(--foreground)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" marginTop={4}>+0.8% vs last week</Box>
                </Box>
                <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={16} height="30%">
                  <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Revenue</Box>
                  <MotionBox 
                    fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginTop={4}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    $45,892
                  </MotionBox>
                  <Box color="var(--foreground)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" marginTop={4}>+15.2% vs last week</Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </MotionBox>
      </Box>
    </XStack>
  );
};

export default HeroSection;
