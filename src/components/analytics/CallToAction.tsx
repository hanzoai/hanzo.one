import { Box, Button, Grid, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LineChart } from "lucide-react";

const CallToAction = () => {
  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), transparent, transparent)" opacity={0.7}></Box>
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <XStack display="inline-flex" alignItems="center" justifyContent="center" backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" marginBottom={24}>
            <LineChart size={40} />
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Start Analyzing Smarter, Today</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
            Empower your business decisions with Hanzo Analytics—start for free and scale effortlessly.
          </Paragraph>
          
          <YStack display="flex" flexDirection="column" gap={24} justifyContent="center" $sm={{ flexDirection: "row" }}>
            <MotionBox
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={40} paddingVertical={24} borderStyle="none" backgroundImage="linear-gradient(to right, var(--neutral-700), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-600), var(--foreground))" }}>
                Start Free Trial
              </Button>
            </MotionBox>
            
            <MotionBox
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" variant="outline" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={40} paddingVertical={24}>
                <Text display="flex" alignItems="center">
                  Request Demo <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
                </Text>
              </Button>
            </MotionBox>
          </YStack>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {[
            {
              title: "Rapid Implementation",
              description: "Get up and running in minutes with our easy-to-use SDKs and APIs."
            },
            {
              title: "Scale With Confidence",
              description: "From startups to enterprises, Hanzo Analytics grows with your business."
            },
            {
              title: "24/7 Support",
              description: "Our expert team and vibrant community are always ready to help."
            }
          ].map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              backgroundColor="rgb(255 255 255 / 0.2)" padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
            >
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={12}>{feature.title}</H3>
              <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          marginTop={64} textAlign="center" color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
        >
          No credit card required. Free trial includes all premium features for 14 days.
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
