import { Anchor, Box, Button, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, BarChart3, Zap, Users } from "lucide-react";

const SenseiMethod = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Text display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={16}>
              Principles in Practice
            </Text>
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              The Sensei Method
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
              A practical framework for applying AI and data to achieve exponential growth for businesses.
              If the "Zen of Hanzo" is the theory, the Sensei Method is the practice.
            </Paragraph>
            
            <Box rowGap={24} marginBottom={32}>
              <XStack display="flex" alignItems="flex-start">
                <Box padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" marginRight={16}>
                  <Target size={24} color="var(--foreground)" />
                </Box>
                <div>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={4}>Identify First-Principle Goals</H3>
                  <Paragraph color="var(--neutral-300)">Drill down to the fundamental objectives that drive real value.</Paragraph>
                </div>
              </XStack>
              
              <XStack display="flex" alignItems="flex-start">
                <Box padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" marginRight={16}>
                  <Zap size={24} color="var(--foreground)" />
                </Box>
                <div>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={4}>Rapid Prototyping</H3>
                  <Paragraph color="var(--neutral-300)">Build quickly, test assumptions, and iterate with purpose.</Paragraph>
                </div>
              </XStack>
              
              <XStack display="flex" alignItems="flex-start">
                <Box padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" marginRight={16}>
                  <BarChart3 size={24} color="var(--foreground)" />
                </Box>
                <div>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={4}>Data-Driven Decisions</H3>
                  <Paragraph color="var(--neutral-300)">Measure impact, analyze patterns, and let insights guide strategy.</Paragraph>
                </div>
              </XStack>
              
              <XStack display="flex" alignItems="flex-start">
                <Box padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" marginRight={16}>
                  <Users size={24} color="var(--foreground)" />
                </Box>
                <div>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={4}>Sensei Mentorship</H3>
                  <Paragraph color="var(--neutral-300)">Work directly with expert "senseis" to implement and refine your approach.</Paragraph>
                </div>
              </XStack>
            </Box>
            
            <Button 
              color="var(--white)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
            >
              <Anchor minHeight={44} href="https://sensei.group" target="_blank" rel="noopener noreferrer" display="flex" >
                Visit Sensei Group
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
              </Anchor>
            </Button>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            position="relative"
          >
            <Box borderRadius="var(--radius-2xl)" padding={4} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
              <Box backgroundColor="rgb(0 0 0 / 0.5)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" overflow="hidden">
                <Box display="inline-block" 
                  src="/placeholder.svg" 
                  alt="Sensei Method in action" 
                  render="img" width="100%" height="auto" borderTopLeftRadius="var(--radius-xl)" borderTopRightRadius="var(--radius-xl)"
                />
                <Box padding={32}>
                  <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>The Impact of Sensei</H3>
                  <Paragraph color="var(--neutral-300)" marginBottom={24}>
                    Through the Sensei Method and Sensei Group, we've helped clients generate over $1 billion in revenue,
                    launch groundbreaking products, and build scalable businesses.
                  </Paragraph>
                  <XStack display="flex" flexWrap="wrap" gap={16}>
                    <Box backgroundColor="var(--surface-card-emphasis)" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)">
                      <Text fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">$1B+</Text>
                      <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Client Revenue</Paragraph>
                    </Box>
                    <Box backgroundColor="var(--surface-card-emphasis)" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)">
                      <Text fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">100+</Text>
                      <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Product Launches</Paragraph>
                    </Box>
                    <Box backgroundColor="var(--surface-card-emphasis)" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)">
                      <Text fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">10+</Text>
                      <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Years Experience</Paragraph>
                    </Box>
                  </XStack>
                </Box>
              </Box>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default SenseiMethod;
