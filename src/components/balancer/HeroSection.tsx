import { Anchor, Box, Button, Grid, H3, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <Box render="section" paddingTop={128} paddingBottom={80} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      {/* Background elements */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.3} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"></Box>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <Box textAlign="center" marginBottom={48}>
          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16} marginBottom={24}>
            <Anchor tap href="/pricing" display="flex" alignItems="center" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>
              <Button variant="ghost" size="sm" gap={8} borderRadius="var(--radius-full)">
                <FileText size={16} />
                Pricing
              </Button>
            </Anchor>
            <Anchor tap href="https://docs.hanzo.ai/balancer" display="flex" alignItems="center" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}>
              <Button variant="ghost" size="sm" gap={8} borderRadius="var(--radius-full)">
                <BookOpen size={16} />
                Docs
              </Button>
            </Anchor>
          </XStack>

          <Box marginBottom={16}>
            <Text color="var(--foreground)" fontWeight="500" lineHeight="var(--leading-relaxed)">Hanzo Balancer v3.3 Is Now Available! 
              <Anchor tap href="#learn-more" marginLeft={8} color="var(--foreground)" textDecorationLine="underline">Learn More</Anchor>
            </Text>
          </Box>
          
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            fontSize="var(--text-4xl)" lineHeight="var(--leading-tight)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
          >
            The Cloud Native<br />
            <Text color="var(--foreground)">Application Proxy</Text>
          </MotionText>
          
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            fontSize="var(--text-xl)" lineHeight="var(--leading-relaxed)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={48} $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}
          >
            Simplify and automate the discovery, routing, and load balancing of microservices.
          </MotionText>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            display="flex" flexDirection="column" justifyContent="center" gap={16} marginBottom={64} $sm={{ flexDirection: "row" }}
          >
            <Button 
              size="lg"
              backgroundColor="var(--neutral-600)" color="var(--white)" borderRadius="var(--radius-full)" paddingVertical={24} hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            >
              <Text paddingVertical={4} lineHeight="var(--leading-relaxed)">GET STARTED</Text>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              borderColor="var(--neutral-600)" color="var(--white)" borderRadius="var(--radius-full)" paddingVertical={24} hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            >
              <Text paddingVertical={4} lineHeight="var(--leading-relaxed)">Start Free Trial</Text>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              borderColor="var(--neutral-600)" color="var(--white)" borderRadius="var(--radius-full)" paddingVertical={24} hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            >
              <Text paddingVertical={4} lineHeight="var(--leading-relaxed)">Request Demo</Text>
            </Button>
          </MotionBox>
          
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} maxWidth="56rem" marginHorizontal="auto" $md={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            <Box textAlign="center">
              <H3 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={8}>3.2B+</H3>
              <Paragraph color="var(--neutral-400)">Downloads</Paragraph>
            </Box>
            <Box textAlign="center">
              <H3 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={8}>47K+</H3>
              <Paragraph color="var(--neutral-400)">Stars on Github</Paragraph>
            </Box>
            <Box textAlign="center">
              <H3 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={8}>900+</H3>
              <Paragraph color="var(--neutral-400)">Contributors</Paragraph>
            </Box>
            <Box textAlign="center">
              <H3 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={8}>Top 15</H3>
              <Paragraph color="var(--neutral-400)">on Docker hub</Paragraph>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
